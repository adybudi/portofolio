# Portofolio & Tools Hub — Ady Budisantika

Aplikasi portofolio interaktif + CMS admin berbasis **Laravel 12**, **Blade**, **Alpine.js**, **Tailwind CSS/DaisyUI**, dan **Vite**.

## Fitur Utama

- Landing page dinamis: hero gallery, about, statistik, jasa, portofolio, produk, tools, pengalaman, sertifikasi, dan form kontak.
- CMS admin untuk seluruh konten (portofolio, produk, jasa, tools, pengalaman, sertifikasi, pesan, settings).
- Upload gambar aman: validasi MIME/GD, nama UUID, anti path-traversal, dan pembersihan file lama.
- Maintenance mode dengan bypass untuk admin.
- Backup/import JSON non-destruktif (updateOrCreate, tidak menghapus data yang tidak ada di backup).
- Cloudflare Turnstile (opsional) untuk form kontak, login, dan registrasi.
- Hardening: security headers, rate limit kontak, honeypot, registrasi publik default OFF.

## Kebutuhan

- PHP >= 8.2 (ekstensi GD, PDO)
- Composer 2
- Node.js + npm
- MySQL/SQLite

## Setup Lokal

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan storage:link
npm install
npm run build
php artisan serve
```

Untuk development dengan Vite + queue + log viewer:

```bash
composer run dev
```

## Membuat Admin

Cara yang disarankan (interaktif, tidak menyimpan password default):

```bash
php artisan admin:create
```

Alternatif seeding non-interaktif: isi `ADMIN_SEED_EMAIL` dan `ADMIN_SEED_PASSWORD` di `.env`, lalu:

```bash
php artisan db:seed
```

Seeder **tidak** mengubah admin yang sudah ada dan **tidak** menimpa setting yang sudah dikustomisasi. Tanpa `ADMIN_SEED_PASSWORD`, seeder melewati pembuatan admin di production.

## Testing

```bash
php artisan test
```

Test menggunakan SQLite in-memory (`phpunit.xml`) dan tidak menulis ke folder `public/uploads`.

## Build & Deploy

```bash
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan storage:link
npm ci
npm run build
```

Jika hosting memakai `public_html` di luar folder project, set `APP_PUBLIC_PATH` (path absolut atau relatif) di `.env`.

## Struktur Singkat

| Path | Keterangan |
|---|---|
| `app/Http/Controllers/HomeController.php` | Halaman publik & CV |
| `app/Http/Controllers/Admin/*` | CMS admin |
| `app/Models/Setting.php` | Setting key-value dengan cache + invalidasi |
| `app/Services/ImageUploadService.php` | Upload & validasi gambar |
| `app/Http/Middleware/CheckMaintenanceMode.php` | Maintenance mode |
| `routes/web.php` | Routing publik & admin |
| `resources/views/home.blade.php` | Landing page |
| `resources/js/3d-effects.js` | Efek Three.js (hero) |

## Keamanan

- Registrasi publik hanya aktif jika setting CMS ON **dan** `ALLOW_PUBLIC_REGISTRATION_IN_PRODUCTION=true` (production).
- Admin terakhir tidak dapat menghapus akunnya sendiri.
- Backup/import dilindungi gate `manage-backup`, konfirmasi password, dan validasi path traversal.
- Jangan commit `.env`, database dump, atau kredensial.
