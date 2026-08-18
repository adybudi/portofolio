<x-layouts.admin title="Manajemen Produk">
    <x-slot name="header">Kelola Produk & Penjualan</x-slot>

    <div class="space-y-6">
        
        <!-- Action Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#131924] p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
                <h2 class="font-display text-2xl font-bold uppercase text-heading">Daftar Produk</h2>
                <p class="text-xs text-subtext mt-1">Kelola barang/jasa digital yang dijual (judul, deskripsi, harga, kategori, dan link pembelian).</p>
            </div>
            <a href="{{ route('admin.products.create') }}" class="px-5 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-widest transition-all flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Tambah Produk Baru</span>
            </a>
        </div>

        <!-- Products Table -->
        <div class="bg-white dark:bg-[#131924] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                    <thead class="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 uppercase font-mono font-bold text-subtext">
                        <tr>
                            <th class="p-4">Foto</th>
                            <th class="p-4">Judul & Kategori</th>
                            <th class="p-4">Harga</th>
                            <th class="p-4">Link Pembelian</th>
                            <th class="p-4">Status</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                        @forelse($products as $item)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                                <td class="p-4 w-20">
                                    @if($item->image_path)
                                        <img src="{{ uploaded_asset($item->image_path) }}" alt="{{ $item->title }}" class="w-16 h-12 object-cover border border-slate-300 dark:border-slate-700">
                                    @else
                                        <div class="w-16 h-12 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-[10px] text-subtext">Tanpa Foto</div>
                                    @endif
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    <span class="block text-sm uppercase">{{ $item->title ?: 'Produk (Tanpa Judul)' }}</span>
                                    <span class="text-[10px] font-mono text-[#0096c7] font-bold uppercase">{{ $item->category ?: 'Tanpa Kategori' }}</span>
                                </td>
                                <td class="p-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                                    @if($item->price !== null)
                                        Rp {{ number_format($item->price, 0, ',', '.') }}
                                    @else
                                        <span class="text-subtext font-normal text-xs">-</span>
                                    @endif
                                </td>
                                <td class="p-4">
                                    @if($item->link)
                                        <a href="{{ $item->link }}" target="_blank" class="text-xs font-mono font-bold text-[#0096c7] hover:underline flex items-center gap-1">
                                            <span>Buka Link</span>
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        </a>
                                    @else
                                        <span class="text-subtext font-normal text-xs">-</span>
                                    @endif
                                </td>
                                <td class="p-4">
                                    @if($item->is_active)
                                        <span class="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold uppercase">AKTIF</span>
                                    @else
                                        <span class="px-2 py-0.5 bg-slate-500/10 border border-slate-500/30 text-slate-500 text-[10px] font-mono font-bold uppercase">NONAKTIF</span>
                                    @endif
                                </td>
                                <td class="p-4 text-right space-x-2">
                                    <a href="{{ route('admin.products.edit', $item) }}" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading hover:bg-slate-100 dark:hover:bg-slate-800 text-[10px] font-mono font-bold uppercase">EDIT</a>
                                    <form method="POST" action="{{ route('admin.products.destroy', $item) }}" class="inline-block" onsubmit="return confirm('Apakah Anda yakin ingin menghapus produk ini?');">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="px-3 py-1 bg-rose-600/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 hover:bg-rose-600 hover:text-white text-[10px] font-mono font-bold uppercase transition-all">HAPUS</button>
                                    </form>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="p-8 text-center text-subtext text-xs uppercase">
                                    Belum ada produk yang ditambahkan. Silakan klik tombol "Tambah Produk Baru".
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        @if($products->hasPages())
            <div class="pt-4">
                {{ $products->links() }}
            </div>
        @endif

    </div>
</x-layouts.admin>
