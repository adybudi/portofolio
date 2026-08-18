# 📋 Rencana Implementasi Fitur: Menu Jasa / Services (Sederhana, Terpisah & Dinamis)

Dokumen ini berisi rencana kerja yang telah disesuaikan berdasarkan instruksi terbaru untuk menambahkan menu dan fitur **Jasa / Services** pada aplikasi portofolio.

---

## 📌 4 Poin Kunci Penyesuaian Fitur Jasa

1. **Menu Sidebar Admin CMS**: Menambahkan menu navigasi "Jasa" / "Services" pada sidebar Admin CMS (`resources/views/components/layouts/admin.blade.php`).
2. **Halaman Publik Terpisah**: Menyediakan halaman khusus terpisah di Rute `/services` (`resources/views/services.blade.php`) untuk menampilkan katalog seluruh jasa.
3. **Posisi Section di Landing Page**: Menampilkan section "Jasa / Layanan Saya" pada landing page beranda (`home.blade.php`) **tepat di bawah Hero Section** (paling atas setelah hero).
4. **Toggle Section Dinamis di Admin Settings**: Menambahkan opsi *checkbox* `show_services_section` di halaman Pengaturan Admin (`resources/views/admin/settings/index.blade.php`) agar tampilan section Jasa di landing page bisa diaktifkan/dinonaktifkan secara dinamis.

---

## 🗂️ 1. Skema Database & Migration Plan

### **Nama Migration**: `2026_08_18_000000_create_services_table.php`
### **Nama Tabel**: `services`

| Nama Kolom | Tipe Data | Modifier | Keterangan |
|---|---|---|---|
| `id` | `bigIncrements` | Primary Key | ID unik |
| `title` | `string` | Not Null | Judul Jasa / Layanan |
| `slug` | `string` | Unique, Not Null | URL slug unik |
| `description` | `text` | Nullable | Deskripsi Jasa |
| `price` | `decimal` (12,2) / `string` | Nullable | Harga Normal Jasa |
| `has_discount` | `boolean` | Default: `false` | Checkbox apakah sedang diskon |
| `discount_price` | `decimal` (12,2) / `string` | Nullable | Harga Diskon (jika checkbox diskon aktif) |
| `image` | `string` | Nullable | File Gambar / Thumbnail Jasa |
| `features` | `json` | Nullable | List fasilitas/keunggulan (bisa diisi lebih dari 1 item) |
| `is_active` | `boolean` | Default: `true` | Status publikasi (Aktif / Nonaktif) |
| `order` | `integer` | Default: `0` | Urutan tampilan |
| `timestamps` | `timestamp` | Nullable | `created_at` & `updated_at` |

---

## 🏗️ 2. Model & Backend Logic

### **Model**: `app/Models/Service.php`
- Mass Assignment (`$fillable`): `title`, `slug`, `description`, `price`, `has_discount`, `discount_price`, `image`, `features`, `is_active`, `order`.
- Casts:
  - `'features' => 'array'`
  - `'has_discount' => 'boolean'`
  - `'is_active' => 'boolean'`

### **Pengaturan Dinamis (Settings)**: `app/Http/Controllers/Admin/SettingController.php`
- Tambahkan kunci setting `'show_services_section' => Setting::get('show_services_section', '1') === '1'` untuk menyimpan preferensi *checkbox toggle* tampilan section Jasa pada landing page.

### **Admin Controller**: `app/Http/Controllers/Admin/ServiceController.php`
- `index()`: Menampilkan daftar semua jasa.
- `create()`: Form tambah jasa baru (termasuk input list fasilitas dinamis & checkbox diskon).
- `store(Request $request)`: Validasi & simpan data jasa baru (menggunakan `ImageUploadService` untuk simpan gambar).
- `edit(Service $service)`: Form edit data jasa.
- `update(Request $request, Service $service)`: Pembaruan data jasa.
- `destroy(Service $service)`: Hapus data jasa.
- `toggleStatus(Service $service)`: Ubah status aktif/nonaktif.

### **Public Controller**: `app/Http/Controllers/HomeController.php`
- `index()`: Mengambil data `$services` (jika `show_services_section` aktif) dan meneruskannya ke view `home.blade.php`.
- `services()`: Menampilkan halaman katalog khusus rute `/services`.

---

## 🌐 3. Rute (Routes Plan - `routes/web.php`)

### **Rute Publik**:
```php
Route::get('/services', [HomeController::class, 'services'])->name('services.index');
```

### **Rute Admin CMS** (Di dalam grup `prefix('admin')->middleware(['auth', 'admin'])`):
```php
Route::resource('services', ServiceController::class)->names('admin.services');
Route::patch('services/{service}/toggle', [ServiceController::class, 'toggleStatus'])->name('admin.services.toggle');
```

---

## 🎨 4. Tampilan (Views Plan)

### **A. Admin CMS Views**
1. **Sidebar Navigation (`resources/views/components/layouts/admin.blade.php`)**:
   - Menambahkan menu **"JASA"** dengan ikon & indikator halaman aktif pada sidebar admin.
2. **Management Views (`resources/views/admin/services/`)**:
   - `index.blade.php`: Tabel kelola jasa (Gambar, Judul, Harga, Status, Akses Edit/Hapus).
   - `create.blade.php`: Form input jasa + Alpine.js untuk penambahan item list fasilitas dinamis.
   - `edit.blade.php`: Form edit jasa terisi data lama.
3. **Settings Page (`resources/views/admin/settings/index.blade.php`)**:
   - Menambahkan *checkbox toggle* **"Tampilkan Section Jasa di Landing Page"** pada bagian pengaturan visibilitas section.

### **B. Public Views**
1. **Tampilan Landing Page (`resources/views/home.blade.php`)**:
   - Menempatkan section Jasa **tepat di bawah Hero Section** (paling atas setelah hero section).
   - Dilindungi pembungkus pengecekan visibilitas dinamis:
     `@if(($settings['show_services_section'] ?? true) && count($services) > 0) ... @endif`
2. **Halaman Khusus Publik (`resources/views/services.blade.php`)**:
   - Halaman katalog lengkap khusus layanan/jasa (`/services`).
3. **Navigation Header (`navbar`) & Footer**:
   - Menambahkan link ke menu `/services`.

---

## 🚀 5. Urutan Pengerjaan (Execution Checklist)

- [ ] **Langkah 1**: Buat Migration & Model `Service`.
- [ ] **Langkah 2**: Menjalankan Migration `php artisan migrate`.
- [ ] **Langkah 3**: Buat Admin `ServiceController`, tambahkan kunci `show_services_section` di `SettingController`, dan daftarkan Rute di `routes/web.php`.
- [ ] **Langkah 4**: Perbarui Sidebar Admin (`resources/views/components/layouts/admin.blade.php`) dan Form Pengaturan Settings (`admin/settings/index.blade.php`).
- [ ] **Langkah 5**: Buat View CRUD Admin CMS (`index`, `create`, `edit`).
- [ ] **Langkah 6**: Tambahkan Section Jasa di `home.blade.php` (tepat di bawah Hero Section), buat `services.blade.php`, dan update Navbar.
- [ ] **Langkah 7**: Pengujian menyeluruh alur admin & tampilan publik.

---
*Dokumen ini diperbarui secara otomatis sesuai petunjuk penyesuaian.*
