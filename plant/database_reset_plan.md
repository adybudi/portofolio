# 🗄️ Rencana & Dokumentasi Reset Database (Clean Slate Admin)

Dokumen ini mencatat rencana kerja dan langkah-langkah penyiapan database bersih (_clean slate_) agar portofolio siap diisi data asli (_real content_) sebelum dipublikasikan ke hosting.

---

## 🎯 1. Tujuan Operasi

- Mengosongkan seluruh data uji coba/dummy (Portofolio, Tools, Produk, Jasa, Pesan Kontak, Pengalaman, Sertifikasi, Galeri).
- Menyisa **1 Akun Admin Utama** agar pemilik situs dapat langsung _login_ ke Admin CMS dan mulai menginputkan data asli.
- Menyediakan _base settings_ default agar tampilan layout situs tidak rusak (_error null_) saat database dalam kondisi kosong.

---

## 🔑 2. Spesifikasi Kredensial Admin Utama

- **Nama**: Ady Budisantika
- **Email**: `admin@gmail.com`
- **Password Default**: `password`
- **Hak Akses**: `is_admin = true`, `can_manage_backup = true`

---

## 🛠️ 3. Perubahan Skema & Seeder (`database/seeders/DatabaseSeeder.php`)

### **Struktur Seeder Bersih**:

1. **Pendaftaran Admin**: Menggunakan `User::updateOrCreate()` dengan kredensial admin resmi.
2. **Inisialisasi Pengaturan**: Mengisi tabel `settings` dengan kunci default:
    - `site_name`, `hero_title`, `hero_subtitle`, `about_text`
    - Link sosial media (`github_url`, `linkedin_url`, `email`)
    - Sakelar visibilitas section (`show_portfolio_section`, `show_services_section`, dll.)
3. **Penghapusan Seeder Dummy**: Menghapus loop instansi data dummy untuk `Portfolio`, `Tool`, `Product`, `Experience`, dan `Certification`.

---

## 🚀 4. Langkah Eksekusi Reset Database

1. Menyesuaikan koneksi database SQLite pada `.env` (`DB_CONNECTION=sqlite`).
2. Memperbarui `database/seeders/DatabaseSeeder.php` dengan seeder tanpa data dummy.
3. Menjalankan perintah artisan:
    ```bash
    php artisan migrate:fresh --seed
    ```

---

## 📋 5. Hasil Akhir (Verifikasi Jumlah Data)

- `Users`: **1** (Admin)
- `Portfolios`: **0**
- `Tools`: **0**
- `Products`: **0**
- `Services`: **0**
- `Contact Messages`: **0**

---

_Dokumen ini dibuat untuk mendokumentasikan proses pengosongan database sebelum pengisian data real._
