<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Service;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ServiceTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_visitor_can_view_services_page_and_homepage_highlight(): void
    {
        Service::create([
            'title' => 'Jasa Pembuatan Web Laravel',
            'slug' => 'jasa-pembuatan-web-laravel',
            'description' => 'Layanan full stack development dengan Laravel & Tailwind',
            'price' => 2500000,
            'has_discount' => true,
            'discount_price' => 2000000,
            'image' => 'uploads/services/test.jpg',
            'features' => ['Fitur Responsif', 'SEO Optimized', 'CMS Admin'],
            'is_active' => true,
            'order' => 1,
        ]);

        $response = $this->get(route('services.index'));
        $response->assertStatus(200);
        $response->assertSee('Jasa Pembuatan Web Laravel');
        $response->assertSee('Fitur Responsif');

        $homeResponse = $this->get(route('home'));
        $homeResponse->assertStatus(200);
        $homeResponse->assertSee('Jasa Pembuatan Web Laravel');
    }

    public function test_admin_can_crud_service_items(): void
    {
        $admin = User::first();
        Storage::fake('public');

        // 1. Create
        $file = UploadedFile::fake()->image('service1.jpg');
        $response = $this->actingAs($admin)->post(route('admin.services.store'), [
            'title' => 'Konsultasi Arsitektur Sistem',
            'description' => 'Review arsitektur cloud dan optimasi query database',
            'price' => 1500000,
            'has_discount' => '1',
            'discount_price' => 1200000,
            'image' => $file,
            'features' => ['Analisis Skalabilitas', 'Rekomendasi Arsitektur'],
            'is_active' => '1',
            'order' => 0,
        ]);

        $response->assertRedirect(route('admin.services.index'));
        $this->assertDatabaseHas('services', [
            'title' => 'Konsultasi Arsitektur Sistem',
            'price' => 1500000,
        ]);

        $service = Service::where('title', 'Konsultasi Arsitektur Sistem')->first();

        // 2. Edit
        $editResponse = $this->actingAs($admin)->put(route('admin.services.update', $service), [
            'title' => 'Konsultasi Arsitektur Sistem Pro',
            'description' => 'Updated description',
            'price' => 1800000,
            'features' => ['Analisis Skalabilitas V2'],
            'is_active' => '1',
            'order' => 2,
        ]);

        $editResponse->assertRedirect(route('admin.services.index'));
        $this->assertDatabaseHas('services', [
            'id' => $service->id,
            'title' => 'Konsultasi Arsitektur Sistem Pro',
            'price' => 1800000,
        ]);

        // 3. Delete
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.services.destroy', $service));
        $deleteResponse->assertRedirect(route('admin.services.index'));
        $this->assertDatabaseMissing('services', [
            'id' => $service->id,
        ]);
    }

    public function test_admin_can_toggle_service_status(): void
    {
        $admin = User::first();

        $service = Service::create([
            'title' => 'Layanan Toggle Test',
            'slug' => 'layanan-toggle-test',
            'price' => 500000,
            'is_active' => true,
        ]);

        $response = $this->actingAs($admin)->patch(route('admin.services.toggle', $service));
        $response->assertRedirect();
        $this->assertFalse($service->fresh()->is_active);

        $response2 = $this->actingAs($admin)->patch(route('admin.services.toggle', $service));
        $response2->assertRedirect();
        $this->assertTrue($service->fresh()->is_active);
    }
}
