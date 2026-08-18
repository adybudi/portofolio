<x-layouts.admin title="Kelola Tools" header="Manajemen Tools Hub">
    
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Tools & Micro Apps</h2>
            <p class="text-xs text-subtext">Kelola direktori tools kecil beserta statistik performa jumlah klik pengunjung.</p>
        </div>
        <a href="{{ route('admin.tools.create') }}" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
            + Tambah Tool Baru
        </a>
    </div>

    <!-- Table -->
    <div class="editorial-card overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                        <th class="p-4">Ikon</th>
                        <th class="p-4">Nama Tool</th>
                        <th class="p-4">Kategori</th>
                        <th class="p-4">Statistik Klik</th>
                        <th class="p-4">Target URL</th>
                        <th class="p-4 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                    @forelse($tools as $item)
                        <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                            <td class="p-4">
                                @if($item->icon_path)
                                    <img src="{{ uploaded_asset($item->icon_path) }}" class="w-10 h-10 object-contain border border-slate-300 dark:border-slate-700 p-1" />
                                @else
                                    <div class="w-10 h-10 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-[#0096c7]">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm2 7a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
                                    </div>
                                @endif
                            </td>
                            <td class="p-4 font-bold text-heading">
                                {{ $item->name }}
                            </td>
                            <td class="p-4">
                                <span class="px-2 py-0.5 border border-slate-300 dark:border-slate-700 text-subtext text-[10px] font-mono uppercase">
                                    {{ $item->category }}
                                </span>
                            </td>
                            <td class="p-4 font-mono text-xs text-[#0096c7] font-bold flex items-center gap-1">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                <span>{{ $item->clicks_count }} Klik</span>
                            </td>
                            <td class="p-4 font-mono text-xs text-[#0096c7]">
                                <a href="{{ route('tools.launch', $item) }}" target="_blank" class="hover:underline flex items-center gap-1">
                                    <span>Buka Link</span>
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>
                            </td>
                            <td class="p-4 text-right">
                                <div class="flex items-center justify-end gap-2">
                                    <a href="{{ route('admin.tools.edit', $item) }}" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800">
                                        Edit
                                    </a>
                                    <form method="POST" action="{{ route('admin.tools.destroy', $item) }}" onsubmit="return confirm('Hapus tool ini?')">
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
                                Belum ada data tool.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>

        @if($tools->hasPages())
            <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                {{ $tools->links() }}
            </div>
        @endif
    </div>

</x-layouts.admin>
