<x-layouts.admin title="Detail Pesan" header="Detail Pesan Masuk">
    
    <div class="max-w-3xl mx-auto">
        <div class="mb-6 flex items-center justify-between">
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Detail Pesan Masuk</h2>
            <a href="{{ route('admin.messages.index') }}" class="text-xs uppercase font-extrabold tracking-wider text-subtext hover:text-heading">← Kembali ke Kotak Masuk</a>
        </div>

        <div class="editorial-card p-6 sm:p-8 space-y-6">
            <!-- Header detail -->
            <div class="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
                <div class="flex flex-wrap justify-between items-start gap-4">
                    <div>
                        <span class="text-[10px] font-extrabold uppercase tracking-widest text-[#0096c7] block">PENGIRIM</span>
                        <h3 class="font-extrabold text-lg text-heading">{{ $message->name }}</h3>
                        <a href="mailto:{{ $message->email }}" class="text-xs font-mono text-[#0096c7] hover:underline">{{ $message->email }}</a>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-mono text-subtext block">{{ $message->created_at->format('d M Y, H:i') }} WIB</span>
                        <span class="px-2.5 py-0.5 border border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono uppercase font-bold mt-1 inline-block">
                            Sudah Dibaca
                        </span>
                    </div>
                </div>

                @if($message->subject)
                    <div class="pt-2">
                        <span class="text-[10px] font-extrabold uppercase tracking-widest text-subtext block">SUBJEK</span>
                        <p class="text-xs font-bold text-heading">{{ $message->subject }}</p>
                    </div>
                @endif
            </div>

            <!-- Body Message -->
            <div class="space-y-2">
                <span class="text-[10px] font-extrabold uppercase tracking-widest text-subtext block">ISI PESAN</span>
                <div class="p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs leading-relaxed text-heading whitespace-pre-wrap font-sans">
                    {{ $message->message }}
                </div>
            </div>

            <!-- Actions -->
            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <form method="POST" action="{{ route('admin.messages.destroy', $message) }}" onsubmit="return confirm('Hapus pesan ini?')">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="px-5 py-2 border border-rose-500 text-rose-600 dark:text-rose-400 text-xs uppercase font-extrabold tracking-wider hover:bg-rose-500 hover:text-white transition-all">
                        Hapus Pesan
                    </button>
                </form>

                <a href="mailto:{{ $message->email }}?subject=Re: {{ urlencode($message->subject ?? 'Respon Portofolio Ady Budisantika') }}" class="flex items-center gap-1.5 px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">
                    <span>Balas via Email</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
            </div>
        </div>
    </div>

</x-layouts.admin>
