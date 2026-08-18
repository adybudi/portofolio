<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\ImageUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SettingController extends Controller
{
    public function index()
    {
        $rawAvatars = Setting::get('hero_avatars', null);
        $heroAvatars = [];
        if ($rawAvatars) {
            $decoded = json_decode($rawAvatars, true);
            if (is_array($decoded) && count($decoded) > 0) {
                $heroAvatars = $decoded;
            }
        }
        if (empty($heroAvatars)) {
            $fallback = Setting::get('hero_avatar', 'uploads/profile.png');
            $heroAvatars = [$fallback];
        }

        $settings = [
            'site_name' => Setting::get('site_name', 'Ady Budisantika — Portofolio & Direktori Tools'),
            'hero_title' => Setting::get('hero_title', 'PENGEMBANG SOFTWARE FULL STACK & ARSITEK SISTEM'),
            'hero_subtitle' => Setting::get('hero_subtitle', 'Saya merancang dan membangun aplikasi web modern yang responsif, cepat, dan berkinerja tinggi berbasis Laravel & JavaScript.'),
            'about_text' => Setting::get('about_text', 'Pengembang Software Full Stack berdedikasi dengan pengalaman luas dalam membangun aplikasi web enterprise, sistem CMS dinamis, serta layanan API yang andal.'),
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://linkedin.com/in/adybudi'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'hero_avatar' => Setting::get('hero_avatar', 'uploads/profile.png'),
            'hero_avatars' => $heroAvatars,
            'hero_hover_duration' => Setting::get('hero_hover_duration', '2000'),
            'spline_embed_url' => Setting::get('spline_embed_url', ''),
            'seo_keywords' => Setting::get('seo_keywords', 'Ady Budisantika, Laravel Developer, Full Stack Engineer, Web App, Software Architect, Tools Hub'),
            'seo_meta_desc' => Setting::get('seo_meta_desc', 'Portofolio & Tools Hub resmi karya Ady Budisantika.'),
            'cv_file_path' => Setting::get('cv_file_path', ''),
            'cv_download_count' => (int) Setting::get('cv_download_count', '0'),
            'enable_public_registration' => Setting::get('enable_public_registration', '0') === '1',
            
            // Section Visibility States
            'show_portfolio_section'     => Setting::get('show_portfolio_section', '1') === '1',
            'show_products_section'      => Setting::get('show_products_section', '1') === '1',
            'show_services_section'      => Setting::get('show_services_section', '1') === '1',
            'show_experience_section'    => Setting::get('show_experience_section', '1') === '1',
            'show_certifications_section'=> Setting::get('show_certifications_section', '1') === '1',
            'show_contact_section'       => Setting::get('show_contact_section', '1') === '1',

            // Impact Stats & Quote Settings
            'stat_years_experience' => Setting::get('stat_years_experience', '5+'),
            'stat_projects_completed' => Setting::get('stat_projects_completed', '40+'),
            'stat_satisfied_clients' => Setting::get('stat_satisfied_clients', '25+'),
            'editorial_quote' => Setting::get('editorial_quote', 'Pengembangan software bukan sekadar menulis baris kode, melainkan merancang solusi yang jernih, intuitif, dan berdampak nyata secara berkelanjutan.'),
        ];

        return view('admin.settings.index', compact('settings'));
    }

    /**
     * Dedicated method for uploading hero gallery photos and updating hover duration.
     */
    public function updateHeroPhotos(Request $request)
    {
        $request->validate([
            'avatars' => 'nullable|array',
            'avatars.*' => 'image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'hero_hover_duration' => 'nullable|integer|min:200|max:10000',
        ]);

        $rawAvatars = Setting::get('hero_avatars', null);
        $currentAvatars = [];
        if ($rawAvatars) {
            $decoded = json_decode($rawAvatars, true);
            if (is_array($decoded)) {
                $currentAvatars = $decoded;
            }
        }
        if (empty($currentAvatars)) {
            $currentAvatars = [Setting::get('hero_avatar', 'uploads/profile.png')];
        }

        if ($request->hasFile('avatars')) {
            foreach ($request->file('avatars') as $file) {
                $path = ImageUploadService::store($file, 'hero');
                $currentAvatars[] = $path;
            }
        }

        if ($request->filled('hero_hover_duration')) {
            Setting::set('hero_hover_duration', (string) $request->input('hero_hover_duration'));
        }

        Setting::set('hero_avatars', json_encode(array_values($currentAvatars)));
        Setting::set('hero_avatar', $currentAvatars[0]);

        return redirect()->route('admin.settings.index')->with('success', 'Galeri foto profil hero & durasi hover berhasil diperbarui secara terpisah.');
    }

    /**
     * Dedicated method for deleting a specific photo from hero gallery by index.
     */
    public function deleteHeroPhoto($index)
    {
        $rawAvatars = Setting::get('hero_avatars', null);
        $currentAvatars = [];
        if ($rawAvatars) {
            $decoded = json_decode($rawAvatars, true);
            if (is_array($decoded)) {
                $currentAvatars = $decoded;
            }
        }

        $idx = (int) $index;
        if (isset($currentAvatars[$idx])) {
            $photoToDelete = $currentAvatars[$idx];
            ImageUploadService::delete($photoToDelete);
            array_splice($currentAvatars, $idx, 1);
        }

        if (empty($currentAvatars)) {
            $currentAvatars = ['uploads/profile.png'];
        }

        Setting::set('hero_avatars', json_encode(array_values($currentAvatars)));
        Setting::set('hero_avatar', $currentAvatars[0]);

        return redirect()->route('admin.settings.index')->with('success', 'Foto profil berhasil dihapus dari galeri dan berkas fisik dibersihkan.');
    }

    /**
     * Main settings update.
     */
    public function update(Request $request)
    {
        $validated = $request->validate([
            'site_name' => 'required|string|max:255',
            'hero_title' => 'required|string|max:255',
            'hero_subtitle' => 'required|string',
            'about_text' => 'required|string',
            'github_url' => 'nullable|url|max:255',
            'linkedin_url' => 'nullable|url|max:255',
            'email' => 'nullable|email|max:255',
            'spline_embed_url' => 'nullable|url|max:500',
            'seo_keywords' => 'nullable|string|max:500',
            'seo_meta_desc' => 'nullable|string|max:500',
            'stat_years_experience' => 'nullable|string|max:50',
            'stat_projects_completed' => 'nullable|string|max:50',
            'stat_satisfied_clients' => 'nullable|string|max:50',
            'editorial_quote' => 'nullable|string',
            'cv_file' => 'nullable|file|mimes:pdf|max:10240',
        ]);

        if ($request->hasFile('cv_file')) {
            $file = $request->file('cv_file');
            $filename = 'cv_' . Str::uuid() . '.pdf';
            $path = $file->storeAs('uploads/cv', $filename, 'public');
            
            $oldCv = Setting::get('cv_file_path');
            if ($oldCv) {
                ImageUploadService::delete($oldCv);
            }
            
            Setting::set('cv_file_path', $path);
        }

        foreach (['site_name', 'hero_title', 'hero_subtitle', 'about_text', 'github_url', 'linkedin_url', 'email', 'spline_embed_url', 'seo_keywords', 'seo_meta_desc', 'stat_years_experience', 'stat_projects_completed', 'stat_satisfied_clients', 'editorial_quote'] as $key) {
            if (isset($validated[$key])) {
                Setting::set($key, $validated[$key]);
            }
        }

        Setting::set('enable_public_registration', $request->has('enable_public_registration') ? '1' : '0');

        // Checkboxes for Section Visibilities
        foreach (['show_portfolio_section', 'show_products_section', 'show_services_section', 'show_experience_section', 'show_certifications_section', 'show_contact_section'] as $sectionKey) {
            Setting::set($sectionKey, $request->has($sectionKey) ? '1' : '0');
        }

        return redirect()->route('admin.settings.index')->with('success', 'Pengaturan profil, CV, statistik, dan visibilitas section berhasil diperbarui.');
    }
}
