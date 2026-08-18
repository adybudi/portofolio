# 🧹 Rencana Pemangkasan Navbar & Pembersihan Fitur Hingga ke Akar

Dokumen ini berisi rencana kerja untuk merapikan navigasi header/navbar yang terlalu padat, serta langkah-langkah **pembersihan total hingga ke akar (deep removal)** untuk komponen/fitur yang dipangkas agar tidak meninggalkan *dead code* atau berkas sampah di dalam codebase.

---

## 🎯 1. Analisis & Target Pemangkasan Navbar

### **Kondisi Navbar Saat Ini (11 Item)**:
`Tentang Saya` | `Portofolio` | `Produk` | `Jasa` (Fitur Baru) | `Galeri` | `Keahlian` | `Kontak` | `Tools Hub` | `UNDUH CV` | `Theme Toggle` | `CMS Admin`

### **Target Navbar Hasil Pemangkasan (4 Menu Utama + 2 Tombol Aksi)**:
1. **Jasa** (`/services`) — *Prioritas utama konversi*
2. **Portofolio** (`#portfolio`) — *Showcase karya utama*
3. **Produk** (`/products`) — *Produk digital / micro-SaaS*
4. **Kontak** (`#contact`) — *Form & info komunikasi*
5. **Tombol Aksi**: `UNDUH CV` & `Theme Toggle`

---

## 🗑️ 2. Pembersihan Hingga ke Akar (Deep Removal Checklist)

Berikut adalah daftar berkas, rute, komponen, dan skema database yang akan dihapus hingga ke akar untuk fitur yang dipangkas:

### **A. Fitur "Keahlian" (Skills)**
*Poin yang Dihapus Total*:
- **Database Migration**: `database/migrations/2026_08_06_000002_create_skills_table.php`
- **Eloquent Model**: `app/Models/Skill.php`
- **Admin Controller**: `app/Http/Controllers/Admin/SkillController.php`
- **Admin Views**: `resources/views/admin/skills/` (seluruh folder `index`, `create`, `edit`)
- **Public Section**: Section Keahian (`id="skills"`) di `resources/views/home.blade.php`
- **Setting Key**: Pilihan `show_skills_section` di `SettingController.php` & `admin/settings/index.blade.php`
- **Sidebar Admin**: Link "Skills" pada `resources/views/components/layouts/admin.blade.php`
- **Routes**: `Route::resource('skills', SkillController::class)` di `routes/web.php`

### **B. Fitur "Galeri" (Galleries)**
*Poin yang Dihapus Total*:
- **Database Migration**: `database/migrations/2026_08_09_000000_create_galleries_table.php`
- **Eloquent Model**: `app/Models/Gallery.php`
- **Admin Controller**: `app/Http/Controllers/Admin/GalleryController.php`
- **Admin Views**: `resources/views/admin/galleries/` (seluruh folder)
- **Public View & Page**: `resources/views/gallery.blade.php`
- **Setting Key**: Pilihan `show_gallery_section` di `SettingController.php` & `admin/settings/index.blade.php`
- **Sidebar Admin**: Link "Galleries" pada `resources/views/components/layouts/admin.blade.php`
- **Routes**: `Route::get('/gallery', ...)` & `Route::resource('galleries', ...)` di `routes/web.php`

### **C. Menu "Tentang Saya" (`#about`)**
*Penyesuaian Navigasi*:
- Dihapus dari link teks Navbar. Informasi "Tentang Saya" tetap ada di Hero Section tanpa memerlukan menu navigasi khusus di header.

---

## 🛠️ 3. Langkah-Langkah Eksekusi

- [ ] **Langkah 1**: Salin/Backup database & berkas terkait sebelum penghapusan.
- [ ] **Langkah 2**: Hapus rute terkait di `routes/web.php`.
- [ ] **Langkah 3**: Hapus controller (`SkillController.php`, `GalleryController.php`).
- [ ] **Langkah 4**: Hapus model (`Skill.php`, `Gallery.php`).
- [ ] **Langkah 5**: Hapus migration & jalankan `php artisan migrate:fresh` atau hapus tabel `skills` & `galleries` dari database.
- [ ] **Langkah 6**: Hapus tampilan views admin (`resources/views/admin/skills/`, `resources/views/admin/galleries/`) dan publik (`gallery.blade.php`).
- [ ] **Langkah 7**: Hapus section `#skills` dan link `#about` dari `resources/views/home.blade.php`.
- [ ] **Langkah 8**: Perbarui Navbar (`resources/views/components/layouts/app-public.blade.php`) dan Sidebar Admin (`resources/views/components/layouts/admin.blade.php`).
- [ ] **Langkah 9**: Uji coba untuk memastikan aplikasi berjalan tanpa error `RouteNotDefined` atau `ModelNotFound`.

---
*Dokumen ini menjamin seluruh sisa kode dari fitur yang dipangkas dibersihkan 100% tanpa residu.*
