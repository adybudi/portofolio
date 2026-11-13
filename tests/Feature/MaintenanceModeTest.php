<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MaintenanceModeTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_when_maintenance_is_disabled_public_routes_are_accessible_normally(): void
    {
        Setting::set('maintenance_mode_enabled', '0');

        $this->get('/')->assertStatus(200);
        $this->get('/services')->assertStatus(200);
        $this->get('/products')->assertStatus(200);
        $this->get('/tools')->assertStatus(200);
    }

    public function test_when_maintenance_is_enabled_public_routes_return_503_maintenance_page(): void
    {
        Setting::set('maintenance_mode_enabled', '1');
        Setting::set('maintenance_title', 'Pemeliharaan Server Utama');
        Setting::set('maintenance_message', 'Server sedang dioptimasi.');
        Setting::set('maintenance_until', '19 Agustus 2026, 12:00 WIB');

        $response = $this->get('/');
        $response->assertStatus(503);
        $response->assertSee('Pemeliharaan Server Utama');
        $response->assertSee('Server sedang dioptimasi.');
        $response->assertSee('19 Agustus 2026, 12:00 WIB');
        $response->assertHeader('Retry-After', '300');

        $this->get('/services')->assertStatus(503);
        $this->get('/products')->assertStatus(503);
        $this->get('/tools')->assertStatus(503);
    }

    public function test_when_maintenance_is_enabled_json_request_receives_503_json_response(): void
    {
        Setting::set('maintenance_mode_enabled', '1');
        Setting::set('maintenance_message', 'Sistem sedang dalam perbaikan API.');
        Setting::set('maintenance_until', '12:00 WIB');

        $response = $this->getJson('/');
        $response->assertStatus(503);
        $response->assertJson([
            'status' => 'maintenance',
            'message' => 'Sistem sedang dalam perbaikan API.',
            'until' => '12:00 WIB',
        ]);
        $response->assertHeader('Retry-After', '300');
    }

    public function test_when_maintenance_is_enabled_login_and_auth_routes_remain_accessible_for_guests(): void
    {
        Setting::set('maintenance_mode_enabled', '1');

        $this->get('/login')->assertStatus(200);
        $this->get('/forgot-password')->assertStatus(200);
    }

    public function test_when_maintenance_is_enabled_authenticated_admin_can_access_admin_dashboard_and_public_routes(): void
    {
        Setting::set('maintenance_mode_enabled', '1');

        $admin = User::factory()->create([
            'is_admin' => true,
        ]);

        $this->actingAs($admin)->get('/admin/dashboard')->assertStatus(200);
        $this->actingAs($admin)->get('/')->assertStatus(200);
        $this->actingAs($admin)->get('/services')->assertStatus(200);
    }

    public function test_admin_can_update_maintenance_mode_settings_via_settings_page(): void
    {
        $admin = User::factory()->create([
            'is_admin' => true,
        ]);

        $response = $this->actingAs($admin)->post(route('admin.settings.update'), [
            'site_name' => 'Ady Portfolio',
            'hero_title' => 'Title Test',
            'hero_subtitle' => 'Subtitle Test',
            'about_text' => 'About Test',
            'stat_years_experience' => '5+',
            'stat_projects_completed' => '40+',
            'stat_satisfied_clients' => '25+',
            'editorial_quote' => 'Quote Test',
            'maintenance_mode_enabled' => '1',
            'maintenance_title' => 'Judul Pemeliharaan Kustom',
            'maintenance_message' => 'Pesan Pemeliharaan Kustom',
            'maintenance_until' => 'Besok Siang',
        ]);

        $response->assertRedirect(route('admin.settings.index'));
        $response->assertSessionHas('success');

        $this->assertEquals('1', Setting::get('maintenance_mode_enabled'));
        $this->assertEquals('Judul Pemeliharaan Kustom', Setting::get('maintenance_title'));
        $this->assertEquals('Pesan Pemeliharaan Kustom', Setting::get('maintenance_message'));
        $this->assertEquals('Besok Siang', Setting::get('maintenance_until'));
    }
}

