<?php

use App\Models\Service;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Import the ten service packages from the content plan.
     * The existing landing page service is updated in place.
     */
    public function up(): void
    {
        $packages = [
            [
                'slug' => 'landing-page-company-profile-high-conversion',
                'title' => 'Pembuatan Landing Page & Company Profile High-Conversion',
                'description' => 'Layanan pembuatan website landing page atau profil perusahaan modern, responsif, elegan, dan dioptimalkan untuk meningkatkan kepercayaan klien serta konversi penjualan produk/jasa Anda.',
                'price' => 1500000,
                'has_discount' => true,
                'discount_price' => 990000,
                'image' => 'uploads/services/service-landing-page-banner-a.webp',
                'features' => [
                    'Desain Elegan & Responsif (Nyaman dibuka di HP, Tablet, & Laptop)',
                    'Integrasi Tombol WhatsApp Direct Chat & Form Kontak',
                    'SEO On-Page Optimization (Cepat masuk halaman pencarian Google)',
                    'Gratis Domain (.com / .id) & Hosting Super Cepat (1 Tahun)',
                    'Fitur Kecepatan Tinggi (Bebas Lemot & Optimasi Gambar WebP)',
                    'Integrasi Google Maps & Media Sosial'
                ],
                'order' => 1,
                'is_active' => true,
            ],
            [
                'slug' => 'company-profile-cms',
                'title' => 'Pembuatan Website Company Profile + Panel CMS Pengelola Konten',
                'description' => 'Solusi website perusahaan profesional yang dilengkapi dengan Panel Admin CMS (Content Management System) mandiri. Anda dapat mengubah teks, gambar, berita/artikel, serta layanan portofolio kapan saja tanpa harus paham bahasa pemrograman.',
                'price' => 3500000,
                'has_discount' => true,
                'discount_price' => 2450000,
                'image' => null,
                'features' => [
                    'Termasuk Semua Fitur Paket Landing Page Starter',
                    'Dashboard CMS Admin Mandiri (Kelola Berita, Halaman, & Galeri)',
                    'Sistem Keamanan Tingkat Tinggi (Proteksi DDoS & Brute-Force)',
                    'Manajemen Pengguna & Hak Akses Admin (Multi-User)',
                    'Integrasi Google Analytics & Pixel Marketing Tracker',
                    'Panduan Pengoperasian CMS & Dukungan Teknis Prioritas 6 Bulan'
                ],
                'order' => 2,
                'is_active' => true,
            ],
            [
                'slug' => 'custom-web-app-dashboard',
                'title' => 'Pengembangan Dashboard Admin & Sistem Aplikasi Web Kustom',
                'description' => 'Layanan pembuatan sistem aplikasi web khusus enterprise, dashboard analitik data, sistem kasir/POS, manajemen inventaris, atau sistem informasi manajemen perusahaan berbasis Laravel & Vue/React yang disesuaikan 100% dengan kebutuhan alur bisnis Anda.',
                'price' => 8000000,
                'has_discount' => false,
                'discount_price' => null,
                'image' => null,
                'features' => [
                    'Arsitektur Sistem Berkinerja Tinggi & Terstruktur (Clean Code Laravel)',
                    'Desain UI/UX Dashboard Intuitive (Dark Mode & Light Mode Support)',
                    'Fitur Laporan Ekspor Data (PDF, Excel, & Real-Time Chart Analytics)',
                    'Sistem Autentikasi Keamanan Bertingkat (Role-Based Access Control)',
                    'Arsitektur Database Terbuka & Siap Untuk Skala Besar (Scalable)',
                    'Dukungan Pemeliharaan (Maintenance) & Garansi Bebas Bug 1 Tahun'
                ],
                'order' => 3,
                'is_active' => true,
            ],
            [
                'slug' => 'ecommerce-store-payment-gateway',
                'title' => 'Pembuatan Toko Online / E-Commerce Payment Gateway',
                'description' => 'Platform toko online modern yang siap pakai untuk menjual produk fisik atau digital secara otomatis. Dilengkapi fitur keranjang belanja, integrasi otomatis cek ongkos kirim (RajaOngkir), serta sistem pembayaran otomatis (Midtrans / Xendit).',
                'price' => 5500000,
                'has_discount' => true,
                'discount_price' => 3900000,
                'image' => null,
                'features' => [
                    'Katalog Produk Lengkap dengan Variasi (Warna, Ukuran, Stok)',
                    'Integrasi Payment Gateway Otomatis (QRIS, Bank Transfer, E-Wallet)',
                    'Kalkulasi Cek Ongkir Otomatis (JNE, TIKI, POS, J&T)',
                    'Dashboard Pengelolaan Pesanan & Laporan Penjualan Produk',
                    'Fitur Kupon Diskon & Kode Promo Khusus Pengunjung',
                    'Notifikasi Otomatis Pesanan via WhatsApp & Email'
                ],
                'order' => 4,
                'is_active' => true,
            ],
            [
                'slug' => 'restful-api-backend-integration',
                'title' => 'Pengembangan RESTful API & Integrasi Backend Cloud',
                'description' => 'Layanan pembuatan dan integrasi RESTful API aman untuk aplikasi mobile (Android/iOS) atau sistem pihak ketiga, pembuatan webhook, serta arsitektur backend cloud modern yang cepat dan teruji.',
                'price' => 4000000,
                'has_discount' => false,
                'discount_price' => null,
                'image' => null,
                'features' => [
                    'Standar RESTful API dengan Autentikasi JWT / Laravel Sanctum',
                    'Dokumentasi API Interaktif (Swagger / Postman Collection)',
                    'Respon API Super Cepat dengan Caching Redis & Rate Limiting',
                    'Arsitektur Microservices Siap Dihubungkan ke Mobile App',
                    'Integrasi Layanan Pihak Ketiga (Payment, SMS/WA Gateway, Cloud Storage)'
                ],
                'order' => 5,
                'is_active' => true,
            ],
            [
                'slug' => 'website-speed-optimization',
                'title' => 'Jasa Optimasi Kecepatan Website & Core Web Vitals',
                'description' => 'Layanan perbaikan dan optimasi kecepatan website yang lambat agar mendapatkan skor tinggi (90+) pada Google PageSpeed Insights & GTmetrix. Sangat penting untuk meningkatkan peringkat SEO dan kenyamanan pengunjung.',
                'price' => 1200000,
                'has_discount' => true,
                'discount_price' => 750000,
                'image' => null,
                'features' => [
                    'Audit Kinerja & Laporan Skor Sebelum / Sesudah Optimasi',
                    'Kompresi Gambar Otomatis ke Format Modern WebP',
                    'Minifikasi File CSS, JavaScript, & HTML',
                    'Setup Browser Caching, CDN Cloudflare, & Gzip/Brotli Compression',
                    'Perbaikan LCP (Largest Contentful Paint) & CLS (Cumulative Layout Shift)'
                ],
                'order' => 6,
                'is_active' => true,
            ],
            [
                'slug' => 'figma-slicing-tailwind-blade',
                'title' => 'Jasa Slicing Figma ke HTML5 / Tailwind CSS / Laravel Blade',
                'description' => 'Mengubah hasil desain UI/UX dari Figma, Adobe XD, atau Sketch menjadi baris kode front-end yang bersih, responsif, pixel-perfect, dan memenuhi standar aksesibilitas web modern.',
                'price' => 1000000,
                'has_discount' => true,
                'discount_price' => 650000,
                'image' => null,
                'features' => [
                    'Hasil Kode Clean, Modular, & Terstruktur (Tailwind CSS / Blade)',
                    '100% Pixel-Perfect Mengikuti Desain Asli Figma',
                    'Responsif Tampil Sempurna di Semua Ukuran Layar Mobile & Desktop',
                    'Efek Animasi / Transisi Halus (Alpine.js / CSS Transitions)',
                    'Bebas Penomoran Elemen Berulang (Bisa Langsung Diintegrasikan ke Backend)'
                ],
                'order' => 7,
                'is_active' => true,
            ],
            [
                'slug' => 'bug-fixing-malware-maintenance',
                'title' => 'Jasa Perbaikan Bug Website, Cleaning Malware & Pemeliharaan Rutin',
                'description' => 'Layanan perbaikan cepat untuk website yang error, kena retas/malware, halaman putih (blank screen), gagal update Laravel/PHP, serta perawatan rutin sistem agar selalu aman dan online 24/7.',
                'price' => 800000,
                'has_discount' => false,
                'discount_price' => null,
                'image' => null,
                'features' => [
                    'Perbaikan Error Cepat & Penyelidikan Penyebab Utama (Root Cause)',
                    'Pembersihan File Malware, Backdoor, & Injeksi Script Berbahaya',
                    'Update Versi Framework PHP / Laravel & Dependensi Keamanan',
                    'Pembuatan Sistem Backup Otomatis Database & File Website',
                    'Audit Keamanan Ulang & Penutupan Celah Keamanan (Vulnerability Fix)'
                ],
                'order' => 8,
                'is_active' => true,
            ],
            [
                'slug' => 'payment-gateway-whatsapp-integration',
                'title' => 'Jasa Integrasi Payment Gateway (Midtrans/Xendit) & WA Gateway',
                'description' => 'Mengintegrasikan sistem pembayaran otomatis (QRIS, Transfer Bank, E-Wallet) dan sistem notifikasi transaksi otomatis via WhatsApp langsung ke dalam website/aplikasi Anda.',
                'price' => 1800000,
                'has_discount' => true,
                'discount_price' => 1250000,
                'image' => null,
                'features' => [
                    'Integrasi Midtrans, Xendit, Tripay, atau Doku Payment Gateway',
                    'Pembayaran Otomatis via QRIS, Virtual Account, & Retail Outlet',
                    'Setup Webhook Callback Aman dengan Validasi Signature',
                    'Integrasi WA Gateway (Fonnte / Wablas) untuk OTP & Kirim Struk Pembayaran',
                    'Pengujian Sandbox (Uji Coba) hingga Mode Live Produksi'
                ],
                'order' => 9,
                'is_active' => true,
            ],
            [
                'slug' => 'vps-setup-migration',
                'title' => 'Jasa Setup Server VPS Cloud (DigitalOcean/AWS) & Migrasi Website',
                'description' => 'Layanan instalasi dan konfigurasi server VPS berbasis Linux (Ubuntu), Nginx/Apache, SSL Certificate HTTPS, konfigurasi domain, serta migrasi website lama ke server baru tanpa downtime.',
                'price' => 1500000,
                'has_discount' => true,
                'discount_price' => 950000,
                'image' => null,
                'features' => [
                    'Instalasi LEMP Stack (Linux, Nginx, MySQL, PHP) Berkinerja Tinggi',
                    'Pemasangan Gratis SSL Certificate HTTPS (Let\'s Encrypt / Cloudflare)',
                    'Konfigurasi DNS Domain & Setup Firewalls UFW / Security Group',
                    'Migrasi File & Database Website Tanpa Downtime',
                    'Setup Auto-Backup Server & Monitoring Ketersediaan Server'
                ],
                'order' => 10,
                'is_active' => true,
            ],
        ];

        $existing = Service::where('title', 'Landing Page / Company Profile')->first();
        if ($existing) {
            $first = $packages[0];
            $existing->update(array_merge($first, [
                'image' => $existing->image ?: $first['image'],
            ]));
        }

        foreach ($packages as $package) {
            Service::updateOrCreate(['slug' => $package['slug']], $package);
        }
    }

    public function down(): void
    {
        // Imported services are intentionally not removed.
    }
};
