<x-layouts.admin title="Tambah Portofolio" header="Tambah Portofolio Baru">
    
    <div class="max-w-3xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Form Portofolio Proyek</h2>
            <a href="{{ route('admin.portfolios.index') }}" class="text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">← Kembali</a>
        </div>

        <div class="editorial-card p-6 sm:p-8">
            <form method="POST" action="{{ route('admin.portfolios.store') }}" enctype="multipart/form-data" class="space-y-6">
                @csrf

                <!-- Judul -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Judul Proyek *</label>
                    <input type="text" name="title" value="{{ old('title') }}" required placeholder="Contoh: E-Commerce Mobile App" class="input input-theme w-full rounded-none text-xs">
                    @error('title') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Kategori & Featured -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Kategori Proyek *</label>
                        <select name="category" required class="select select-bordered input-theme w-full rounded-none text-xs">
                            <option value="Web App">Web App</option>
                            <option value="Fullstack App">Fullstack App</option>
                            <option value="SaaS Platform">SaaS Platform</option>
                            <option value="Backend API">Backend API</option>
                            <option value="Mobile App">Mobile App</option>
                        </select>
                        @error('category') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div class="flex items-center pt-6">
                        <label class="cursor-pointer flex items-center gap-3">
                            <input type="checkbox" name="is_featured" value="1" class="checkbox checkbox-primary" />
                            <span class="text-xs uppercase font-extrabold tracking-wider text-heading">Tampilkan sebagai Featured</span>
                        </label>
                    </div>
                </div>

                <!-- URL Proyek -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">URL Proyek / GitHub Link (Opsional)</label>
                    <input type="url" name="project_url" value="{{ old('project_url') }}" placeholder="https://github.com/..." class="input input-theme w-full rounded-none text-xs">
                    @error('project_url') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Tech Stack -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Tech Stack / Teknologi Digunakan (Pisahkan dengan koma)</label>
                    <input type="text" name="tech_stack" value="{{ old('tech_stack') }}" placeholder="Contoh: Laravel, Vue.js, Tailwind CSS, MySQL, Redis" class="input input-theme w-full rounded-none text-xs font-mono">
                    @error('tech_stack') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Gambar Thumbnail -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Upload Thumbnail Proyek (Opsional)</label>
                    <input type="file" name="image" accept="image/*" class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                    @error('image') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Deskripsi -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Proyek *</label>
                    <textarea name="description" rows="5" required placeholder="Jelaskan fitur utama, teknologi yang digunakan, serta tantangan teknik yang diselesaikan..." class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('description') }}</textarea>
                    @error('description') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Actions -->
                <div class="pt-4 flex justify-end gap-3">
                    <a href="{{ route('admin.portfolios.index') }}" class="px-6 py-2.5 text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">Batal</a>
                    <button type="submit" class="px-8 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                        Simpan Portofolio
                    </button>
                </div>
            </form>
        </div>
    </div>

</x-layouts.admin>
