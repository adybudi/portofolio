<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="dark" class="dark scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $title ?? 'Situs Sedang Dalam Pemeliharaan' }} — {{ $site_name ?? 'Ady Budisantika' }}</title>
    <meta name="robots" content="noindex, nofollow">

    <!-- Prevent Theme Flash -->
    <script>
        (function() {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            document.documentElement.setAttribute('data-theme', savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        })();
    </script>

    <!-- Fonts: Bebas Neue, Syne, Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap" rel="stylesheet">

    <!-- Vite Assets -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>[x-cloak] { display: none !important; }</style>
</head>
<body class="bg-[#f7f8f9] dark:bg-[#0b0f17] text-[#1a1d20] dark:text-[#e5e7eb] antialiased selection:bg-[#0096c7] selection:text-white font-sans min-h-screen flex flex-col justify-between transition-colors duration-300 relative">

    <!-- Background Accent Glows -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#0096c7]/5 dark:bg-[#0096c7]/10 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-[#48cae4]/5 dark:bg-[#48cae4]/10 blur-3xl"></div>
    </div>

    <!-- Header Navigation Bar -->
    <header class="w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-[#0b0f17]/70 backdrop-blur-md sticky top-0 z-40 py-4 px-4 sm:px-8">
        <div class="max-w-5xl mx-auto flex items-center justify-between">
            <!-- Monogram Logo -->
            <a href="{{ route('home') }}" class="flex items-center gap-2 group">
                <span class="font-display text-2xl tracking-widest text-[#0096c7]">A</span>
                <span class="text-xs text-subtext font-light">/</span>
                <span class="font-display text-2xl tracking-widest text-heading">B</span>
            </a>

            <!-- Status Indicator -->
            <div class="flex items-center gap-3">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Maintenance Active</span>
                </span>
            </div>
        </div>
    </header>

    <!-- Main Content Container -->
    <main class="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div class="max-w-2xl w-full editorial-card bg-white dark:bg-[#131924] p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 text-center relative overflow-hidden">
            
            <!-- Decorative Corner Accent -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-[#0096c7]/5 dark:bg-[#0096c7]/10 -mr-12 -mt-12 rounded-full blur-xl pointer-events-none"></div>

            <!-- Maintenance Icon Graphic -->
            <div class="flex justify-center">
                <div class="w-16 h-16 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center text-[#0096c7]">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                </div>
            </div>

            <!-- Header Titles -->
            <div class="space-y-3">
                <div class="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#0096c7]">
                    [ HTTP 503 • SERVICE UNDER MAINTENANCE ]
                </div>
                <h1 class="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-heading leading-tight">
                    {{ $title ?? 'Situs Sedang Dalam Pemeliharaan' }}
                </h1>
                <div class="w-16 h-1 bg-[#0096c7] mx-auto"></div>
            </div>

            <!-- Description Message -->
            <p class="text-sm sm:text-base text-subtext leading-relaxed max-w-lg mx-auto font-normal">
                {{ $message ?? 'Kami sedang melakukan pembaruan berkala dan pengoptimalan sistem guna memberikan pengalaman terbaik. Layanan akan segera kembali online dalam waktu dekat.' }}
            </p>

            <!-- Estimation Box if Provided -->
            @if(!empty($until))
                <div class="inline-flex items-center gap-2.5 px-5 py-2.5 bg-slate-100 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-subtext text-xs font-mono">
                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Estimasi Selesai: <strong class="text-heading">{{ $until }}</strong></span>
                </div>
            @endif

            <!-- Contact & Action Buttons -->
            <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button onclick="window.location.reload()" class="px-6 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-widest transition-all shadow-md flex items-center gap-2">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                    <span>Coba Muat Ulang</span>
                </button>

                @if(!empty($email))
                    <a href="mailto:{{ $email }}" class="px-6 py-3 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs uppercase font-extrabold tracking-widest transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                        Hubungi via Email
                    </a>
                @endif
            </div>

        </div>
    </main>

    <!-- Footer with Admin Login Link -->
    <footer class="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-[#0b0f17]/50 backdrop-blur-sm py-4 px-4 sm:px-8 text-center text-xs text-subtext">
        <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
                &copy; {{ date('Y') }} {{ $site_name ?? 'Ady Budisantika' }}. All rights reserved.
            </div>
            <div class="flex items-center gap-4">
                <a href="{{ route('login') }}" class="text-[11px] font-mono text-subtext hover:text-[#0096c7] transition-colors underline decoration-slate-400 dark:decoration-slate-700">
                    [ Akses Admin CMS ]
                </a>
            </div>
        </div>
    </footer>

</body>
</html>
