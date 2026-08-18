<x-layouts.admin title="Kelola Portofolio" header="Manajemen Portofolio">
    
    <div x-data="{ showDeleteModal: false, deleteForm: null }">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Portofolio Proyek</h2>
                <p class="text-xs text-subtext">Kelola item portofolio yang tampil di halaman depan.</p>
            </div>
            <a href="{{ route('admin.portfolios.create') }}" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                + Tambah Portofolio
            </a>
        </div>

        <!-- Table -->
        <div class="editorial-card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                            <th class="p-4 hidden md:table-cell">Thumbnail</th>
                            <th class="p-4">Judul Proyek</th>
                            <th class="p-4 hidden sm:table-cell">Kategori</th>
                            <th class="p-4">Status</th>
                            <th class="p-4 hidden lg:table-cell">URL Link</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                        @forelse($portfolios as $item)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                <td class="p-4 hidden md:table-cell">
                                    @if($item->image_path)
                                        <img src="{{ uploaded_asset($item->image_path) }}" alt="{{ $item->title }}" loading="lazy" class="w-12 h-12 object-cover border border-slate-300 dark:border-slate-700" />
                                    @else
                                        <div class="w-12 h-12 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-subtext text-[10px]">
                                            No img
                                        </div>
                                    @endif
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    {{ $item->title }}
                                </td>
                                <td class="p-4 hidden sm:table-cell">
                                    <span class="px-2 py-0.5 border border-slate-300 dark:border-slate-700 text-subtext text-[10px] font-mono uppercase">
                                        {{ $item->category }}
                                    </span>
                                </td>
                                <td class="p-4">
                                    @if($item->is_featured)
                                        <span class="px-2 py-0.5 border border-[#0096c7] text-[#0096c7] text-[10px] font-mono uppercase font-bold">Featured</span>
                                    @else
                                        <span class="px-2 py-0.5 border border-slate-300 dark:border-slate-700 text-subtext text-[10px] font-mono uppercase">Standard</span>
                                    @endif
                                </td>
                                <td class="p-4 hidden lg:table-cell font-mono text-xs text-[#0096c7]">
                                    @if($item->project_url)
                                        <a href="{{ $item->project_url }}" target="_blank" class="hover:underline flex items-center gap-1">
                                            <span>View</span>
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        </a>
                                    @else
                                        <span class="text-subtext">-</span>
                                    @endif
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <a href="{{ route('admin.portfolios.edit', $item) }}" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800">
                                            Edit
                                        </a>
                                        <form x-ref="form_{{ $item->id }}" method="POST" action="{{ route('admin.portfolios.destroy', $item) }}" @submit.prevent="deleteForm = $refs.form_{{ $item->id }}; showDeleteModal = true">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="px-3 py-1 border border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-bold hover:bg-rose-500 hover:text-white">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="p-8 text-center text-subtext text-xs uppercase tracking-widest">
                                    Belum ada data portofolio.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            @if($portfolios->hasPages())
                <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                    {{ $portfolios->links() }}
                </div>
            @endif
        </div>

        <!-- Delete Confirmation Modal -->
        <div x-show="showDeleteModal" x-cloak @keydown.escape.window="showDeleteModal = false" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div x-show="showDeleteModal" x-transition.opacity class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showDeleteModal = false"></div>
            <div x-show="showDeleteModal" x-transition class="relative editorial-card bg-white dark:bg-[#131924] w-full max-w-md p-8 z-10 shadow-2xl border border-slate-200 dark:border-slate-800">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                        <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    </div>
                    <div>
                        <h3 class="font-display text-xl font-bold text-heading uppercase">Hapus Portofolio?</h3>
                        <p class="text-xs text-subtext mt-2 leading-relaxed">Tindakan ini tidak dapat dibatalkan. Data portofolio akan dihapus permanen beserta gambar terkait.</p>
                    </div>
                    <div class="flex gap-3 pt-2">
                        <button @click="showDeleteModal = false" type="button" class="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold tracking-wider hover:bg-slate-100 dark:hover:bg-slate-800">
                            Batal
                        </button>
                        <button @click="if(deleteForm) deleteForm.submit()" type="button" class="flex-1 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</x-layouts.admin>
