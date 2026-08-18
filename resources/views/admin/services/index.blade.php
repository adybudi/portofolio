<x-layouts.admin title="Kelola Jasa" header="Manajemen Jasa & Layanan">

    <div x-data="{ showDeleteModal: false, deleteForm: null }">
        <!-- Action Header -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Layanan Jasa</h2>
                <p class="text-xs text-subtext mt-1">Kelola penawaran jasa profesional, penetapan harga, paket diskon, dan daftar fitur.</p>
            </div>
            <a href="{{ route('admin.services.create') }}" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Tambah Jasa Baru</span>
            </a>
        </div>

        <!-- Table Container -->
        <div class="editorial-card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                            <th class="p-4">Thumbnail</th>
                            <th class="p-4">Judul & Fitur</th>
                            <th class="p-4">Harga & Diskon</th>
                            <th class="p-4 text-center">Urutan</th>
                            <th class="p-4 text-center">Status</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                        @forelse($services as $service)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                <td class="p-4 w-20">
                                    @if($service->image)
                                        <img src="{{ uploaded_asset($service->image) }}" alt="{{ $service->title }}" loading="lazy" class="w-14 h-10 object-cover border border-slate-300 dark:border-slate-700" />
                                    @else
                                        <div class="w-14 h-10 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-subtext text-[10px]">
                                            No img
                                        </div>
                                    @endif
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    <span class="block text-sm uppercase">{{ $service->title }}</span>
                                    @if($service->features && count($service->features) > 0)
                                        <span class="inline-block px-2 py-0.5 mt-1 border border-slate-300 dark:border-slate-700 text-subtext text-[10px] font-mono uppercase">
                                            {{ count($service->features) }} FITUR
                                        </span>
                                    @endif
                                </td>
                                <td class="p-4 font-mono">
                                    @if($service->price !== null)
                                        @if($service->has_discount && $service->discount_price)
                                            <div class="space-y-0.5">
                                                <span class="block text-xs line-through text-subtext">
                                                    Rp {{ number_format($service->price, 0, ',', '.') }}
                                                </span>
                                                <span class="block text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                                    Rp {{ number_format($service->discount_price, 0, ',', '.') }}
                                                </span>
                                                <span class="inline-block px-1.5 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[9px] font-bold uppercase">
                                                    DISKON
                                                </span>
                                            </div>
                                        @else
                                            <span class="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                                                Rp {{ number_format($service->price, 0, ',', '.') }}
                                            </span>
                                        @endif
                                    @else
                                        <span class="text-subtext">-</span>
                                    @endif
                                </td>
                                <td class="p-4 text-center font-mono text-subtext font-bold">
                                    {{ $service->order }}
                                </td>
                                <td class="p-4 text-center">
                                    <form action="{{ route('admin.services.toggle', $service) }}" method="POST" class="inline">
                                        @csrf
                                        @method('PATCH')
                                        <button type="submit" title="Klik untuk mengubah status aktif" class="px-2.5 py-1 border transition-all text-[10px] font-mono font-bold uppercase {{ $service->is_active ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20' : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-subtext hover:bg-slate-200' }}">
                                            {{ $service->is_active ? 'AKTIF' : 'NONAKTIF' }}
                                        </button>
                                    </form>
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <a href="{{ route('admin.services.edit', $service) }}" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                            Edit
                                        </a>
                                        <form x-ref="form_{{ $service->id }}" method="POST" action="{{ route('admin.services.destroy', $service) }}" @submit.prevent="deleteForm = $refs.form_{{ $service->id }}; showDeleteModal = true">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="px-3 py-1 border border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-bold hover:bg-rose-500 hover:text-white transition-all">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="p-8 text-center text-subtext text-xs uppercase tracking-widest">
                                    Belum ada data jasa. Silakan klik tombol "Tambah Jasa Baru".
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            @if($services->hasPages())
                <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                    {{ $services->links() }}
                </div>
            @endif
        </div>

        <!-- Delete Confirmation Modal -->
        <div x-show="showDeleteModal" x-cloak @keydown.escape.window="showDeleteModal = false" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div x-show="showDeleteModal" x-cloak x-transition.opacity class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showDeleteModal = false"></div>
            <div x-show="showDeleteModal" x-cloak x-transition class="relative editorial-card bg-white dark:bg-[#131924] w-full max-w-md p-8 z-10 shadow-2xl border border-slate-200 dark:border-slate-800">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                        <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    </div>
                    <div>
                        <h3 class="font-display text-xl font-bold text-heading uppercase">Hapus Layanan Jasa?</h3>
                        <p class="text-xs text-subtext mt-2 leading-relaxed">Tindakan ini tidak dapat dibatalkan. Data jasa akan dihapus permanen beserta gambar terkait.</p>
                    </div>
                    <div class="flex gap-3 pt-2">
                        <button @click="showDeleteModal = false" type="button" class="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold tracking-wider hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                            Batal
                        </button>
                        <button @click="if(deleteForm) deleteForm.submit()" type="button" class="flex-1 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider transition-all">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</x-layouts.admin>
