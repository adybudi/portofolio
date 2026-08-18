<x-layouts.admin title="Tambah Produk" header="Tambah Produk Baru">

    <div class="max-w-3xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Form Produk Jualan</h2>
                <p class="text-xs text-subtext mt-1">Tambah barang atau jasa digital baru untuk katalog jualan.</p>
            </div>
            <a href="{{ route('admin.products.index') }}" class="text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading transition-colors">
                ← Kembali
            </a>
        </div>

        <div class="editorial-card p-6 sm:p-8">
            <form method="POST" action="{{ route('admin.products.store') }}" enctype="multipart/form-data" class="space-y-6">
                @csrf

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Judul / Nama Produk</label>
                    <input type="text" name="title" value="{{ old('title') }}" placeholder="Contoh: Source Code E-Commerce / E-Book Panduan Cloud" class="input input-theme w-full rounded-none text-xs">
                    @error('title') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Harga (Rupiah)</label>
                        <input type="number" name="price" value="{{ old('price') }}" step="500" min="0" placeholder="Contoh: 150000" class="input input-theme w-full rounded-none text-xs font-mono font-bold">
                        @error('price') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Kategori Produk</label>
                        <input type="text" name="category" value="{{ old('category') }}" placeholder="Contoh: Source Code / E-Book / Template" class="input input-theme w-full rounded-none text-xs">
                        @error('category') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Link Pembelian / URL Eksternal</label>
                    <input type="url" name="link" value="{{ old('link') }}" placeholder="https://gumroad.com/... atau https://wa.me/..." class="input input-theme w-full rounded-none text-xs">
                    @error('link') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Foto / Sampul Produk</label>
                    <input type="file" name="image" accept="image/jpeg,image/png,image/jpg,image/webp" class="file-input input-theme w-full rounded-none text-xs cursor-pointer">
                    <p class="text-[10px] text-subtext mt-1">Format: JPEG, PNG, WebP. Maks: 5MB.</p>
                    @error('image') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Produk</label>
                    <textarea name="description" rows="4" placeholder="Tuliskan spesifikasi, fitur utama, atau informasi penjualan..." class="textarea input-theme w-full rounded-none text-xs leading-relaxed resize-none">{{ old('description') }}</textarea>
                    @error('description') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Urutan Tampil</label>
                        <input type="number" name="order" value="{{ old('order', 0) }}" class="input input-theme w-full rounded-none text-xs">
                        @error('order') <span class="text-xs text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                    </div>

                    <div class="flex items-end">
                        <label class="flex items-center gap-3 cursor-pointer p-3 border border-slate-200 dark:border-slate-700 w-full hover:bg-slate-50 dark:hover:bg-slate-800/40">
                            <input type="checkbox" name="is_active" value="1" {{ old('is_active', '1') ? 'checked' : '' }} class="checkbox checkbox-primary checkbox-sm">
                            <span class="text-xs font-bold uppercase text-heading">Tampilkan di Publik (Aktif)</span>
                        </label>
                    </div>
                </div>

                <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                    <button type="submit" class="px-8 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">
                        Simpan Produk
                    </button>
                    <a href="{{ route('admin.products.index') }}" class="px-6 py-3 border border-slate-300 dark:border-slate-700 text-subtext text-xs font-bold uppercase hover:text-heading transition-colors">
                        Batal
                    </a>
                </div>
            </form>
        </div>

    </div>
</x-layouts.admin>
