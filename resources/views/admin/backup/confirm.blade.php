<x-layouts.admin title="Konfirmasi Import Backup Data">
    <x-slot name="header">Konfirmasi Import Backup Data</x-slot>

    <div class="max-w-2xl mx-auto space-y-6">
        
        <div class="flex items-center justify-between">
            <a href="{{ route('admin.settings.index') }}" class="text-xs uppercase font-extrabold text-[#0096c7] hover:underline flex items-center gap-1">
                <span>← Batal & Kembali ke Pengaturan</span>
            </a>
        </div>

        <div class="bg-white dark:bg-[#131924] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div class="border-b border-amber-500/30 pb-4">
                <span class="px-2.5 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold uppercase inline-flex items-center gap-1">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    <span>Konfirmasi Prosedur Import Destruktif</span>
                </span>
                <h2 class="font-display text-2xl font-bold uppercase text-heading mt-2">
                    Verifikasi Keamanan Import
                </h2>
                <p class="text-xs text-subtext leading-relaxed mt-1">
                    File backup telah divalidasi dan siap di-sinkronisasikan ke dalam database. Harap periksa ringkasan jumlah data berikut sebelum melanjutkan.
                </p>
            </div>

            <!-- Summary Table -->
            <div class="border border-slate-200 dark:border-slate-800 divide-y divide-slate-200 dark:divide-slate-800 text-xs font-mono">
                <div class="p-3 bg-slate-100 dark:bg-slate-800/60 font-bold uppercase text-heading">
                    Ringkasan Isi Berkas Backup:
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                        <span>Item Portofolio</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['portfolios'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                        <span>Item Produk Jualan</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['products'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span>Jasa & Layanan</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['services'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm2 7a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
                        <span>Rekam Tools Hub</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['tools'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745zM16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01"/></svg>
                        <span>Rekam Karir</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['experiences'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                        <span>Sertifikasi Teknikal</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['certifications'] }} record</span>
                </div>
                <div class="p-3 flex justify-between items-center">
                    <span class="text-subtext flex items-center gap-2">
                        <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>Pengaturan Landing Page</span>
                    </span>
                    <span class="font-bold text-heading">{{ $summary['settings'] }} record</span>
                </div>
            </div>

            <!-- Re-authentication Form -->
            <form method="POST" action="{{ route('admin.backup.import') }}" class="space-y-4 pt-2">
                @csrf

                <div>
                    <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">
                        Masukkan Password Admin Anda untuk Konfirmasi *
                    </label>
                    <input type="password" name="password" required placeholder="Password Akun Admin" class="w-full px-4 py-3 input-theme text-xs font-mono">
                    @error('password')
                        <span class="text-[10px] text-rose-500 mt-1 block font-mono font-bold">{{ $message }}</span>
                    @enderror
                </div>

                <div class="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
                    <a href="{{ route('admin.settings.index') }}" class="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase">
                        Batal
                    </a>
                    <button type="submit" class="px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold uppercase tracking-widest transition-all shadow-md">
                        Konfirmasi & Proses Import Database →
                    </button>
                </div>
            </form>

        </div>

    </div>
</x-layouts.admin>
