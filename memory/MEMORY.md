# Memory & Observasi Proyek: Portofolio Ady Budi

## 📌 Ringkasan Proyek
Aplikasi **Portofolio Ady Budi** adalah aplikasi web portofolio interaktif dan dinamis yang dibangun menggunakan **Laravel 12**. Proyek ini tidak hanya menampilkan informasi profesional (proyek, keahlian, alat, pengalaman, sertifikasi, galeri, produk), tetapi juga dilengkapi dengan sistem **CMS Admin (Content Management System)** penuh untuk mengelola seluruh konten portofolio secara mandiri.

---

## 🛠️ Tech Stack & Arsitektur

### **Backend**
- **Framework**: Laravel 12.x (PHP `>= 8.2`)
- **Autentikasi**: Laravel Breeze (dengan kustomisasi *Role-based Authorization*)
- **Database ORM**: Eloquent ORM
- **Helper & Services Custom**:
  - `ImageUploadService`: Menangani validasi keamanan gambar (ekstensi, MIME, penyimpangan jalur/path traversal), penamaan UUID acak, serta penyimpanan di storage public.
  - `AuditLogger`: Pencatatan log aktivitas/audit admin.
  - `uploaded_asset()`: Helper PHP (`app/helpers.php`) untuk resolusi URL file ter-upload secara otomatis dengan gambar cadangan (fallback).

### **Frontend**
- **Template Engine**: Blade Views
- **Asset Bundler**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Interaktivitas**: Alpine.js / JavaScript

---

## 🗄️ Model Data (Eloquent Models) & Entitas

1. **`User`**: Data pengguna/admin. Memiliki atribut status `is_admin` dan `can_manage_backup`.
2. **`Portfolio`**: Proyek-proyek portofolio (judul, deskripsi, gambar, link, tech stack).
3. **`Service`**: Jasa & layanan profesional (judul, harga normal & diskon, gambar, fitur list, status aktif).
4. **`Product`**: Produk digital / micro-SaaS / template yang ditawarkan.
5. **`Tool`**: Alat & software pengembang yang digunakan atau dibuat (nama, kategori, tautan, ikon, status).
6. **`Setting`**: Konfigurasi kunci-nilai (key-value) situs (profil tentang saya, section hero, kontak, link CV).
7. **`ContactMessage`**: Pesan masuk yang dikirim pengunjung melalui form kontak.
8. **`Experience`**: Riwayat pengalaman kerja & pendidikan (posisi, perusahaan, tanggal, deskripsi).
9. **`Certification`**: Lisensi dan sertifikasi profesional (penerbit, tanggal terbit/kadaluarsa, URL sertifikat).

---

## 🚦 Rute & Fitur-Fitur Utama (`routes/web.php`)

### **1. Area Publik**
- `/` (`home`): Halaman utama (Hero, Jasa, Portofolio, Produk, Karir, Sertifikasi, Contact Form).
- `/services` (`services.index`): Halaman katalog jasa & layanan.
- `/products` (`products.index`): Halaman showcase produk digital.
- `/tools` (`tools.index`): Katalog alat/aplikasi buatan.
- `/tools/{tool:slug}/launch` (`tools.launch`): Peluncuran langsung aplikasi/tool.
- `/download-cv` (`cv.download`): Fitur unduh berkas CV.
- `/contact/send` (`contact.send`): Form pengiriman pesan dengan pembatasan rate limit (`throttle:5,1`).

### **2. Area Admin CMS (`/admin/*`)**
Dilindungi oleh middleware `auth` dan `admin` (`EnsureUserIsAdmin`).
- **Dashboard (`/admin/dashboard`)**: Ringkasan statistik dan metrik situs.
- **Portfolios (`/admin/portfolios`)**: CRUD Portofolio.
- **Services (`/admin/services`)**: CRUD Jasa & Layanan + Toggle Status.
- **Products (`/admin/products`)**: CRUD Produk Digital.
- **Tools (`/admin/tools`)**: CRUD Alat/Tools.
- **Settings (`/admin/settings`)**: Pengaturan Informasi Profil, Visibilitas Section & Situs.
- **Messages (`/admin/messages`)**: Membaca & mengelola pesan masuk dari pengunjung.
- **Experiences (`/admin/experiences`)**: CRUD Riwayat Pengalaman.
- **Certifications (`/admin/certifications`)**: CRUD Sertifikasi.
- **Backups (`/admin/backups`)**: Manajemen Backup (dilindungi tambahan oleh `EnsureUserCanManageManageBackup`).

---

## 🔒 Keamanan & Praktik Terbaik
- **Pencegahan Path Traversal & Shell Upload**: `ImageUploadService` memfilter nama folder dan menolak file php/script, hanya mengizinkan `jpeg`, `jpg`, `png`, dan `webp`.
- **Security Headers**: Custom Middleware `SecurityHeaders` untuk menyuntikkan header keamanan HTTP.
- **Rate Limiting**: Form kontak dibatasi 5 permintaan per menit per IP untuk mencegah spam.

---

## 💻 Perintah Pengembangan

- **Menjalankan Lingkungan Dev**:
  ```bash
  npm run dev
  # atau melalui composer script (menjalankan server, queue, logs, & vite)
  composer run dev
  ```
- **Menjalankan Pengujian**:
  ```bash
  php artisan test
  # atau
  composer run test
  ```
- **Inisialisasi Setup**:
  ```bash
  composer setup
  ```
