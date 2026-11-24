<?php

namespace Tests\Feature;

use App\Models\Certification;
use App\Models\Portfolio;
use App\Models\Setting;
use App\Models\User;
use App\Support\Honeypot;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class PhaseBSecurityTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_forgot_password_response_is_identical_for_known_and_unknown_emails(): void
    {
        Notification::fake();

        User::factory()->create(['email' => 'known@example.com']);

        $expected = 'Jika alamat email Anda terdaftar, instruksi pemulihan telah dikirimkan.';

        $this->post(route('password.email'), ['email' => 'known@example.com'])
            ->assertSessionHas('status', $expected);

        $this->post(route('password.email'), ['email' => 'unknown@example.com'])
            ->assertSessionHas('status', $expected);
    }

    public function test_contact_accepts_a_valid_honeypot(): void
    {
        $fields = Honeypot::fields(now()->subSeconds(5)->timestamp);

        $this->post(route('contact.send'), array_merge([
            'name' => 'Honeypot Valid',
            'email' => 'valid-honeypot@example.com',
            'subject' => 'Hello',
            'message' => 'Valid submission.',
        ], $fields))->assertSessionHas('contact_success');

        $this->assertDatabaseHas('contact_messages', ['email' => 'valid-honeypot@example.com']);
    }

    public function test_contact_silently_rejects_missing_fast_or_tampered_honeypot(): void
    {
        $base = [
            'name' => 'Bot',
            'email' => 'bot@example.com',
            'subject' => 'Spam',
            'message' => 'Spam message.',
        ];

        $this->post(route('contact.send'), $base)->assertSessionHas('contact_success');
        $this->assertDatabaseCount('contact_messages', 0);

        $this->post(route('contact.send'), array_merge($base, Honeypot::fields()))
            ->assertSessionHas('contact_success');
        $this->assertDatabaseCount('contact_messages', 0);

        $tampered = Honeypot::fields(now()->subSeconds(5)->timestamp);
        $tampered['hp_check'] = 'tampered';

        $this->post(route('contact.send'), array_merge($base, $tampered))
            ->assertSessionHas('contact_success');
        $this->assertDatabaseCount('contact_messages', 0);
    }

    public function test_backup_import_requires_a_matching_confirmation_token(): void
    {
        $admin = User::first();
        $payload = ['portfolios' => [['title' => 'Token Test', 'slug' => 'token-test']]];

        session(['pending_backup_import' => $payload, 'pending_backup_token' => 'secret-token']);
        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password'])
            ->assertSessionHasErrors('token');

        session(['pending_backup_import' => $payload, 'pending_backup_token' => 'secret-token']);
        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password', 'token' => 'wrong'])
            ->assertSessionHasErrors('backup_file');

        session(['pending_backup_import' => $payload, 'pending_backup_token' => 'secret-token']);
        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password', 'token' => 'secret-token'])
            ->assertRedirect(route('admin.settings.index'));

        $this->assertDatabaseHas('portfolios', ['slug' => 'token-test']);
    }

    public function test_backup_preview_rejects_traversal_in_image_and_avatar_fields(): void
    {
        $admin = User::first();

        $payloads = [
            ['services' => [['title' => 'Malicious Service', 'image' => 'uploads/../../.env']]],
            ['settings' => [['key' => 'hero_avatar', 'value' => 'uploads/../../.env']]],
        ];

        foreach ($payloads as $payload) {
            $file = UploadedFile::fake()->createWithContent('backup.json', json_encode($payload));

            $this->actingAs($admin)
                ->post(route('admin.backup.preview'), ['backup_file' => $file])
                ->assertSessionHasErrors('backup_file');
        }
    }

    public function test_admin_rejects_unsafe_url_schemes(): void
    {
        $admin = User::first();

        $this->actingAs($admin)->post(route('admin.portfolios.store'), [
            'title' => 'Unsafe Link Project',
            'category' => 'Web App',
            'description' => 'Test',
            'project_url' => 'javascript://example.com/%0Aalert(1)',
        ])->assertSessionHasErrors('project_url');

        $this->actingAs($admin)->post(route('admin.portfolios.store'), [
            'title' => 'Safe Link Project',
            'category' => 'Web App',
            'description' => 'Test',
            'project_url' => 'https://example.com/project',
        ])->assertSessionHasNoErrors();
    }

    public function test_backup_import_strips_unsafe_urls(): void
    {
        $admin = User::first();

        session([
            'pending_backup_import' => [
                'portfolios' => [[
                    'title' => 'Unsafe Import Project',
                    'slug' => 'unsafe-import-project',
                    'project_url' => 'javascript://example.com/%0Aalert(1)',
                ]],
            ],
            'pending_backup_token' => 'test-token-123',
        ]);

        $this->actingAs($admin)->post(route('admin.backup.import'), [
            'password' => 'password',
            'token' => 'test-token-123',
        ])->assertRedirect(route('admin.settings.index'));

        $this->assertNull(Portfolio::where('slug', 'unsafe-import-project')->value('project_url'));
    }

    public function test_certification_rejects_unsafe_url_schemes(): void
    {
        $admin = User::first();

        $this->actingAs($admin)->post(route('admin.certifications.store'), [
            'name' => 'Unsafe Certification',
            'issuer' => 'Issuer',
            'credential_url' => 'javascript://example.com/%0Aalert(1)',
        ])->assertSessionHasErrors('credential_url');
    }

    public function test_backup_import_strips_unsafe_certification_urls(): void
    {
        $admin = User::first();

        session([
            'pending_backup_import' => [
                'certifications' => [[
                    'name' => 'Unsafe Certification Import',
                    'issuer' => 'Issuer',
                    'credential_url' => 'javascript://example.com/%0Aalert(1)',
                ]],
            ],
            'pending_backup_token' => 'test-token-123',
        ]);

        $this->actingAs($admin)->post(route('admin.backup.import'), [
            'password' => 'password',
            'token' => 'test-token-123',
        ])->assertRedirect(route('admin.settings.index'));

        $this->assertNull(
            Certification::where('name', 'Unsafe Certification Import')->value('credential_url')
        );
    }

    public function test_cv_upload_requires_a_real_pdf(): void
    {
        Storage::fake('public');
        $admin = User::first();

        $file = UploadedFile::fake()->createWithContent('cv.pdf', 'this is not a pdf');

        $this->actingAs($admin)->post(route('admin.settings.update'), [
            'site_name' => 'Test Site',
            'hero_title' => 'Hero',
            'hero_subtitle' => 'Subtitle',
            'about_text' => 'About',
            'cv_file' => $file,
        ])->assertSessionHasErrors('cv_file');
    }

    public function test_home_contact_form_renders_honeypot_fields(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('name="hp_time"', false);
        $response->assertSee('name="hp_check"', false);
    }

    public function test_backup_preview_issues_confirmation_token(): void
    {
        $admin = User::first();

        $file = UploadedFile::fake()->createWithContent('backup.json', json_encode([
            'portfolios' => [['title' => 'Preview Token', 'slug' => 'preview-token']],
        ]));

        $response = $this->actingAs($admin)->post(route('admin.backup.preview'), [
            'backup_file' => $file,
        ]);

        $response->assertOk();
        $response->assertSee('name="token"', false);

        $token = (string) session('pending_backup_token');
        $this->assertNotSame('', $token);
        $response->assertSee($token, false);
    }

    public function test_cv_download_counter_increments_atomically(): void
    {
        Storage::fake('public');
        Storage::disk('public')->put('uploads/cv/cv_phaseb.pdf', '%PDF-1.4 test');

        Setting::set('cv_file_path', 'uploads/cv/cv_phaseb.pdf');
        Setting::set('cv_download_count', '0');

        $this->get(route('cv.download'))->assertOk();

        $this->assertSame('1', (string) DB::table('settings')->where('key', 'cv_download_count')->value('value'));
    }
}
