<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds for products only.
     */
    public function run(): void
    {
        if (Product::count() === 0) {
            Product::create([
                'title' => 'Template E-Commerce Laravel & Tailwind CSS',
                'slug' => 'template-ecommerce-laravel-tailwind-' . Str::random(5),
                'description' => 'Source code lengkap aplikasi web e-commerce siap pakai berbasis Laravel 12, Tailwind CSS, AlpineJS, dan Midtrans Payment Gateway.',
                'price' => 250000.00,
                'category' => 'Source Code',
                'link' => 'https://github.com/adybudi',
                'image_path' => null,
                'is_active' => true,
                'order' => 1,
            ]);

            Product::create([
                'title' => 'E-Book Panduan Arsitektur Cloud & Microservices',
                'slug' => 'ebook-panduan-arsitektur-cloud-' . Str::random(5),
                'description' => 'Panduan komprehensif merancang dan mengimplementasikan arsitektur sistem skala besar berbasis Docker & Kubernetes.',
                'price' => 99000.00,
                'category' => 'E-Book & Panduan',
                'link' => 'https://github.com/adybudi',
                'image_path' => null,
                'is_active' => true,
                'order' => 2,
            ]);
        }
    }
}
