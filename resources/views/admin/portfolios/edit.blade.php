<x-layouts.admin title="Edit Portofolio" header="Edit Portofolio">
    
    <div class="max-w-3xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Edit: {{ $portfolio->title }}</h2>
            <a href="{{ route('admin.portfolios.index') }}" class="text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">← Kembali</a>
        </div>

        <div class="editorial-card p-6 sm:p-8">
            <form method="POST" action="{{ route('admin.portfolios.update', $portfolio) }}" enctype="multipart/form-data" class="space-y-6">
                @csrf
                @method('PUT')

                <!-- Judul -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Judul Proyek *</label>
                    <input type="text" name="title" value="{{ old('title', $portfolio->title) }}" required class="input input-theme w-full rounded-none text-xs">
                    @error('title') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Kategori & Featured -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Kategori Proyek *</label>
                        <select name="category" required class="select select-bordered input-theme w-full rounded-none text-xs">
                            <option value="Web App" {{ $portfolio->category == 'Web App' ? 'selected' : '' }}>Web App</option>
                            <option value="Fullstack App" {{ $portfolio->category == 'Fullstack App' ? 'selected' : '' }}>Fullstack App</option>
                            <option value="SaaS Platform" {{ $portfolio->category == 'SaaS Platform' ? 'selected' : '' }}>SaaS Platform</option>
                            <option value="Backend API" {{ $portfolio->category == 'Backend API' ? 'selected' : '' }}>Backend API</option>
                            <option value="Mobile App" {{ $portfolio->category == 'Mobile App' ? 'selected' : '' }}>Mobile App</option>
                        </select>
                        @error('category') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div class="flex items-center pt-6">
                        <label class="cursor-pointer flex items-center gap-3">
                            <input type="checkbox" name="is_featured" value="1" {{ $portfolio->is_featured ? 'checked' : '' }} class="checkbox checkbox-primary" />
                            <span class="text-xs uppercase font-extrabold tracking-wider text-heading">Tampilkan sebagai Featured</span>
                        </label>
                    </div>
                </div>

                <!-- URL Proyek -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">URL Proyek / GitHub Link (Opsional)</label>
                    <input type="url" name="project_url" value="{{ old('project_url', $portfolio->project_url) }}" class="input input-theme w-full rounded-none text-xs">
                    @error('project_url') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Tech Stack -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Tech Stack / Teknologi Digunakan (Pisahkan dengan koma)</label>
                    <input type="text" name="tech_stack" value="{{ old('tech_stack', $portfolio->tech_stack) }}" placeholder="Contoh: Laravel, Vue.js, Tailwind CSS, MySQL, Redis" class="input input-theme w-full rounded-none text-xs font-mono">
                    @error('tech_stack') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Gambar Thumbnail Existing & Upload -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Thumbnail Proyek</label>
                    @if($portfolio->image_path)
                        <div class="mb-3 flex items-center gap-4">
                            <img src="{{ uploaded_asset($portfolio->image_path) }}" alt="{{ $portfolio->title }}" class="w-20 h-20 object-cover border border-slate-300 dark:border-slate-700" />
                            <span class="text-xs text-subtext">Gambar saat ini. Upload file baru di bawah jika ingin mengganti.</span>
                        </div>
                    @endif
                    <input type="file" name="image" accept="image/*" class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                    @error('image') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Deskripsi -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Proyek *</label>
                    <textarea name="description" rows="5" required class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('description', $portfolio->description) }}</textarea>
                    @error('description') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Actions -->
                <div class="pt-4 flex justify-end gap-3">
                    <a href="{{ route('admin.portfolios.index') }}" class="px-6 py-2.5 text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">Batal</a>
                    <button type="submit" class="px-8 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                        Update Portofolio
                    </button>
                </div>
            </form>
        </div>
    </div>

</x-layouts.admin>
