<?php

use App\Models\Experience;
use App\Models\Setting;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Align the CMS profile content with the public LinkedIn profile.
     *
     * This is a one-time content sync. It updates the known placeholder rows
     * instead of deleting them, and creates the missing entries.
     */
    public function up(): void
    {
        $settings = [
            'hero_title' => 'SOFTWARE DEVELOPER',
            'hero_subtitle' => 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.',
            'about_text' => 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.',
            'skills' => 'jQuery, JavaScript, React.js, CSS, HTML5, MySQL, Laravel, PHP',
            'linkedin_url' => 'https://www.linkedin.com/in/ady-budisantika-2a6814335/',
            'stat_years_experience' => '6+',
            'stat_projects_completed' => '4',
            'stat_satisfied_clients' => '8',
            'seo_keywords' => 'Ady Budisantika, Software Developer, Laravel, PHP, JavaScript, React.js, MySQL, Bali',
            'seo_meta_desc' => 'Portofolio Ady Budisantika, Software Developer di Bali. Berpengalaman membangun aplikasi web yang efisien dan skalabel.',
            // LinkedIn currently shows no certifications; keep the rows but hide the section.
            'show_certifications_section' => '0',
        ];

        foreach ($settings as $key => $value) {
            Setting::set($key, $value);
        }

        $experiences = [
            [
                'old' => ['title' => 'Lead Full Stack Engineer', 'company' => 'PT Tech Enterprise Indonesia'],
                'data' => [
                    'title' => 'Software Developer',
                    'company' => 'Tree System Indonesia',
                    'period' => 'Sep 2020 — Sekarang',
                    'description' => 'Full-time · On-site · Badung Regency, Bali, Indonesia. Pengembangan aplikasi web yang efisien dan skalabel.',
                    'order' => 1,
                ],
            ],
            [
                'old' => ['title' => 'Senior Backend Developer', 'company' => 'Digital Innovation Studio'],
                'data' => [
                    'title' => 'Information Technology Developer',
                    'company' => 'ARM Hospitality',
                    'period' => 'Des 2024 — Mar 2025',
                    'description' => 'Full-time · On-site.',
                    'order' => 2,
                ],
            ],
            [
                'old' => ['title' => 'Sarjana Teknik Informatika (S.Kom)', 'company' => 'Institut Teknologi & Bisnis STIKOM Bali'],
                'data' => [
                    'title' => 'Frontend Web Developer',
                    'company' => 'Sadhana Company',
                    'period' => 'Jul 2023 — Sep 2023',
                    'description' => 'Internship · Hybrid · Badung Regency, Bali, Indonesia.',
                    'order' => 3,
                ],
            ],
            [
                'old' => null,
                'data' => [
                    'title' => 'Frontend Web Developer',
                    'company' => 'PT Bangun Inovasi Teknologi (BIT House)',
                    'period' => 'Mar 2023 — Jun 2023',
                    'description' => 'Internship · Hybrid · Denpasar, Bali, Indonesia.',
                    'order' => 4,
                ],
            ],
            [
                'old' => null,
                'data' => [
                    'title' => 'Institut Teknologi dan Bisnis STIKOM Bali',
                    'company' => 'Pendidikan',
                    'period' => 'Apr 2020 — Jun 2024',
                    'description' => 'Pendidikan tinggi di bidang teknologi informasi.',
                    'order' => 5,
                ],
            ],
        ];

        foreach ($experiences as $entry) {
            $row = null;

            if ($entry['old'] !== null) {
                $row = Experience::where($entry['old'])->first();
            }

            if ($row) {
                $row->update($entry['data']);
                continue;
            }

            Experience::updateOrCreate(
                ['title' => $entry['data']['title'], 'company' => $entry['data']['company']],
                $entry['data']
            );
        }
    }

    public function down(): void
    {
        // Content sync is intentionally not reverted.
    }
};
