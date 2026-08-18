<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class SecurityRegistrationAndAdminTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_is_rejected_when_disabled_by_default(): void
    {
        // Default setting enable_public_registration is '0'
        $getRes = $this->get('/register');
        $getRes->assertRedirect(route('login'));

        $postRes = $this->post('/register', [
            'name' => 'Unauthorized User',
            'email' => 'unauthorized@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);
        $postRes->assertRedirect(route('login'));
        $this->assertDatabaseMissing('users', ['email' => 'unauthorized@example.com']);
    }

    public function test_new_user_always_has_is_admin_false_even_with_request_manipulation(): void
    {
        Setting::set('enable_public_registration', '1');

        $response = $this->post('/register', [
            'name' => 'Attacker User',
            'email' => 'attacker@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
            'is_admin' => '1', // Request manipulation attempt
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard', absolute: false));

        $user = User::where('email', 'attacker@example.com')->first();
        $this->assertNotNull($user);
        $this->assertFalse((bool) $user->is_admin);
    }

    public function test_artisan_admin_create_command_succeeds(): void
    {
        $this->artisan('admin:create', [
            '--name' => 'Super Admin',
            '--email' => 'superadmin@example.com',
        ])
        ->expectsQuestion('Masukkan password admin', 'AdminPass123!')
        ->expectsQuestion('Konfirmasi password admin', 'AdminPass123!')
        ->assertExitCode(0);

        $this->assertDatabaseHas('users', [
            'email' => 'superadmin@example.com',
            'is_admin' => true,
        ]);

        $admin = User::where('email', 'superadmin@example.com')->first();
        $this->assertTrue(Hash::check('AdminPass123!', $admin->password));
    }

    public function test_artisan_admin_create_command_rejects_duplicate_email(): void
    {
        User::create([
            'name' => 'Existing User',
            'email' => 'existing@example.com',
            'password' => Hash::make('password123'),
            'is_admin' => false,
        ]);

        $this->artisan('admin:create', [
            '--name' => 'New Admin',
            '--email' => 'existing@example.com',
        ])
        ->assertExitCode(1);
    }

    public function test_non_admin_user_cannot_access_admin_routes(): void
    {
        $user = User::create([
            'name' => 'Regular User',
            'email' => 'regular@example.com',
            'password' => Hash::make('password123'),
            'is_admin' => false,
        ]);

        $response = $this->actingAs($user)->get(route('admin.dashboard'));
        $response->assertStatus(403);

        $settingResponse = $this->actingAs($user)->post(route('admin.settings.update'), [
            'site_name' => 'Hacked Site',
            'enable_public_registration' => '1',
        ]);
        $settingResponse->assertStatus(403);
    }
}
