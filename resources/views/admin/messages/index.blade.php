<x-layouts.admin title="Kotak Masuk Pesan" header="Kotak Masuk Pesan Kontak">
    
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Pesan dari Pengunjung</h2>
            <p class="text-xs text-subtext">Pesan yang dikirimkan pengunjung melalui form kontak pada website.</p>
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
                        <th class="p-4">Status</th>
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
                            <td class="p-4">
                                @if(!$item->is_read)
                                    <span class="px-2.5 py-0.5 border border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-mono uppercase font-bold">Baru / Unread</span>
                                @else
                                    <span class="px-2.5 py-0.5 border border-slate-300 dark:border-slate-700 text-subtext text-[10px] font-mono uppercase">Sudah Dibaca</span>
                                @endif
                            </td>
                            <td class="p-4 text-right">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.messages.show', $item) }}" class="px-3 py-1 border border-[#0096c7] text-[#0096c7] text-[10px] uppercase font-bold hover:bg-[#0096c7] hover:text-white transition-all">
                                        Baca Pesan
                                    </a>
                                    <form method="POST" action="{{ route('admin.messages.destroy', $item) }}" onsubmit="return confirm('Hapus pesan ini?')">
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

</x-layouts.admin>
