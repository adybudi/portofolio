<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class CloudflareTurnstileTest extends TestCase
{
    use RefreshDatabase;

    public function test_when_turnstile_is_disabled_contact_request_succeeds_without_token(): void
    {
        Config::set('services.turnstile.enabled', false);

        $response = $this->post(route('contact.send'), [
            'name' => 'Budi Tester',
            'email' => 'budi@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Halo, ini pesan pengujian tanpa captcha.',
        ]);

        $response->assertSessionHas('contact_success');
        $this->assertDatabaseHas('contact_messages', [
            'email' => 'budi@example.com',
        ]);
    }

    public function test_when_turnstile_is_enabled_contact_request_fails_if_token_is_missing(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        $response = $this->from(route('home'))->post(route('contact.send'), [
            'name' => 'Budi Tester',
            'email' => 'budi@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Halo, ini pesan pengujian.',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'budi@example.com',
        ]);
    }

    public function test_when_turnstile_is_enabled_contact_request_fails_if_cloudflare_rejects_token(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        Http::fake([
            'https://challenges.cloudflare.com/turnstile/v0/siteverify' => Http::response([
                'success' => false,
                'error-codes' => ['invalid-input-response'],
            ], 200),
        ]);

        $response = $this->from(route('home'))->post(route('contact.send'), [
            'name' => 'Budi Tester',
            'email' => 'budi@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Halo, ini pesan pengujian.',
            'cf-turnstile-response' => 'invalid-token-123',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'budi@example.com',
        ]);
    }

    public function test_when_turnstile_is_enabled_contact_request_succeeds_when_cloudflare_verifies_token(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        Http::fake([
            'https://challenges.cloudflare.com/turnstile/v0/siteverify' => Http::response([
                'success' => true,
                'challenge_ts' => now()->toIso8601String(),
                'hostname' => 'localhost',
            ], 200),
        ]);

        $response = $this->post(route('contact.send'), [
            'name' => 'Budi Tester',
            'email' => 'budi_valid@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Halo, ini pesan valid.',
            'cf-turnstile-response' => 'valid-token-xyz',
        ]);

        $response->assertSessionHas('contact_success');
        $this->assertDatabaseHas('contact_messages', [
            'email' => 'budi_valid@example.com',
        ]);
    }

    public function test_when_turnstile_is_enabled_login_request_fails_if_token_is_missing(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        $user = User::factory()->create([
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->from(route('login'))->post(route('login'), [
            'email' => 'admin@example.com',
            'password' => 'password123',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
        $this->assertGuest();
    }

    public function test_when_turnstile_is_enabled_login_request_succeeds_with_valid_token(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        Http::fake([
            'https://challenges.cloudflare.com/turnstile/v0/siteverify' => Http::response([
                'success' => true,
            ], 200),
        ]);

        $user = User::factory()->create([
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->post(route('login'), [
            'email' => 'admin@example.com',
            'password' => 'password123',
            'cf-turnstile-response' => 'valid-turnstile-token',
        ]);

        $response->assertRedirect(route('dashboard', absolute: false));
        $this->assertAuthenticatedAs($user);
    }

    public function test_when_turnstile_is_enabled_registration_fails_if_token_is_missing(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');
        \App\Models\Setting::set('enable_public_registration', '1');

        $response = $this->from(route('register'))->post(route('register'), [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
        $this->assertGuest();
    }

    public function test_when_turnstile_is_enabled_forgot_password_fails_if_token_is_missing(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        $response = $this->from(route('password.request'))->post(route('password.email'), [
            'email' => 'user@example.com',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
    }

    public function test_turnstile_handles_timeout_gracefully(): void
    {
        Config::set('services.turnstile.enabled', true);
        Config::set('services.turnstile.secret_key', 'test-secret-key');

        Http::fake([
            'https://challenges.cloudflare.com/turnstile/v0/siteverify' => function () {
                throw new \Exception('Connection timeout');
            },
        ]);

        $response = $this->from(route('home'))->post(route('contact.send'), [
            'name' => 'Budi Tester',
            'email' => 'budi_timeout@example.com',
            'subject' => 'Project Inquiry',
            'message' => 'Halo, ini pesan timeout.',
            'cf-turnstile-response' => 'some-token',
        ]);

        $response->assertSessionHasErrors(['cf-turnstile-response']);
    }
}

