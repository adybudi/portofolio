<x-layouts.admin title="Dashboard Overview" header="Dashboard Overview">
    
    @php
        $unreadMessagesCount = \App\Models\ContactMessage::where('is_read', false)->count();
        $totalToolClicks = \App\Models\Tool::sum('clicks_count');
    @endphp

    <!-- Stats Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="editorial-card p-6 border-l-4 border-l-[#0096c7] flex items-center justify-between">
            <div>
                <p class="text-[10px] uppercase font-extrabold tracking-widest text-subtext">Total Portofolio</p>
                <p class="font-display text-4xl font-extrabold text-heading mt-1">{{ $stats['portfolios_count'] }}</p>
            </div>
            <div class="w-12 h-12 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center text-[#0096c7]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
            </div>
        </div>

        <div class="editorial-card p-6 border-l-4 border-l-[#0096c7] flex items-center justify-between">
            <div>
                <p class="text-[10px] uppercase font-extrabold tracking-widest text-subtext">Total Tools Hub</p>
                <p class="font-display text-4xl font-extrabold text-heading mt-1">{{ $stats['tools_count'] }}</p>
                <span class="text-[10px] font-mono text-[#0096c7] font-bold mt-1 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    {{ $totalToolClicks }} Total Klik
                </span>
            </div>
            <div class="w-12 h-12 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center text-[#0096c7]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm2 7a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
            </div>
        </div>

        <div class="editorial-card p-6 border-l-4 border-l-[#0096c7] flex items-center justify-between">
            <div>
                <p class="text-[10px] uppercase font-extrabold tracking-widest text-subtext">Total Jasa</p>
                <p class="font-display text-4xl font-extrabold text-heading mt-1">{{ $stats['services_count'] }}</p>
            </div>
            <div class="w-12 h-12 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center text-[#0096c7]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
        </div>

        <div class="editorial-card p-6 border-l-4 {{ $unreadMessagesCount > 0 ? 'border-l-rose-500 bg-rose-500/5' : 'border-l-[#0096c7]' }} flex items-center justify-between">
            <div>
                <p class="text-[10px] uppercase font-extrabold tracking-widest text-subtext">Pesan Masuk</p>
                <p class="font-display text-4xl font-extrabold text-heading mt-1">{{ \App\Models\ContactMessage::count() }}</p>
                @if($unreadMessagesCount > 0)
                    <span class="text-[10px] font-mono text-rose-500 font-bold mt-1 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {{ $unreadMessagesCount }} Belum Dibaca
                    </span>
                @else
                    <span class="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold mt-1 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        Semua Dibaca
                    </span>
                @endif
            </div>
            <div class="w-12 h-12 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center text-[#0096c7]">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
        </div>
    </div>

    <!-- Quick Action Bar & Restore Backup Form -->
    <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex flex-wrap gap-3">
            <a href="{{ route('admin.portfolios.create') }}" class="flex items-center gap-1.5 px-5 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Tambah Portofolio Baru</span>
            </a>
            <a href="{{ route('admin.tools.create') }}" class="flex items-center gap-1.5 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-heading text-xs uppercase font-extrabold tracking-wider hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Tambah Tool Baru</span>
            </a>
            <a href="{{ route('admin.messages.index') }}" class="flex items-center gap-1.5 px-5 py-2.5 border border-[#0096c7] text-[#0096c7] text-xs uppercase font-extrabold tracking-wider hover:bg-[#0096c7] hover:text-white transition-all">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>Kotak Masuk Pesan ({{ $unreadMessagesCount }})</span>
            </a>
        </div>

        <!-- Backup Import/Restore Form -->
        <div x-data="{ openRestoreModal: false }">
            <div class="flex gap-2">
                <a href="{{ route('admin.backup.export') }}" class="flex items-center gap-1.5 px-4 py-2 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    <span>Backup Data JSON</span>
                </a>
                <button @click="openRestoreModal = true" class="flex items-center gap-1.5 px-4 py-2 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                    <span>Restore Backup JSON</span>
                </button>
            </div>

            <!-- Modal Restore -->
            <div x-show="openRestoreModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
                <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-md space-y-6 shadow-2xl">
                    <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                        <h3 class="font-display text-xl font-bold uppercase text-heading">Restore Backup CMS JSON</h3>
                        <button @click="openRestoreModal = false" class="text-subtext hover:text-heading p-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                    </div>

                    <form method="POST" action="{{ route('admin.backup.preview') }}" enctype="multipart/form-data" class="space-y-4">
                        @csrf
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Upload File JSON Backup * (Max 5MB)</label>
                            <input type="file" name="backup_file" accept=".json,application/json,text/plain" required class="file-input file-input-bordered w-full input-theme rounded-none text-xs">
                        </div>

                        <div class="pt-4 flex justify-end gap-3">
                            <button type="button" @click="openRestoreModal = false" class="px-5 py-2 text-xs uppercase font-extrabold tracking-wider text-subtext">Batal</button>
                            <button type="submit" class="px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider">Lanjutkan ke Verifikasi →</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Items Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Latest Portfolios -->
        <div class="editorial-card p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 class="font-display text-xl font-bold uppercase text-heading">Portofolio Terbaru</h3>
                <a href="{{ route('admin.portfolios.index') }}" class="text-xs uppercase font-extrabold tracking-widest text-[#0096c7] hover:underline">Kelola Semua →</a>
            </div>

            <div class="space-y-3">
                @forelse($stats['latest_portfolios'] as $item)
                    <div class="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                        <div>
                            <p class="font-bold text-heading text-xs uppercase tracking-wider">{{ $item->title }}</p>
                            <p class="text-[10px] text-subtext uppercase font-semibold">{{ $item->category }}</p>
                        </div>
                        <span class="px-2.5 py-1 text-[10px] uppercase font-mono font-bold border border-[#0096c7] text-[#0096c7]">
                            {{ $item->is_featured ? 'Featured' : 'Standard' }}
                        </span>
                    </div>
                @empty
                    <p class="text-xs text-subtext">Belum ada portofolio.</p>
                @endforelse
            </div>
        </div>

        <!-- Latest Tools Hub with Clicks Counter -->
        <div class="editorial-card p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <h3 class="font-display text-xl font-bold uppercase text-heading">Tools & Analytics Klik</h3>
                <a href="{{ route('admin.tools.index') }}" class="text-xs uppercase font-extrabold tracking-widest text-[#0096c7] hover:underline">Kelola Semua →</a>
            </div>

            <div class="space-y-3">
                @forelse($stats['latest_tools'] as $item)
                    <div class="flex items-center justify-between p-3 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                        <div>
                            <p class="font-bold text-heading text-xs uppercase tracking-wider">{{ $item->name }}</p>
                            <p class="text-[10px] text-subtext uppercase font-semibold">{{ $item->category }}</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-[10px] font-mono font-bold text-[#0096c7] bg-[#0096c7]/10 px-2 py-0.5 border border-[#0096c7]/30 flex items-center gap-1">
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                {{ $item->clicks_count }} Klik
                            </span>
                            <a href="{{ route('tools.launch', $item) }}" target="_blank" class="text-[10px] uppercase font-mono font-bold text-subtext hover:text-heading flex items-center gap-0.5">
                                <span>Buka</span>
                                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                            </a>
                        </div>
                    </div>
                @empty
                    <p class="text-xs text-subtext">Belum ada tools.</p>
                @endforelse
            </div>
        </div>

    </div>

</x-layouts.admin>
