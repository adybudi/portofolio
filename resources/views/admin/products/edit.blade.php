<x-layouts.admin title="Edit Produk">
    <x-slot name="header">Edit Produk</x-slot>

    <div class="max-w-3xl mx-auto space-y-6">
        
        <div class="flex items-center justify-between">
            <a href="{{ route('admin.products.index') }}" class="text-xs uppercase font-extrabold text-[#0096c7] hover:underline flex items-center gap-1">
                <span>← Kembali ke Daftar Produk</span>
            </a>
        </div>

        <div class="bg-white dark:bg-[#131924] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
            <h2 class="font-display text-2xl font-bold uppercase text-heading border-b border-slate-200 dark:border-slate-800 pb-4">
                Formulir Edit Produk
            </h2>

            <form method="POST" action="{{ route('admin.products.update', $product) }}" enctype="multipart/form-data" class="space-y-5">
                @csrf
                @method('PUT')

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Judul / Nama Produk (Opsional)</label>
                    <input type="text" name="title" value="{{ old('title', $product->title) }}" placeholder="Tanpa Judul" class="w-full px-4 py-3 input-theme text-xs">
                    @error('title') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Harga (Rupiah / Opsional)</label>
                        <input type="number" name="price" value="{{ old('price', $product->price) }}" step="500" min="0" placeholder="Tanpa Harga" class="w-full px-4 py-3 input-theme text-xs font-mono font-bold">
                        @error('price') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Kategori Produk (Opsional)</label>
                        <input type="text" name="category" value="{{ old('category', $product->category) }}" placeholder="Tanpa Kategori" class="w-full px-4 py-3 input-theme text-xs">
                        @error('category') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Link Pembelian / URL Eksternal (Opsional)</label>
                    <input type="url" name="link" value="{{ old('link', $product->link) }}" placeholder="https://..." class="w-full px-4 py-3 input-theme text-xs">
                    @error('link') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Foto Saat Ini</label>
                    @if($product->image_path)
                        <div class="w-48 aspect-video overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 mb-2">
                            <img src="{{ asset($product->image_path) }}" alt="{{ $product->title }}" class="w-full h-full object-cover">
                        </div>
                    @else
                        <div class="text-xs text-subtext italic mb-2">Belum ada foto produk.</div>
                    @endif
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Ganti Foto (Opsional, max 5MB)</label>
                    <input type="file" name="image" accept="image/jpeg,image/png,image/jpg,image/webp" class="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 text-xs bg-slate-50 dark:bg-slate-900 text-heading">
                    @error('image') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Deskripsi Produk (Opsional)</label>
                    <textarea name="description" rows="4" class="w-full px-4 py-3 input-theme text-xs leading-relaxed">{{ old('description', $product->description) }}</textarea>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Urutan Tampil (Order)</label>
                        <input type="number" name="order" value="{{ old('order', $product->order) }}" class="w-full px-4 py-3 input-theme text-xs">
                    </div>

                    <div class="flex items-center gap-2 pt-6">
                        <input type="checkbox" name="is_active" id="is_active" value="1" {{ old('is_active', $product->is_active) ? 'checked' : '' }} class="w-4 h-4 text-[#0096c7] border-slate-300 dark:border-slate-700">
                        <label for="is_active" class="text-xs font-bold uppercase text-heading">Tampilkan di Publik (Aktif)</label>
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end gap-3">
                    <a href="{{ route('admin.products.index') }}" class="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase">Batal</a>
                    <button type="submit" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-widest transition-all">Perbarui Produk</button>
                </div>
            </form>
        </div>

    </div>
</x-layouts.admin>
