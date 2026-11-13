<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Tool;
use App\Models\Setting;
use App\Models\Experience;
use App\Models\Certification;
use App\Models\Product;
use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    /**
     * Display the main landing page in Full Indonesian.
     */
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
            $fallback = Setting::get('hero_avatar', 'uploads/profile.webp');
            $heroAvatars = [$fallback];
        }

        $settings = [
            'site_name' => Setting::get('site_name', 'Ady Budisantika — Portofolio & Direktori Tools'),
            'hero_title' => Setting::get('hero_title', 'SOFTWARE DEVELOPER'),
            'hero_subtitle' => Setting::get('hero_subtitle', 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.'),
            'about_text' => Setting::get('about_text', 'Software Developer dengan pengalaman dalam membangun aplikasi web yang efisien dan skalabel. Bersemangat untuk terus belajar dan berkontribusi dalam mengembangkan solusi teknologi inovatif.'),
            'skills' => array_values(array_filter(array_map('trim', explode(',', Setting::get('skills', 'jQuery, JavaScript, React.js, CSS, HTML5, MySQL, Laravel, PHP'))))),
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'hero_avatar' => Setting::get('hero_avatar', 'uploads/profile.webp'),
            'hero_avatars' => $heroAvatars,
            'hero_hover_duration' => (int) Setting::get('hero_hover_duration', '2000'),
            'spline_embed_url' => Setting::get('spline_embed_url', ''),
            'seo_keywords' => Setting::get('seo_keywords', 'Ady Budisantika, Software Developer, Laravel, PHP, JavaScript, React.js, MySQL, Bali'),
            'seo_meta_desc' => Setting::get('seo_meta_desc', 'Portofolio Ady Budisantika, Software Developer di Bali. Berpengalaman membangun aplikasi web yang efisien dan skalabel.'),
            
            // Dynamic Section Visibility Controls
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
            'cv_file_path' => Setting::get('cv_file_path', ''),
            'cv_download_count' => (int) Setting::get('cv_download_count', '0'),
        ];

        $portfolios = Portfolio::where('is_active', true)->orderByDesc('is_featured')->orderBy('id')->take(6)->get();
        $portfolioCategories = $portfolios->pluck('category')->filter()->unique()->values();
        $totalPortfoliosCount = Portfolio::where('is_active', true)->count();
        $tools = Tool::where('is_active', true)->latest()->take(6)->get();
        $experiences = Experience::orderBy('order', 'asc')->get();
        $certifications = Certification::orderBy('order', 'asc')->get();
        $latestProducts = Product::where('is_active', true)->orderBy('order', 'asc')->latest()->take(6)->get();
        $totalProductsCount = Product::where('is_active', true)->count();
        $services = Service::where('is_active', true)->orderBy('order', 'asc')->get();

        return view('home', compact('settings', 'portfolios', 'portfolioCategories', 'totalPortfoliosCount', 'tools', 'experiences', 'certifications', 'latestProducts', 'totalProductsCount', 'services'));
    }

    /**
     * Display the standalone Portfolio page with every project.
     */
    public function portfolio()
    {
        $settings = [
            'site_name' => Setting::get('site_name', 'Ady Budisantika — Portofolio Proyek'),
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'hero_avatar' => Setting::get('hero_avatar', 'uploads/profile.webp'),
            'seo_keywords' => Setting::get('seo_keywords', 'Ady Budisantika, Software Developer, Laravel, PHP, JavaScript, React.js, MySQL, Bali'),
            'seo_meta_desc' => 'Kumpulan proyek aplikasi web, e-commerce, company profile, dan sistem informasi karya Ady Budisantika.',
            'cv_file_path' => Setting::get('cv_file_path', ''),
        ];

        $portfolios = Portfolio::where('is_active', true)->orderByDesc('is_featured')->orderBy('id')->get();
        $portfolioCategories = Portfolio::where('is_active', true)->select('category')->distinct()->pluck('category')->filter()->values();

        return view('portfolio', compact('settings', 'portfolios', 'portfolioCategories'));
    }

    /**
     * Display the standalone Services / Jasa page in Full Indonesian.
     */
    public function services()
    {
        $settings = [
            'site_name'    => Setting::get('site_name', 'Ady Budisantika — Jasa & Layanan'),
            'github_url'   => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email'        => Setting::get('email', 'ady.budisantika@gmail.com'),
            'seo_keywords' => Setting::get('seo_keywords', 'Jasa Pembuatan Website, Jasa Laravel, Freelance Developer, Ady Budisantika'),
            'seo_meta_desc'=> Setting::get('seo_meta_desc', 'Katalog jasa & layanan profesional karya Ady Budisantika. Dari pengembangan aplikasi web hingga konsultasi sistem.'),
            'cv_file_path' => Setting::get('cv_file_path', ''),
        ];

        $services = Service::where('is_active', true)->orderBy('order', 'asc')->get();

        return view('services', compact('settings', 'services'));
    }

    /**
     * Display the standalone Products page in Full Indonesian.
     */
    public function products()
    {
        $settings = [
            'site_name' => Setting::get('site_name', 'Ady Budisantika — Katalog Produk Digital'),
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'seo_keywords' => Setting::get('seo_keywords', 'Katalog Produk, Source Code, E-Book, Ady Budisantika, Full Stack Engineer'),
            'seo_meta_desc' => Setting::get('seo_meta_desc', 'Katalog produk digital, source code, dan e-book karya Ady Budisantika.'),
            'cv_file_path' => Setting::get('cv_file_path', ''),
        ];

        $products = Product::where('is_active', true)->orderBy('order', 'asc')->latest()->get();
        $productCategories = Product::where('is_active', true)->select('category')->distinct()->pluck('category')->filter()->values();

        return view('products', compact('settings', 'products', 'productCategories'));
    }

    /**
     * Display the standalone Tools Hub page in Full Indonesian.
     */
    public function tools()
    {
        $settings = [
            'site_name' => Setting::get('site_name', 'Ady Budisantika — Direktori Tools Hub'),
            'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
            'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
            'seo_keywords' => Setting::get('seo_keywords', 'Developer Tools, SQL Formatter, Regex Tester, Palette Generator, Ady Budisantika'),
            'seo_meta_desc' => Setting::get('seo_meta_desc', 'Kumpulan perkakas utilitas pengembang, generator, dan alat bantu mikro karya Ady Budisantika.'),
            'cv_file_path' => Setting::get('cv_file_path', ''),
        ];

        $tools = Tool::where('is_active', true)->latest()->get();

        return view('tools', compact('settings', 'tools'));
    }

    /**
     * Track tool clicks & redirect to target URL.
     */
    public function launchTool(Tool $tool)
    {
        if (!$tool->is_active) {
            abort(404, 'Tool ini tidak aktif.');
        }

        if (!\Illuminate\Support\Str::startsWith($tool->url, ['http://', 'https://'])) {
            abort(400, 'URL tool tidak valid.');
        }

        $tool->increment('clicks_count');
        return redirect()->away($tool->url);
    }

    /**
     * Download CV PDF & Increment download count.
     */
    public function downloadCv()
    {
        $cvPath = Setting::get('cv_file_path');

        if (!$cvPath || !\Illuminate\Support\Str::startsWith($cvPath, 'uploads/cv/') || str_contains($cvPath, '..')) {
            return back()->with('error', 'Berkas CV tidak valid atau belum diunggah.');
        }

        $fullPath = public_path($cvPath);
        if (!file_exists($fullPath) && Storage::disk('public')->exists($cvPath)) {
            $fullPath = Storage::disk('public')->path($cvPath);
        }

        if (!file_exists($fullPath)) {
            return back()->with('error', 'Berkas CV belum diunggah oleh administrator.');
        }

        $current = (int) Setting::get('cv_download_count', '0');
        Setting::set('cv_download_count', (string) ($current + 1));

        return response()->download($fullPath, 'CV_Ady_Budisantika.pdf');
    }
}
