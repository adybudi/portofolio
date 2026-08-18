<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="dark" class="dark">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $title ?? 'Admin CMS' }} — Portofolio Ady Budisantika</title>

    <!-- Prevent Theme Flash (Default: Dark Theme) -->
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
</head>
<body class="bg-[#f7f8f9] dark:bg-[#0b0f17] text-[#1a1d20] dark:text-[#e5e7eb] antialiased font-sans min-h-screen selection:bg-[#0096c7] selection:text-white transition-colors duration-300">
    
    @php
        $unreadMessagesCount = \App\Models\ContactMessage::where('is_read', false)->count();
    @endphp

    <div class="min-h-screen flex w-full">
        
        <!-- Fixed Full-Height Sidebar -->
        <aside class="w-64 sm:w-72 bg-white dark:bg-[#131924] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 h-screen sticky top-0 z-40 shadow-sm overflow-y-auto">
            <div>
                <!-- Brand Header -->
                <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#0096c7] text-white font-extrabold flex items-center justify-center font-display text-xl rounded-none shadow-sm">
                        AB
                    </div>
                    <div>
                        <h2 class="font-extrabold text-heading text-base tracking-tight leading-none">Admin CMS</h2>
                        <span class="text-[10px] text-[#0096c7] uppercase font-bold tracking-widest mt-1 block">PORTOFOLIO HUB</span>
                    </div>
                </div>

                <!-- Navigation Links -->
                <nav class="p-4 space-y-1 text-xs font-extrabold uppercase tracking-wider">
                    <a href="{{ route('admin.dashboard') }}" 
                       class="flex items-center justify-between px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.dashboard') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <div class="flex items-center gap-3">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                            <span>DASHBOARD</span>
                        </div>
                    </a>

                    <a href="{{ route('admin.messages.index') }}" 
                       class="flex items-center justify-between px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.messages.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <div class="flex items-center gap-3">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                            <span>PESAN MASUK</span>
                        </div>
                        @if($unreadMessagesCount > 0)
                            <span class="px-2 py-0.5 bg-rose-500 text-white text-[10px] font-mono font-bold rounded-full">
                                {{ $unreadMessagesCount }}
                            </span>
                        @endif
                    </a>

                    <a href="{{ route('admin.portfolios.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.portfolios.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
                        <span>PORTOFOLIO</span>
                    </a>

                    <a href="{{ route('admin.products.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.products.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                        <span>PRODUK JUALAN</span>
                    </a>

                    <a href="{{ route('admin.services.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.services.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span>JASA</span>
                    </a>

                    <a href="{{ route('admin.experiences.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.experiences.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745zM16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01"/></svg>
                        <span>REKAM KARIR</span>
                    </a>

                    <a href="{{ route('admin.certifications.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.certifications.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                        <span>SERTIFIKASI</span>
                    </a>

                    <a href="{{ route('admin.tools.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.tools.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm2 7a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
                        <span>TOOLS HUB</span>
                    </a>

                    <a href="{{ route('admin.settings.index') }}" 
                       class="flex items-center gap-3 px-4 py-2.5 border-l-4 transition-all {{ request()->routeIs('admin.settings.*') ? 'border-[#0096c7] bg-[#f0f9ff] dark:bg-[#0096c7]/15 text-[#0096c7]' : 'border-transparent text-subtext hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-heading' }}">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>SETTINGS</span>
                    </a>
                </nav>
            </div>

            <!-- Footer info & backup quick link -->
            <div class="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <a href="{{ route('admin.backup.export') }}" class="flex items-center justify-center gap-1.5 py-2 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-[10px] font-mono font-bold uppercase hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                    <span>Backup JSON CMS</span>
                </a>
                <div class="flex items-center justify-between text-xs pt-1">
                    <span class="text-[10px] uppercase font-bold tracking-widest text-subtext">STATUS</span>
                    <span class="inline-flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        ONLINE
                    </span>
                </div>
            </div>
        </aside>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col min-w-0 min-h-screen">
            
            <!-- Sticky Top Header -->
            <header class="bg-white/95 dark:bg-[#131924]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 sm:px-8 py-4 sticky top-0 z-30 flex items-center justify-between">
                <div>
                    <span class="text-[10px] font-bold uppercase tracking-widest text-[#0096c7] block">CMS ADMIN PANEL</span>
                    <h1 class="text-lg font-extrabold text-heading tracking-tight leading-tight">
                        {{ $header ?? 'Dashboard Overview' }}
                    </h1>
                </div>

                <div class="flex items-center gap-4" x-data="{ 
                    theme: localStorage.getItem('theme') || 'dark',
                    toggleTheme() {
                        this.theme = this.theme === 'dark' ? 'light' : 'dark';
                        localStorage.setItem('theme', this.theme);
                        document.documentElement.setAttribute('data-theme', this.theme);
                        if (this.theme === 'dark') {
                            document.documentElement.classList.add('dark');
                            document.documentElement.classList.remove('light');
                        } else {
                            document.documentElement.classList.add('light');
                            document.documentElement.classList.remove('dark');
                        }
                    }
                }">
                    <!-- Theme Toggle -->
                    <button @click="toggleTheme()" type="button" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center gap-1.5" title="Toggle Light / Dark Mode">
                        <span x-show="theme === 'dark'" class="text-amber-400 flex items-center gap-1">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                            <span>TERANG</span>
                        </span>
                        <span x-show="theme === 'light'" class="text-slate-800 flex items-center gap-1">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                            <span>GELAP</span>
                        </span>
                    </button>

                    <a href="{{ route('home') }}" target="_blank" class="px-3.5 py-1.5 border border-[#0096c7] text-[#0096c7] hover:bg-[#0096c7] hover:text-white text-xs uppercase font-extrabold tracking-wider transition-all flex items-center gap-1">
                        <span>LIHAT LIVE WEB</span>
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>

                    <!-- User Profile Avatar & Logout Dropdown -->
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="w-9 h-9 bg-[#0096c7] text-white font-bold flex items-center justify-center text-xs cursor-pointer hover:opacity-90 transition-opacity">
                            AB
                        </div>
                        <ul tabindex="0" class="mt-3 z-[1] p-2 shadow-2xl menu menu-sm dropdown-content bg-white dark:bg-[#131924] border border-slate-200 dark:border-slate-800 rounded-none w-56 space-y-1 text-current">
                            <li class="px-3 py-2 text-xs font-bold border-b border-slate-200 dark:border-slate-800">
                                {{ Auth::user()->name }}
                                <span class="block font-normal text-[10px] text-subtext lowercase mt-0.5">{{ Auth::user()->email }}</span>
                            </li>
                            <li>
                                <a href="{{ route('admin.messages.index') }}" class="hover:text-[#0096c7] text-xs font-bold uppercase">Pesan Masuk ({{ $unreadMessagesCount }})</a>
                            </li>
                            <li>
                                <a href="{{ route('admin.settings.index') }}" class="hover:text-[#0096c7] text-xs font-bold uppercase">Pengaturan Profil</a>
                            </li>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <li>
                                    <button type="submit" class="text-rose-600 dark:text-rose-400 hover:text-rose-700 text-xs font-bold uppercase">Keluar / Logout</button>
                                </li>
                            </form>
                        </ul>
                    </div>
                </div>
            </header>

            <!-- Flash Alert -->
            @if (session('success'))
                <div class="max-w-7xl mx-auto px-6 sm:px-8 mt-6 w-full">
                    <div class="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                        <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                        <span>{{ session('success') }}</span>
                    </div>
                </div>
            @endif

            @if ($errors->any())
                <div class="max-w-7xl mx-auto px-6 sm:px-8 mt-6 w-full">
                    <div class="p-4 bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs font-semibold space-y-1">
                        @foreach ($errors->all() as $error)
                            <p class="flex items-center gap-1.5">
                                <svg class="w-3.5 h-3.5 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                                <span>{{ $error }}</span>
                            </p>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Main Page View -->
            <main class="p-6 sm:p-8 max-w-7xl mx-auto w-full flex-1">
                {{ $slot }}
            </main>
        </div>

    </div>

</body>
</html>
