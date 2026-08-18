<x-layouts.admin title="Setting Profil & Utama" header="Pengaturan Profil & Website">
    
    <div class="max-w-4xl mx-auto space-y-8">
        <div>
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Kelola Konten Dinamis Landing Page</h2>
            <p class="text-xs text-subtext">Perbarui galeri foto profil hero, durasi berganti gambar, deskripsi tentang saya, serta kelola visibilitas section (ON/OFF).</p>
        </div>

        <!-- DEDICATED FORM 1: Galeri Multi-Foto Profil Hero & Durasi Hover -->
        <div class="editorial-card p-6 sm:p-8 space-y-6">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-3 flex justify-between items-center">
                <div>
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7]">
                        📸 Galeri Multi-Foto Profile Hero (Hover Slideshow)
                    </h3>
                    <p class="text-[11px] text-subtext mt-0.5">
                        Kelola foto profil yang berganti secara otomatis saat kursor di-hover pada halaman depan.
                    </p>
                </div>
            </div>

            <!-- Current Photos Grid -->
            <div>
                <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-3">
                    Daftar Foto Profil Terpasang (Total: {{ count($settings['hero_avatars']) }} Foto)
                </label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    @foreach($settings['hero_avatars'] as $index => $photo)
                        <div class="relative border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#131924] p-2 space-y-2">
                            <img src="{{ asset($photo) }}" class="w-full aspect-[4/5] object-cover" />
                            <div class="flex items-center justify-between">
                                <span class="text-[10px] font-mono text-subtext">Foto #{{ $index + 1 }}</span>
                                @if(count($settings['hero_avatars']) > 1)
                                    <form method="POST" action="{{ route('admin.settings.hero_photos.delete', $index) }}" onsubmit="return confirm('Hapus foto #{{ $index + 1 }} dari galeri?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="text-[10px] font-mono text-rose-500 font-bold hover:underline">
                                            [Hapus]
                                        </button>
                                    </form>
                                @endif
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Dedicated Upload Form -->
            <form method="POST" action="{{ route('admin.settings.hero_photos.update') }}" enctype="multipart/form-data" class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                @csrf
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">
                            Tambah Foto Baru (Pilih 1 atau Lebih File)
                        </label>
                        <input type="file" name="avatars[]" multiple accept="image/*" class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">
                            Durasi Berganti Gambar saat Hover (dalam Milidetik / ms) *
                        </label>
                        <input type="number" name="hero_hover_duration" value="{{ old('hero_hover_duration', $settings['hero_hover_duration']) }}" min="200" max="10000" step="100" class="input input-theme w-full rounded-none text-xs font-mono font-bold">
                        <span class="text-[10px] font-mono text-subtext mt-1 block">
                            Contoh: 1000 = 1 detik, 2000 = 2 detik.
                        </span>
                    </div>
                </div>

                <div class="flex justify-end pt-2">
                    <button type="submit" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">
                        Simpan Galeri Foto & Durasi Hover →
                    </button>
                </div>
            </form>
        </div>

        <!-- FORM 2: General Profile Settings & Visibility Toggles -->
        <div class="editorial-card p-6 sm:p-8">
            <form method="POST" action="{{ route('admin.settings.update') }}" enctype="multipart/form-data" class="space-y-8">
                @csrf

                <!-- Section 1: Hero Banner Text & CV PDF Upload -->
                <div class="space-y-4">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
                        1. Teks Hero, Title Website & Berkas CV (PDF)
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Nama Website / Title Tag *</label>
                            <input type="text" name="site_name" value="{{ old('site_name', $settings['site_name']) }}" required class="input input-theme w-full rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Sub-Judul Aksen Banner (Tagline) *</label>
                            <input type="text" name="hero_title" value="{{ old('hero_title', $settings['hero_title']) }}" required class="input input-theme w-full rounded-none text-xs">
                        </div>
                    </div>

                    <!-- Upload Berkas CV (PDF) -->
                    <div class="p-4 border border-[#0096c7]/30 bg-[#0096c7]/5 space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] flex items-center gap-1.5">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Upload Berkas Resume / CV Terbaru (PDF max 10MB)</span>
                            </span>
                            <span class="text-[10px] font-mono text-subtext font-bold flex items-center gap-1">
                                <svg class="w-3 h-3 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                {{ $settings['cv_download_count'] }}x Diunduh Pengunjung
                            </span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                            <div>
                                <input type="file" name="cv_file" accept=".pdf,application/pdf" class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                            </div>
                            <div>
                                @if(!empty($settings['cv_file_path']) && file_exists(public_path($settings['cv_file_path'])))
                                    <div class="flex items-center gap-2">
                                        <span class="text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                                            CV Terpasang
                                        </span>
                                        <a href="{{ asset($settings['cv_file_path']) }}" target="_blank" class="text-xs font-mono text-[#0096c7] hover:underline flex items-center gap-0.5">
                                            <span>[Pratinjau CV]</span>
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        </a>
                                    </div>
                                @else
                                    <span class="text-amber-500 text-xs font-semibold flex items-center gap-1">
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                                        Belum ada file CV PDF yang ter-upload.
                                    </span>
                                @endif
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Bio Hero *</label>
                        <textarea name="hero_subtitle" rows="3" required class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('hero_subtitle', $settings['hero_subtitle']) }}</textarea>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">
                            Spline 3D Embed Viewer URL (Opsional)
                        </label>
                        <input type="url" name="spline_embed_url" value="{{ old('spline_embed_url', $settings['spline_embed_url']) }}" placeholder="https://my.spline.design/..." class="input input-theme w-full rounded-none text-xs">
                        <span class="text-[10px] text-subtext mt-1 block font-mono">
                            Kosongkan jika ingin menggunakan Galeri Foto Profil Hero secara otomatis.
                        </span>
                    </div>
                </div>

                <!-- Section 2: About Me -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
                        2. Section About Me & Kutipan Filosofi
                    </h3>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Profil About Me *</label>
                        <textarea name="about_text" rows="4" required class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('about_text', $settings['about_text']) }}</textarea>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Kutipan Filosofi Editorial *</label>
                        <textarea name="editorial_quote" rows="3" required class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('editorial_quote', $settings['editorial_quote']) }}</textarea>
                    </div>
                </div>

                <!-- Section 3: Stat Angka Dampak -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
                        3. Angka Statistik & Dampak Pengalaman
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Tahun Pengalaman</label>
                            <input type="text" name="stat_years_experience" value="{{ old('stat_years_experience', $settings['stat_years_experience']) }}" class="input input-theme w-full rounded-none text-xs font-mono font-bold">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Proyek Selesai</label>
                            <input type="text" name="stat_projects_completed" value="{{ old('stat_projects_completed', $settings['stat_projects_completed']) }}" class="input input-theme w-full rounded-none text-xs font-mono font-bold">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Klien Puas</label>
                            <input type="text" name="stat_satisfied_clients" value="{{ old('stat_satisfied_clients', $settings['stat_satisfied_clients']) }}" class="input input-theme w-full rounded-none text-xs font-mono font-bold">
                        </div>
                    </div>
                </div>

                <!-- Section 4: Contact & Social Links -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
                        4. Kontak & Media Sosial
                    </h3>

                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Email Address</label>
                            <input type="email" name="email" value="{{ old('email', $settings['email']) }}" class="input input-theme w-full rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">GitHub URL</label>
                            <input type="url" name="github_url" value="{{ old('github_url', $settings['github_url']) }}" class="input input-theme w-full rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">LinkedIn URL</label>
                            <input type="url" name="linkedin_url" value="{{ old('linkedin_url', $settings['linkedin_url']) }}" class="input input-theme w-full rounded-none text-xs">
                        </div>
                    </div>
                </div>

                <!-- Section 5: Dynamic Section Visibility Toggles (Checkboxes) -->
                <div class="space-y-4 pt-4">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
                        5. Kontrol Visibilitas Section Landing Page (Checklist ON / OFF)
                    </h3>
                    <p class="text-xs text-subtext">Centang section yang ingin ditampilkan pada halaman depan portofolio Anda:</p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <input type="checkbox" name="show_portfolio_section" value="1" {{ $settings['show_portfolio_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block">📁 Section Portofolio Proyek</span>
                                <span class="text-[10px] text-subtext">Tampilkan grid portofolio karya & filter kategori</span>
                            </div>
                        </label>

                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <input type="checkbox" name="show_products_section" value="1" {{ $settings['show_products_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                                    <span>Section Produk Jualan</span>
                                </span>
                                <span class="text-[10px] text-subtext">Tampilkan katalog produk & item jualan digital</span>
                            </div>
                        </label>

                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <input type="checkbox" name="show_services_section" value="1" {{ $settings['show_services_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    <span>Section Jasa / Layanan</span>
                                </span>
                                <span class="text-[10px] text-subtext">Tampilkan section jasa & layanan tepat di bawah hero di landing page</span>
                            </div>
                        </label>

                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <input type="checkbox" name="show_experience_section" value="1" {{ $settings['show_experience_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745zM16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01"/></svg>
                                    <span>Section Rekam Jejak Karir</span>
                                </span>
                                <span class="text-[10px] text-subtext">Tampilkan timeline pengalaman kerja & pendidikan</span>
                            </div>
                        </label>

                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40">
                            <input type="checkbox" name="show_certifications_section" value="1" {{ $settings['show_certifications_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                                    <span>Section Sertifikasi Teknikal</span>
                                </span>
                                <span class="text-[10px] text-subtext">Tampilkan lencana sertifikasi resmi (AWS, Laravel, GCP)</span>
                            </div>
                        </label>

                        <label class="p-4 border border-slate-200 dark:border-slate-800 flex items-center gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/40 sm:col-span-2">
                            <input type="checkbox" name="show_contact_section" value="1" {{ $settings['show_contact_section'] ? 'checked' : '' }} class="checkbox checkbox-primary">
                            <div>
                                <span class="text-xs font-bold text-heading uppercase block flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    <span>Section Hubungi Saya (Form Kontak)</span>
                                </span>
                                <span class="text-[10px] text-subtext">Tampilkan form kirim pesan & kontak langsung</span>
                            </div>
                        </label>
                    </div>
                </div>

                <!-- Section 6: Security & Public Registration Toggle -->
                <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-rose-500 pb-1 flex items-center gap-2">
                        <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        <span>6. Keamanan Akun & Proteksi Registrasi Publik</span>
                    </h3>

                    <label class="p-4 border border-rose-500/30 bg-rose-500/5 flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" name="enable_public_registration" value="1" {{ $settings['enable_public_registration'] ? 'checked' : '' }} class="checkbox checkbox-error">
                        <div>
                            <span class="text-xs font-extrabold text-heading uppercase block">Izinkan Registrasi Pengguna Baru via URL `/register`</span>
                            <span class="text-[11px] text-subtext">Secara bawaan (*default*) opsi ini <strong>dinonaktifkan (OFF)</strong> demi mencegah siapapun mendaftarkan akun admin baru secara bebas. Centang hanya jika Anda sengaja ingin membuka pendaftaran akun.</span>
                        </div>
                    </label>
                </div>

                <!-- Submit Button -->
                <div class="pt-6 flex justify-end">
                    <button type="submit" class="px-8 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">
                        Simpan Perubahan Pengaturan Utama
                    </button>
                </div>
            </form>
        </div>
    </div>

</x-layouts.admin>
