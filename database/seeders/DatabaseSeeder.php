<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database with Clean Admin Setup (No Dummy Content).
     */
    public function run(): void
    {
        // 1. Akun Admin Utama
        $admin = User::updateOrCreate(
            ['email' => 'admin@adybudi.com'],
            [
                'name' => 'Ady Budisantika',
                'password' => Hash::make('password'),
                'email_verified_at' => now(),
            ]
        );
        $admin->is_admin = true;
        $admin->can_manage_backup = true;
        $admin->save();

        // 2. Default Base Settings (Pengaturan Situs Dasar)
        $settings = [
            'site_name' => 'Ady Budisantika — Portofolio & CMS',
            'hero_title' => 'PENGEMBANG SOFTWARE FULL STACK & ARSITEK SISTEM',
            'hero_subtitle' => 'Saya merancang dan membangun aplikasi web modern yang responsif, cepat, dan berkinerja tinggi berbasis Laravel & JavaScript.',
            'about_text' => 'Pengembang Software Full Stack berdedikasi dengan pengalaman luas dalam membangun aplikasi web enterprise, sistem CMS dinamis, serta layanan API yang andal.',
            'github_url' => 'https://github.com/adybudi',
            'linkedin_url' => 'https://linkedin.com/in/adybudi',
            'email' => 'ady.budisantika@gmail.com',
            'hero_avatar' => 'uploads/profile.webp',
            'hero_avatars' => json_encode(['uploads/profile.webp']),
            'hero_hover_duration' => '2000',
            'spline_embed_url' => '',
            'seo_keywords' => 'Ady Budisantika, Laravel Developer, Full Stack Engineer, Web App, Software Architect',
            'seo_meta_desc' => 'Portofolio resmi karya Ady Budisantika.',
            // Section Visibility Toggles (1 = Show, 0 = Hide)
            'show_portfolio_section' => '1',
            'show_products_section' => '1',
            'show_services_section' => '1',
            'show_experience_section' => '1',
            'show_certifications_section' => '1',
            'show_contact_section' => '1',
            // Impact Stats
            'stat_years_experience' => '5+',
            'stat_projects_completed' => '40+',
            'stat_satisfied_clients' => '25+',
            'editorial_quote' => 'Pengembangan software bukan sekadar menulis baris kode, melainkan merancang solusi yang jernih, intuitif, dan berdampak nyata secara berkelanjutan.',
        ];

        foreach ($settings as $key => $val) {
            Setting::set($key, $val);
        }
    }
}
