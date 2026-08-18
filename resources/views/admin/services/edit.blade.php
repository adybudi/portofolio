<x-layouts.admin title="Edit Jasa" header="Edit Jasa / Layanan">

    <div class="max-w-3xl">
        <a href="{{ route('admin.services.index') }}" class="inline-flex items-center gap-1.5 text-xs text-subtext hover:text-heading mb-6 transition-colors">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Kembali ke Daftar Jasa
        </a>

        <form action="{{ route('admin.services.update', $service) }}" method="POST" enctype="multipart/form-data" class="space-y-6">
            @csrf
            @method('PUT')

            {{-- Judul --}}
            <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Judul Jasa <span class="text-rose-500">*</span></label>
                <input type="text" name="title" value="{{ old('title', $service->title) }}" required class="input-theme w-full">
                @error('title')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
            </div>

            {{-- Deskripsi --}}
            <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Deskripsi</label>
                <textarea name="description" rows="4" class="input-theme w-full resize-none">{{ old('description', $service->description) }}</textarea>
                @error('description')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
            </div>

            {{-- Harga --}}
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Harga Normal (Rp)</label>
                    <input type="number" name="price" value="{{ old('price', $service->price) }}" min="0" step="1000" class="input-theme w-full">
                    @error('price')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
                </div>
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Harga Diskon (Rp)</label>
                    <input type="number" name="discount_price" value="{{ old('discount_price', $service->discount_price) }}" min="0" step="1000" class="input-theme w-full">
                    @error('discount_price')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
                </div>
            </div>

            {{-- Checkbox diskon --}}
            <div>
                <label class="flex items-center gap-3 cursor-pointer p-3 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <input type="checkbox" name="has_discount" value="1" {{ old('has_discount', $service->has_discount) ? 'checked' : '' }} class="checkbox checkbox-warning checkbox-sm">
                    <span class="text-xs font-bold uppercase text-heading">Aktifkan Harga Diskon</span>
                </label>
            </div>

            {{-- Gambar --}}
            <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Gambar / Thumbnail</label>
                @if($service->image)
                    <div class="mb-2 flex items-center gap-3">
                        <img src="{{ uploaded_asset($service->image) }}" alt="{{ $service->title }}" class="w-20 h-14 object-cover border border-slate-300 dark:border-slate-700">
                        <span class="text-[10px] text-subtext">Gambar saat ini. Upload baru untuk mengganti.</span>
                    </div>
                @endif
                <input type="file" name="image" accept="image/jpeg,image/png,image/jpg,image/webp" class="input-theme w-full file:mr-3 file:py-1 file:px-3 file:border-0 file:text-xs file:font-bold file:uppercase file:bg-[#0096c7] file:text-white cursor-pointer">
                <p class="text-[10px] text-subtext mt-1">Format: JPEG, PNG, WebP. Maks: 5MB.</p>
                @error('image')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
            </div>

            {{-- Fitur / Features (Dynamic) --}}
            @php
                $existingFeatures = old('features', $service->features ?? ['']);
                if (empty($existingFeatures)) { $existingFeatures = ['']; }
            @endphp
            <div x-data="{ features: {{ json_encode($existingFeatures) }} }">
                <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Daftar Fitur / Keunggulan</label>
                <div class="space-y-2">
                    <template x-for="(feature, index) in features" :key="index">
                        <div class="flex items-center gap-2">
                            <input type="text" :name="'features[' + index + ']'" x-model="features[index]" class="input-theme flex-1">
                            <button type="button" @click="features.splice(index, 1)" class="p-2 text-rose-500 hover:text-rose-700 transition-colors" title="Hapus fitur">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>
                    </template>
                </div>
                <button type="button" @click="features.push('')" class="mt-2 px-3 py-1.5 border border-dashed border-[#0096c7] text-[#0096c7] text-[11px] font-bold uppercase hover:bg-[#0096c7]/10 transition-all flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                    Tambah Item Fitur
                </button>
                @error('features.*')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
            </div>

            {{-- Urutan & Status --}}
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-subtext mb-1.5">Urutan Tampil</label>
                    <input type="number" name="order" value="{{ old('order', $service->order) }}" min="0" class="input-theme w-full">
                    @error('order')<p class="text-rose-500 text-[11px] mt-1">{{ $message }}</p>@enderror
                </div>
                <div class="flex items-end pb-1">
                    <label class="flex items-center gap-3 cursor-pointer p-3 border border-slate-200 dark:border-slate-700 w-full hover:bg-slate-50 dark:hover:bg-slate-800/40">
                        <input type="checkbox" name="is_active" value="1" {{ old('is_active', $service->is_active) ? 'checked' : '' }} class="checkbox checkbox-primary checkbox-sm">
                        <span class="text-xs font-bold uppercase text-heading">Aktifkan Jasa</span>
                    </label>
                </div>
            </div>

            {{-- Submit --}}
            <div class="flex items-center gap-3 pt-2">
                <button type="submit" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077a3] text-white text-xs font-extrabold uppercase tracking-wider transition-all">
                    Simpan Perubahan
                </button>
                <a href="{{ route('admin.services.index') }}" class="px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext text-xs font-bold uppercase hover:text-heading transition-colors">
                    Batal
                </a>
            </div>
        </form>
    </div>

</x-layouts.admin>
