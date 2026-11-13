<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application database with a safe admin setup and default settings.
     *
     * Existing records are never overwritten, so re-running the seeder will not
     * reset an admin password or destroy customised site settings.
     */
    public function run(): void
    {
        $this->seedAdminUser();
        $this->seedDefaultSettings();
    }

    /**
     * Create the first admin account only when it does not exist yet.
     *
     * In production the password must be supplied explicitly (ADMIN_SEED_PASSWORD)
     * or the admin should be created with `php artisan admin:create`. The test
     * suite keeps the legacy "password" credential so existing feature tests work.
     */
    private function seedAdminUser(): void
    {
        $email = strtolower(trim((string) config('portfolio.seed_admin_email', 'admin@adybudi.com')));

        if ($email === '' || User::where('email', $email)->exists()) {
            return;
        }

        $password = (string) config('portfolio.seed_admin_password', '');

        if (app()->runningUnitTests()) {
            // Keep the feature-test credentials deterministic.
            $password = 'password';
        } elseif ($password === '') {
            $this->command?->warn(
                'Seeder admin dilewati: set ADMIN_SEED_PASSWORD atau jalankan "php artisan admin:create".'
            );

            return;
        }

        $admin = new User();
        $admin->name = 'Ady Budisantika';
        $admin->email = $email;
        $admin->password = Hash::make($password);
        $admin->email_verified_at = now();
        $admin->is_admin = true;
        $admin->can_manage_backup = true;
        $admin->save();
    }

    /**
     * Insert default settings only when the key is still missing.
     */
    private function seedDefaultSettings(): void
    {
        $settings = [
            'site_name' => 'Ady Budisantika — Portofolio & CMS',
            'hero_title' => 'SOFTWARE DEVELOPER',
            'hero_subtitle' => 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.',
            'about_text' => 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.',
            'skills' => 'jQuery, JavaScript, React.js, CSS, HTML5, MySQL, Laravel, PHP',
            'github_url' => 'https://github.com/adybudi',
            'linkedin_url' => 'https://www.linkedin.com/in/ady-budisantika-2a6814335/',
            'email' => 'ady.budisantika@gmail.com',
            'hero_avatar' => 'uploads/profile.webp',
            'hero_avatars' => json_encode(['uploads/profile.webp']),
            'hero_hover_duration' => '2000',
            'spline_embed_url' => '',
            'seo_keywords' => 'Ady Budisantika, Software Developer, Laravel, PHP, JavaScript, React.js, MySQL, Bali',
            'seo_meta_desc' => 'Portofolio Ady Budisantika, Software Developer di Bali. Berpengalaman membangun aplikasi web yang efisien dan skalabel.',
            // Section Visibility Toggles (1 = Show, 0 = Hide)
            'show_portfolio_section' => '1',
            'show_products_section' => '1',
            'show_services_section' => '1',
            'show_experience_section' => '1',
            'show_certifications_section' => '0',
            'show_contact_section' => '1',
            // Impact Stats
            'stat_years_experience' => '6+',
            'stat_projects_completed' => '4',
            'stat_satisfied_clients' => '8',
            'editorial_quote' => 'Pengembangan software bukan sekadar menulis baris kode, melainkan merancang solusi yang jernih, intuitif, dan berdampak nyata secara berkelanjutan.',
        ];

        foreach ($settings as $key => $value) {
            Setting::firstOrCreate(['key' => $key], ['value' => $value]);
        }
    }
}
