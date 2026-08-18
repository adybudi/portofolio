<?php

namespace Tests\Feature;

use App\Models\Portfolio;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Tests\TestCase;

class SecurityBackupHardeningTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_guest_is_rejected_from_backup_export_and_import(): void
    {
        $exportRes = $this->get(route('admin.backup.export'));
        $exportRes->assertRedirect(route('login'));

        $importRes = $this->post(route('admin.backup.import'), ['password' => 'password']);
        $importRes->assertRedirect(route('login'));
    }

    public function test_authenticated_non_admin_user_is_rejected(): void
    {
        $regularUser = User::create([
            'name' => 'Regular User',
            'email' => 'regular@example.com',
            'password' => Hash::make('password123'),
        ]);

        $exportRes = $this->actingAs($regularUser)->get(route('admin.backup.export'));
        $exportRes->assertStatus(403);

        $previewRes = $this->actingAs($regularUser)->post(route('admin.backup.preview'));
        $previewRes->assertStatus(403);
    }

    public function test_admin_without_can_manage_backup_permission_is_rejected(): void
    {
        $admin = new User();
        $admin->name = 'Admin Without Backup Perm';
        $admin->email = 'admin_nobackup@example.com';
        $admin->password = Hash::make('password123');
        $admin->is_admin = true;
        $admin->can_manage_backup = false;
        $admin->save();

        $exportRes = $this->actingAs($admin)->get(route('admin.backup.export'));
        $exportRes->assertStatus(403);

        $previewRes = $this->actingAs($admin)->post(route('admin.backup.preview'));
        $previewRes->assertStatus(403);
    }

    public function test_admin_with_can_manage_backup_and_confirmed_password_can_export_backup(): void
    {
        $admin = User::first(); // Seeded admin has can_manage_backup = true

        // Simulate password confirmation in session
        session(['auth.password_confirmed_at' => time()]);

        $response = $this->actingAs($admin)->get(route('admin.backup.export'));
        $response->assertOk();
        $response->assertHeader('content-type', 'application/json');
        $this->assertStringContainsString('backup_portofolio_cms_', $response->headers->get('content-disposition'));
    }

    public function test_export_backup_redirects_unconfirmed_password_session_to_password_confirm(): void
    {
        $admin = User::first();

        // Without auth.password_confirmed_at session, password.confirm middleware redirects to confirm-password
        $response = $this->actingAs($admin)->get(route('admin.backup.export'));
        $response->assertRedirect(route('password.confirm'));
    }

    public function test_mass_assignment_cannot_grant_can_manage_backup(): void
    {
        $regularUser = User::create([
            'name' => 'Regular User',
            'email' => 'hacker@example.com',
            'password' => Hash::make('password123'),
        ]);

        // Attempt HTTP profile update with mass-assigned privileged fields
        $this->actingAs($regularUser)->patch(route('profile.update'), [
            'name' => 'Hacker Name',
            'email' => 'hacker@example.com',
            'is_admin' => true,
            'can_manage_backup' => true,
        ]);

        $regularUser->refresh();
        $this->assertFalse((bool) $regularUser->is_admin);
        $this->assertFalse((bool) $regularUser->can_manage_backup);
    }

    public function test_oversized_import_file_is_rejected(): void
    {
        $admin = User::first();

        // Fake 6MB file (> 5MB limit)
        $file = UploadedFile::fake()->create('large_backup.json', 6144, 'application/json');

        $response = $this->actingAs($admin)->post(route('admin.backup.preview'), [
            'backup_file' => $file,
        ]);

        $response->assertSessionHasErrors('backup_file');
    }

    public function test_invalid_corrupt_json_file_is_rejected(): void
    {
        $admin = User::first();

        $file = UploadedFile::fake()->createWithContent('corrupt.json', '{invalid json payload');

        $response = $this->actingAs($admin)->post(route('admin.backup.preview'), [
            'backup_file' => $file,
        ]);

        $response->assertSessionHasErrors('backup_file');
    }

    public function test_path_traversal_payload_in_backup_is_rejected(): void
    {
        $admin = User::first();

        $traversalData = json_encode([
            'portfolios' => [
                [
                    'title' => 'Malicious Portfolio',
                    'image_path' => 'uploads/../../.env',
                ],
            ],
        ]);

        $file = UploadedFile::fake()->createWithContent('malicious.json', $traversalData);

        $response = $this->actingAs($admin)->post(route('admin.backup.preview'), [
            'backup_file' => $file,
        ]);

        $response->assertSessionHasErrors('backup_file');
    }

    public function test_import_failure_triggers_database_rollback(): void
    {
        $admin = User::first();

        session([
            'pending_backup_import' => [
                'portfolios' => [
                    [
                        'title' => 'Valid Portfolio Rollback Test',
                        'slug' => 'valid-portfolio-rollback-test-slug',
                    ],
                    [
                        'title' => 'Invalid Portfolio Traversal',
                        'slug' => 'invalid-portfolio-slug-2',
                        'image_path' => 'uploads/../../.env',
                    ],
                ],
            ],
        ]);

        $response = $this->actingAs($admin)->post(route('admin.backup.import'), [
            'password' => 'password',
        ]);

        $response->assertSessionHasErrors('backup_file');
        $this->assertDatabaseMissing('portfolios', ['slug' => 'valid-portfolio-rollback-test-slug']);
    }

    public function test_backup_files_cannot_be_accessed_directly_via_public_url(): void
    {
        $response = $this->get('/backup_portofolio_cms.json');
        $response->assertStatus(404);
    }

    public function test_audit_log_is_recorded_on_backup_export(): void
    {
        $admin = User::first();
        session(['auth.password_confirmed_at' => time()]);

        Log::shouldReceive('info')
            ->once()
            ->withArgs(function ($message, $context) {
                return str_contains($message, 'AUDIT_LOG') &&
                       $context['action'] === 'export' &&
                       $context['status'] === 'success';
            });

        $this->actingAs($admin)->get(route('admin.backup.export'));
    }
}
