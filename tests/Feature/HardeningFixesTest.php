<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class HardeningFixesTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_admin_resource_show_routes_are_not_exposed(): void
    {
        $admin = User::first();

        // The resource "show" route is removed; only the write methods remain on
        // the {id} URI, so a GET request returns 405 instead of a 500.
        $this->actingAs($admin)->get('/admin/portfolios/1')->assertStatus(405);
        $this->actingAs($admin)->get('/admin/products/1')->assertStatus(405);
        $this->actingAs($admin)->get('/admin/services/1')->assertStatus(405);
    }

    public function test_last_admin_cannot_delete_own_account(): void
    {
        $admin = User::first();

        $response = $this->actingAs($admin)
            ->from('/profile')
            ->delete('/profile', ['password' => 'password']);

        $response->assertRedirect('/profile');
        $response->assertSessionHasErrorsIn('userDeletion', 'password');
        $this->assertDatabaseHas('users', ['id' => $admin->id]);
    }

    public function test_admin_can_delete_account_when_another_admin_exists(): void
    {
        $admin = User::first();

        User::factory()->create([
            'is_admin' => true,
        ]);

        $response = $this->actingAs($admin)->delete('/profile', [
            'password' => 'password',
        ]);

        $response->assertRedirect('/');
        $this->assertDatabaseMissing('users', ['id' => $admin->id]);
    }

    public function test_cv_download_falls_back_to_public_disk_when_not_copied(): void
    {
        Storage::fake('public');
        Storage::disk('public')->put('uploads/cv/cv_test.pdf', '%PDF-1.4 test');
        Setting::set('cv_file_path', 'uploads/cv/cv_test.pdf');

        $this->assertFileDoesNotExist(public_path('uploads/cv/cv_test.pdf'));

        $response = $this->get(route('cv.download'));

        $response->assertOk();
        $response->assertHeader('content-disposition');
    }

    public function test_settings_cache_is_invalidated_after_write(): void
    {
        Setting::set('site_name', 'First Value');
        $this->assertSame('First Value', Setting::get('site_name'));

        Setting::set('site_name', 'Second Value');
        $this->assertSame('Second Value', Setting::get('site_name'));
    }

    public function test_seeder_does_not_reset_existing_admin_or_custom_settings(): void
    {
        $admin = User::first();
        $admin->password = Hash::make('custom-secret-password');
        $admin->save();

        Setting::set('site_name', 'Custom Site Name');

        $this->seed();

        $this->assertTrue(Hash::check('custom-secret-password', $admin->fresh()->password));
        $this->assertSame('Custom Site Name', Setting::get('site_name'));
    }

    public function test_sitemap_is_available(): void
    {
        $response = $this->get('/sitemap.xml');

        $response->assertOk();
        $response->assertHeader('Content-Type', 'application/xml; charset=UTF-8');
        $response->assertSee('<urlset', false);
        $response->assertSee(route('home'), false);
    }

    public function test_portfolio_page_lists_imported_projects(): void
    {
        $response = $this->get(route('portfolio.index'));

        $response->assertOk();
        $response->assertSee('E-Commerce Bali Svaha');
        $response->assertSee('Makcik Rental');
        $response->assertSee('Total 33 proyek');
        $response->assertDontSee('Sistem Pemantauan Mobil Damkar');
    }

    public function test_repeated_backup_import_updates_instead_of_duplicating_records(): void
    {
        $admin = User::first();
        $payload = [
            'portfolios' => [[
                'title' => 'Repeated Project',
                'slug' => 'repeated-project',
                'category' => 'Web App',
                'description' => 'First description',
            ]],
            'certifications' => [[
                'name' => 'Cloud Native Certificate',
                'issuer' => 'CNCF',
                'issue_date' => '2025-05-01',
            ]],
        ];

        session(['pending_backup_import' => $payload]);
        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password'])
            ->assertRedirect(route('admin.settings.index'));

        session(['pending_backup_import' => $payload]);
        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password'])
            ->assertRedirect(route('admin.settings.index'));

        $this->assertSame(1, \App\Models\Portfolio::where('slug', 'repeated-project')->count());
        $this->assertDatabaseHas('certifications', [
            'name' => 'Cloud Native Certificate',
            'issue_date' => '2025-05-01',
        ]);
    }

    public function test_backup_import_does_not_blank_settings_with_null_values(): void
    {
        $admin = User::first();
        Setting::set('site_name', 'Keep This Name');

        session(['pending_backup_import' => [
            'settings' => [
                ['key' => 'site_name', 'value' => null],
            ],
        ]]);

        $this->actingAs($admin)->post(route('admin.backup.import'), ['password' => 'password'])
            ->assertRedirect(route('admin.settings.index'));

        $this->assertSame('Keep This Name', Setting::get('site_name'));
    }
}
