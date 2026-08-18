<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed();
    }

    public function test_visitor_can_view_products_page_and_homepage_highlight(): void
    {
        Product::create([
            'title' => 'Template E-Commerce Premium',
            'slug' => 'template-ecommerce-premium',
            'description' => 'Source code e-commerce berbasis Laravel 12',
            'price' => 150000.00,
            'category' => 'Source Code',
            'link' => 'https://github.com/adybudi',
            'is_active' => true,
            'order' => 1,
        ]);

        $response = $this->get(route('products.index'));
        $response->assertStatus(200);
        $response->assertSee('Template E-Commerce Premium');

        $homeResponse = $this->get(route('home'));
        $homeResponse->assertStatus(200);
        $homeResponse->assertSee('Template E-Commerce Premium');
    }

    public function test_admin_can_crud_product_items(): void
    {
        $admin = User::first();
        Storage::fake('public');

        // 1. Create
        $file = UploadedFile::fake()->image('product1.jpg');
        $response = $this->actingAs($admin)->post(route('admin.products.store'), [
            'title' => 'E-Book Laravel 12',
            'description' => 'Panduan lengkap Laravel 12',
            'price' => '99000',
            'category' => 'E-Book',
            'link' => 'https://example.com/ebook',
            'image' => $file,
            'is_active' => '1',
            'order' => 1,
        ]);

        $response->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseHas('products', [
            'title' => 'E-Book Laravel 12',
            'category' => 'E-Book',
        ]);

        $product = Product::where('title', 'E-Book Laravel 12')->first();

        // 2. Edit
        $editResponse = $this->actingAs($admin)->put(route('admin.products.update', $product), [
            'title' => 'E-Book Laravel 12 Updated',
            'description' => 'Panduan lengkap Laravel 12 versi 2',
            'price' => '120000',
            'category' => 'E-Book & Guide',
            'link' => 'https://example.com/ebook-v2',
            'is_active' => '1',
            'order' => 2,
        ]);

        $editResponse->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseHas('products', [
            'id' => $product->id,
            'title' => 'E-Book Laravel 12 Updated',
            'category' => 'E-Book & Guide',
        ]);

        // 3. Delete
        $deleteResponse = $this->actingAs($admin)->delete(route('admin.products.destroy', $product));
        $deleteResponse->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseMissing('products', [
            'id' => $product->id,
        ]);
    }

    public function test_admin_can_create_product_with_nullable_fields(): void
    {
        $admin = User::first();
        Storage::fake('public');

        $file = UploadedFile::fake()->image('nullable_product.jpg');
        $response = $this->actingAs($admin)->post(route('admin.products.store'), [
            'image' => $file,
            'is_active' => '1',
        ]);

        $response->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseHas('products', [
            'title' => null,
            'description' => null,
            'price' => null,
            'category' => null,
            'link' => null,
        ]);
    }
}
