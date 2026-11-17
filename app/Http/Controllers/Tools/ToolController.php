<?php

namespace App\Http\Controllers\Tools;

use App\Http\Controllers\Controller;
use App\Models\Setting;

class ToolController extends Controller
{
    public function mergePdf()
    {
        return view('tools.merge_pdf.index', [
            'settings' => $this->settings(
                'Merge PDF — Gabungkan PDF Online Tanpa Upload',
                'Gabungkan beberapa file PDF menjadi satu dokumen langsung di browser. File tidak pernah dikirim ke server.'
            ),
        ]);
    }

    public function compressImage()
    {
        return view('tools.compress_image.index', [
            'settings' => $this->settings(
                'Image Compressor — Kompres Gambar Tanpa Upload',
                'Kompres gambar JPG, PNG, atau WebP langsung di browser. Atur kualitas dan dimensi, lalu unduh hasilnya.'
            ),
        ]);
    }

    private function settings(string $title, string $description): array
    {
        return [
            'site_name' => $title,
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'hero_avatar' => Setting::get('hero_avatar', 'uploads/profile.webp'),
            'seo_keywords' => 'merge pdf, compress image, kompres gambar, tools online, Ady Budisantika',
            'seo_meta_desc' => $description,
            'cv_file_path' => Setting::get('cv_file_path', ''),
        ];
    }
}
