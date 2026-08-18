<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Tool;
use App\Models\ContactMessage;
use App\Models\Setting;
use App\Models\Experience;
use App\Models\Certification;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class NewFeaturesTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_visitor_can_submit_contact_message(): void
    {
        $response = $this->post(route('contact.send'), [
            'name' => 'Budi Santoso',
            'email' => 'budi@example.com',
            'subject' => 'Tawaran Proyek Mobile App',
            'message' => 'Halo Ady, saya tertarik untuk mendiskusikan pembuatan aplikasi mobile.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHas('contact_success');

        $this->assertDatabaseHas('contact_messages', [
            'email' => 'budi@example.com',
            'subject' => 'Tawaran Proyek Mobile App',
        ]);
    }

    public function test_launching_tool_increments_clicks_count(): void
    {
        $tool = Tool::first() ?? Tool::create([
            'name' => 'Test SQL Tool',
            'slug' => 'test-sql-tool',
            'description' => 'Test tool description',
            'url' => 'https://tools.adybudi.com/sql',
            'category' => 'Developer Utility',
            'is_active' => true,
            'clicks_count' => 0,
        ]);
        $initialClicks = $tool->clicks_count;

        $response = $this->get(route('tools.launch', $tool));

        $response->assertRedirect($tool->url);
        $this->assertEquals($initialClicks + 1, $tool->fresh()->clicks_count);
    }

    public function test_admin_can_view_and_manage_messages(): void
    {
        $admin = User::first();
        $message = ContactMessage::create([
            'name' => 'Test Sender',
            'email' => 'test@sender.com',
            'subject' => 'Test Subject',
            'message' => 'Test Body',
        ]);

        $response = $this->actingAs($admin)->get(route('admin.messages.index'));
        $response->assertOk();
        $response->assertSee('Test Sender');

        $showResponse = $this->actingAs($admin)->get(route('admin.messages.show', $message));
        $showResponse->assertOk();
        $this->assertTrue($message->fresh()->is_read);
    }

    public function test_admin_can_export_backup_json(): void
    {
        $admin = User::first();
        session(['auth.password_confirmed_at' => time()]);

        $response = $this->actingAs($admin)->get(route('admin.backup.export'));
        $response->assertOk();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_admin_can_toggle_section_visibilities(): void
    {
        $admin = User::first();

        $response = $this->actingAs($admin)->post(route('admin.settings.update'), [
            'site_name' => 'Ady Budisantika',
            'hero_title' => 'FULL STACK DEVELOPER',
            'hero_subtitle' => 'Building Web Apps',
            'about_text' => 'About text',
            'show_portfolio_section' => '1',
            'show_services_section' => '1',
            'show_contact_section' => '1',
        ]);

        $response->assertRedirect(route('admin.settings.index'));

        $this->assertEquals('0', Setting::get('show_products_section'));
        $this->assertEquals('0', Setting::get('show_experience_section'));
        $this->assertEquals('0', Setting::get('show_certifications_section'));

        $homeResponse = $this->get(route('home'));
        $homeResponse->assertOk();
        $homeResponse->assertDontSee('KATALOG PRODUK & SOURCE CODE');
        $homeResponse->assertDontSee('REKAM JEJAK KARIR');
        $homeResponse->assertDontSee('SERTIFIKASI TEKNIKAL');
    }

    public function test_admin_can_crud_experiences_and_certifications(): void
    {
        $admin = User::first();

        // Create Experience
        $expResponse = $this->actingAs($admin)->post(route('admin.experiences.store'), [
            'title' => 'Principal Architect',
            'company' => 'Global Tech Corp',
            'period' => '2025 — Present',
            'description' => 'Architecting large scale systems',
            'order' => 1,
        ]);
        $expResponse->assertRedirect(route('admin.experiences.index'));
        $this->assertDatabaseHas('experiences', ['company' => 'Global Tech Corp']);

        // Create Certification
        $certResponse = $this->actingAs($admin)->post(route('admin.certifications.store'), [
            'name' => 'Kubernetes Certified Engineer',
            'issuer' => 'CNCF',
            'icon' => '☸️',
            'description' => 'Container Orchestration Mastery',
            'credential_url' => 'https://cncf.io',
            'order' => 1,
        ]);
        $certResponse->assertRedirect(route('admin.certifications.index'));
        $this->assertDatabaseHas('certifications', ['name' => 'Kubernetes Certified Engineer']);
    }

    public function test_registration_is_protected_when_admin_exists_and_disabled(): void
    {
        // Default setting enable_public_registration is 0
        $response = $this->get('/register');
        $response->assertRedirect(route('login'));
        $response->assertSessionHas('status', 'Registrasi pengguna baru ditutup demi keamanan sistem.');

        $postResponse = $this->post('/register', [
            'name' => 'Attacker',
            'email' => 'attacker@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ]);
        $postResponse->assertRedirect(route('login'));
        $this->assertDatabaseMissing('users', ['email' => 'attacker@example.com']);
    }

    public function test_honeypot_prevents_spam_submission(): void
    {
        $response = $this->post(route('contact.send'), [
            'name' => 'Spam Bot',
            'email' => 'bot@spammer.com',
            'subject' => 'Buy cheap stuff',
            'message' => 'Spam content',
            'website_url' => 'http://spam-link.com', // Filled honeypot field
        ]);

        $response->assertRedirect();
        $this->assertDatabaseMissing('contact_messages', [
            'email' => 'bot@spammer.com',
        ]);
    }
}
