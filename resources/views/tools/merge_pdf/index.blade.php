<x-layouts.app-public :settings="$settings">
    @push('scripts')
        @vite('resources/js/tools/index.js')
    @endpush

    <div class="py-16 sm:py-24 relative" data-tool="merge-pdf">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10 space-y-4">
                <a href="{{ route('tools.index') }}" class="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7] hover:underline">
                    <span>&larr;</span>
                    <span>Semua Tools</span>
                </a>

                <div class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7] dark:text-[#48cae4]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6M9 8h6m-9 9V5a2 2 0 012-2h8l4 4v14a2 2 0 01-2 2H6a2 2 0 01-2-2z"/></svg>
                    <span>PDF Tool</span>
                </div>

                <h1 class="font-display text-5xl sm:text-6xl font-extrabold text-heading uppercase tracking-tight leading-none">
                    MERGE PDF
                </h1>
                <div class="accent-line"></div>
                <p class="text-subtext text-sm leading-relaxed max-w-2xl">
                    Gabungkan beberapa file PDF menjadi satu dokumen. Susun urutannya, lalu unduh hasilnya. Semua proses berjalan di browser kamu.
                </p>
            </div>

            <div class="editorial-card p-6 sm:p-8 space-y-6">
                <div id="merge-pdf-dropzone"
                     role="button"
                     tabindex="0"
                     aria-label="Pilih file PDF untuk digabungkan"
                     class="tool-dropzone group flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-[#0f1520]/60 px-6 py-12 text-center cursor-pointer transition-colors hover:border-[#0096c7] focus:outline-none focus:border-[#0096c7]">
                    <svg class="w-10 h-10 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                    <p class="text-sm font-bold uppercase tracking-wider text-heading">Tarik &amp; lepas file PDF di sini</p>
                    <p class="text-[11px] text-subtext">atau klik untuk memilih. Maks 50 file, 100 MB per file, total 250 MB.</p>
                    <input id="merge-pdf-input" type="file" accept="application/pdf,.pdf" multiple class="sr-only">
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p id="merge-pdf-summary" class="text-[11px] font-mono uppercase tracking-wider text-subtext">Belum ada file.</p>
                    <div class="flex items-center gap-2">
                        <button id="merge-pdf-clear" type="button"
                                class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-[10px] font-extrabold uppercase tracking-widest text-subtext transition-colors hover:border-[#0096c7] hover:text-[#0096c7] disabled:cursor-not-allowed disabled:opacity-40">
                            Bersihkan
                        </button>
                        <button id="merge-pdf-submit" type="button"
                                class="bg-[#0096c7] px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-[#0077b6] disabled:cursor-not-allowed disabled:opacity-40">
                            Gabungkan PDF
                        </button>
                    </div>
                </div>

                <p id="merge-pdf-status" role="status" aria-live="polite" class="text-xs text-subtext"></p>

                <ul id="merge-pdf-list" class="space-y-2"></ul>

                <p id="merge-pdf-empty" class="py-10 text-center text-[11px] uppercase tracking-widest text-subtext">
                    Belum ada file PDF yang dipilih.
                </p>

                <div id="merge-pdf-result" class="hidden border border-[#10b981]/40 bg-[#10b981]/5 p-4 space-y-3">
                    <p class="text-xs font-bold uppercase tracking-wider text-heading">PDF berhasil digabungkan</p>
                    <p id="merge-pdf-result-meta" class="text-[11px] font-mono text-subtext"></p>
                    <a id="merge-pdf-download" href="#" download
                       class="inline-flex items-center gap-2 bg-[#10b981] px-5 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-[#0d9668]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4"/></svg>
                        Unduh PDF
                    </a>
                </div>
            </div>

            <div class="mt-8 flex items-start gap-3 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-[#0f1520]/60 p-4">
                <svg class="w-5 h-5 shrink-0 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <p class="text-[11px] leading-relaxed text-subtext">
                    <strong class="text-heading">Privasi:</strong> file PDF tidak pernah dikirim ke server. Penggabungan diproses sepenuhnya di browser kamu, jadi dokumen tetap privat.
                </p>
            </div>
        </div>
    </div>
</x-layouts.app-public>
