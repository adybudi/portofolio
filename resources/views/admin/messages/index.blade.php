<x-layouts.admin title="Kotak Masuk Pesan" header="Kotak Masuk Pesan Kontak">
    
    <div x-data="{ showDeleteModal: false, deleteForm: null }">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Pesan dari Pengunjung</h2>
                <p class="text-xs text-subtext mt-1">Pesan yang dikirimkan pengunjung melalui form kontak pada website.</p>
            </div>
        </div>

        <!-- Table -->
        <div class="editorial-card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                            <th class="p-4">Pengirim</th>
                            <th class="p-4">Email</th>
                            <th class="p-4">Subjek</th>
                            <th class="p-4">Tanggal Masuk</th>
                            <th class="p-4 text-center">Status</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                        @forelse($messages as $item)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors {{ !$item->is_read ? 'font-bold bg-slate-50/80 dark:bg-slate-900/50' : '' }}">
                                <td class="p-4 text-heading">
                                    {{ $item->name }}
                                </td>
                                <td class="p-4 text-subtext font-mono text-[11px]">
                                    {{ $item->email }}
                                </td>
                                <td class="p-4 text-heading max-w-xs truncate">
                                    {{ $item->subject ?? 'Tidak Ada Subjek' }}
                                </td>
                                <td class="p-4 text-subtext font-mono text-[10px]">
                                    {{ $item->created_at->format('d M Y H:i') }}
                                </td>
                                <td class="p-4 text-center">
                                    @if(!$item->is_read)
                                        <span class="px-2.5 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-mono uppercase font-bold">BARU</span>
                                    @else
                                        <span class="px-2.5 py-1 bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono uppercase font-bold">DIBACA</span>
                                    @endif
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <a href="{{ route('admin.messages.show', $item) }}" class="px-3 py-1 border border-[#0096c7] text-[#0096c7] text-[10px] uppercase font-bold hover:bg-[#0096c7] hover:text-white transition-all">
                                            Baca
                                        </a>
                                        <form x-ref="form_{{ $item->id }}" method="POST" action="{{ route('admin.messages.destroy', $item) }}" @submit.prevent="deleteForm = $refs.form_{{ $item->id }}; showDeleteModal = true">
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
                                    Belum ada pesan masuk.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>

            @if($messages->hasPages())
                <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                    {{ $messages->links() }}
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
                        <h3 class="font-display text-xl font-bold text-heading uppercase">Hapus Pesan?</h3>
                        <p class="text-xs text-subtext mt-2 leading-relaxed">Pesan masuk dari pengunjung ini akan dihapus secara permanen.</p>
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
