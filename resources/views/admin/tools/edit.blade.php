<x-layouts.admin title="Edit Tool" header="Edit Tool">
    
    <div class="max-w-3xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Edit: {{ $tool->name }}</h2>
            <a href="{{ route('admin.tools.index') }}" class="text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">← Kembali</a>
        </div>

        <div class="editorial-card p-6 sm:p-8">
            <form method="POST" action="{{ route('admin.tools.update', $tool) }}" enctype="multipart/form-data" class="space-y-6">
                @csrf
                @method('PUT')

                <!-- Nama Tool -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Nama Tool *</label>
                    <input type="text" name="name" value="{{ old('name', $tool->name) }}" required class="input input-theme w-full rounded-none text-xs">
                    @error('name') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Kategori & Target URL -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Kategori *</label>
                        <select name="category" required class="select select-bordered input-theme w-full rounded-none text-xs">
                            <option value="Developer Utility" {{ $tool->category == 'Developer Utility' ? 'selected' : '' }}>Developer Utility</option>
                            <option value="UI/UX Tool" {{ $tool->category == 'UI/UX Tool' ? 'selected' : '' }}>UI/UX Tool</option>
                            <option value="Design Tool" {{ $tool->category == 'Design Tool' ? 'selected' : '' }}>Design Tool</option>
                            <option value="Converter" {{ $tool->category == 'Converter' ? 'selected' : '' }}>Converter</option>
                            <option value="AI Assistant" {{ $tool->category == 'AI Assistant' ? 'selected' : '' }}>AI Assistant</option>
                        </select>
                        @error('category') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">URL Tool *</label>
                        <input type="url" name="url" value="{{ old('url', $tool->url) }}" required class="input input-theme w-full rounded-none text-xs">
                        @error('url') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>
                </div>

                <!-- Upload Ikon -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Ikon Tool</label>
                    @if($tool->icon_path)
                        <div class="mb-3 flex items-center gap-4">
                            <img src="{{ uploaded_asset($tool->icon_path) }}" alt="{{ $tool->name }}" class="w-12 h-12 object-contain border border-slate-300 dark:border-slate-700 p-1" />
                            <span class="text-xs text-subtext">Ikon saat ini. Upload file baru jika ingin mengganti.</span>
                        </div>
                    @endif
                    <input type="file" name="icon" accept="image/*" class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                    @error('icon') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <!-- Deskripsi -->
                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Tool *</label>
                    <textarea name="description" rows="4" required class="textarea textarea-bordered input-theme w-full rounded-none text-xs leading-relaxed">{{ old('description', $tool->description) }}</textarea>
                    @error('description') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div class="flex items-center">
                    <label class="cursor-pointer flex items-center gap-3">
                        <input type="checkbox" name="is_active" value="1" {{ $tool->is_active ? 'checked' : '' }} class="checkbox checkbox-primary" />
                        <span class="text-xs uppercase font-extrabold tracking-wider text-heading">Aktifkan & Tampilkan di Direktori</span>
                    </label>
                </div>

                <!-- Actions -->
                <div class="pt-4 flex justify-end gap-3">
                    <a href="{{ route('admin.tools.index') }}" class="px-6 py-2.5 text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">Batal</a>
                    <button type="submit" class="px-8 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                        Update Tool
                    </button>
                </div>
            </form>
        </div>
    </div>

</x-layouts.admin>
