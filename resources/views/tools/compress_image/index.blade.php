<x-layouts.app-public :settings="$settings">
    @push('scripts')
        @vite('resources/js/tools/index.js')
    @endpush

    <div class="py-16 sm:py-24 relative" data-tool="compress-image">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10 space-y-4">
                <a href="{{ route('tools.index') }}" class="inline-flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7] hover:underline">
                    <span>&larr;</span>
                    <span>Semua Tools</span>
                </a>

                <div class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7] dark:text-[#48cae4]">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"/></svg>
                    <span>Image Tool</span>
                </div>

                <h1 class="font-display text-5xl sm:text-6xl font-extrabold text-heading uppercase tracking-tight leading-none">
                    IMAGE COMPRESSOR
                </h1>
                <div class="accent-line"></div>
                <p class="text-subtext text-sm leading-relaxed max-w-2xl">
                    Kompres dan perkecil ukuran gambar JPG, PNG, atau WebP. Atur kualitas dan dimensi maksimum, lalu unduh hasilnya. Semua proses berjalan di browser kamu.
                </p>
            </div>

            <div class="editorial-card p-6 sm:p-8 space-y-8">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
                    <div class="space-y-2">
                        <label for="ci-quality" class="block text-[10px] font-bold uppercase tracking-widest text-subtext">
                            Kualitas: <span id="ci-quality-value" class="text-[#0096c7]">80%</span>
                        </label>
                        <input id="ci-quality" type="range" min="10" max="100" step="5" value="80"
                               class="w-full accent-[#0096c7]">
                        <p class="text-[10px] text-subtext">Berlaku untuk JPG/WebP.</p>
                    </div>

                    <div class="space-y-2">
                        <label for="ci-max-dimension" class="block text-[10px] font-bold uppercase tracking-widest text-subtext">
                            Dimensi maks (px)
                        </label>
                        <input id="ci-max-dimension" type="number" min="0" max="10000" step="1" value="2560" inputmode="numeric"
                               class="w-full border border-slate-300 bg-white px-3 py-2 text-sm text-heading focus:border-[#0096c7] focus:outline-none dark:border-slate-700 dark:bg-[#131924]">
                        <p class="text-[10px] text-subtext">0 = pertahankan ukuran asli.</p>
                    </div>

                    <div class="space-y-2">
                        <label for="ci-format" class="block text-[10px] font-bold uppercase tracking-widest text-subtext">
                            Format output
                        </label>
                        <select id="ci-format"
                                class="w-full border border-slate-300 bg-white px-3 py-2 text-sm text-heading focus:border-[#0096c7] focus:outline-none dark:border-slate-700 dark:bg-[#131924]">
                            <option value="jpeg">JPG</option>
                            <option value="webp">WebP</option>
                            <option value="png">PNG</option>
                        </select>
                        <p class="text-[10px] text-subtext">PNG transparan: pilih PNG.</p>
                    </div>
                </div>

                <div id="ci-dropzone"
                     role="button"
                     tabindex="0"
                     aria-label="Pilih gambar untuk dikompres"
                     class="tool-dropzone group flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-[#0f1520]/60 px-6 py-12 text-center cursor-pointer transition-colors hover:border-[#0096c7] focus:outline-none focus:border-[#0096c7]">
                    <svg class="w-10 h-10 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"/></svg>
                    <p class="text-sm font-bold uppercase tracking-wider text-heading">Tarik &amp; lepas gambar di sini</p>
                    <p class="text-[11px] text-subtext">JPG, PNG, atau WebP. Maks 30 gambar, 25 MB per file, total 300 MB.</p>
                    <input id="ci-input" type="file" accept="image/jpeg,image/png,image/webp" multiple class="sr-only">
                </div>

                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <p id="ci-summary" class="text-[11px] font-mono uppercase tracking-wider text-subtext">Belum ada gambar.</p>
                    <div class="flex flex-wrap items-center gap-2">
                        <button id="ci-clear" type="button"
                                class="border border-slate-300 dark:border-slate-700 px-4 py-3 text-[10px] font-extrabold uppercase tracking-widest text-subtext transition-colors hover:border-[#0096c7] hover:text-[#0096c7] disabled:cursor-not-allowed disabled:opacity-40">
                            Bersihkan
                        </button>
                        <button id="ci-download-all" type="button"
                                class="border border-[#10b981] px-4 py-3 text-[10px] font-extrabold uppercase tracking-widest text-[#10b981] transition-colors hover:bg-[#10b981] hover:text-white disabled:cursor-not-allowed disabled:opacity-40">
                            Unduh ZIP
                        </button>
                        <button id="ci-submit" type="button"
                                class="bg-[#0096c7] px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white transition-colors hover:bg-[#0077b6] disabled:cursor-not-allowed disabled:opacity-40">
                            Kompres semua
                        </button>
                    </div>
                </div>

                <p id="ci-status" role="status" aria-live="polite" class="text-xs text-subtext"></p>

                <ul id="ci-list" class="space-y-2"></ul>

                <p id="ci-empty" class="py-10 text-center text-[11px] uppercase tracking-widest text-subtext">
                    Belum ada gambar yang dipilih.
                </p>
            </div>

            <div class="mt-8 flex items-start gap-3 border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-[#0f1520]/60 p-4">
                <svg class="w-5 h-5 shrink-0 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                <p class="text-[11px] leading-relaxed text-subtext">
                    <strong class="text-heading">Privasi:</strong> gambar tidak pernah dikirim ke server. Kompresi diproses sepenuhnya di browser kamu.
                </p>
            </div>
        </div>
    </div>
</x-layouts.app-public>
