<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="dark" class="dark scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $settings['site_name'] ?? 'Ady Budisantika — Portofolio & Direktori Tools' }}</title>
    <meta name="description" content="{{ $settings['seo_meta_desc'] ?? 'Portofolio & Tools Hub karya Ady Budisantika. Pengembang Software Full Stack spesialis Laravel, Modern JS, dan Arsitektur Cloud.' }}">
    <meta name="keywords" content="{{ $settings['seo_keywords'] ?? 'Ady Budisantika, Laravel Developer, Full Stack Engineer, Web App, Software Architect, Tools Hub' }}">
    <meta name="author" content="Ady Budisantika">

    <!-- Open Graph / Facebook / WhatsApp Meta Tags -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="{{ $settings['site_name'] ?? 'Ady Budisantika — Portofolio & Tools Hub' }}">
    <meta property="og:description" content="{{ $settings['seo_meta_desc'] ?? 'Portofolio & Tools Hub resmi karya Ady Budisantika.' }}">
    <meta property="og:image" content="{{ asset($settings['hero_avatar'] ?? 'uploads/profile.png') }}">

    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="{{ url()->current() }}">
    <meta name="twitter:title" content="{{ $settings['site_name'] ?? 'Ady Budisantika' }}">
    <meta name="twitter:description" content="{{ $settings['seo_meta_desc'] ?? 'Portofolio & Tools Hub karya Ady Budisantika.' }}">
    <meta name="twitter:image" content="{{ asset($settings['hero_avatar'] ?? 'uploads/profile.png') }}">

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

    <!-- Three.js CDN fallback for 3D element -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

    <!-- Cloudflare Turnstile Captcha Script -->
    @if(config('services.turnstile.enabled'))
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
    @endif

    <!-- Vite Assets -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <style>[x-cloak] { display: none !important; }</style>
</head>
<body class="bg-[#f7f8f9] dark:bg-[#0b0f17] text-[#1a1d20] dark:text-[#e5e7eb] antialiased selection:bg-[#0096c7] selection:text-white font-sans transition-colors duration-300 relative"
      x-data="{ 
          scrollProgress: 0,
          mobileMenuOpen: false,
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
      }"
      @scroll.window="scrollProgress = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100">
    
    <!-- Top Scroll Progress Indicator Bar -->
    <div class="fixed top-0 left-0 right-0 h-1 bg-[#0096c7] z-[100] transition-all duration-150 shadow-md"
         :style="'width: ' + scrollProgress + '%'"></div>

    <!-- Minimalist Sticky Header -->
    <header class="sticky top-0 z-50 editorial-nav transition-all duration-300 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex items-center justify-between">
                
                <!-- Left: Monogram Logo (A / B) -->
                <a href="{{ route('home') }}" class="flex items-center gap-2 group">
                    <div class="font-extrabold text-xl tracking-tight text-heading flex items-center gap-1">
                        <span class="font-display text-2xl tracking-widest text-[#0096c7]">A</span>
                        <span class="text-xs text-subtext font-light">/</span>
                        <span class="font-display text-2xl tracking-widest text-heading">B</span>
                    </div>
                </a>

                <!-- Right Nav & Actions (Desktop) -->
                <div class="flex items-center gap-6">
                    <nav class="hidden lg:flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-subtext">
                        <a href="{{ route('services.index') }}" class="hover:text-[#0096c7] transition-colors flex items-center gap-1 {{ request()->routeIs('services.index') ? 'text-[#0096c7]' : '' }}">
                            <span>Jasa</span>
                        </a>
                        <a href="{{ route('home') }}#portfolio" class="hover:text-[#0096c7] transition-colors">Portofolio</a>
                        <a href="{{ route('products.index') }}" class="hover:text-[#0096c7] transition-colors flex items-center gap-1 {{ request()->routeIs('products.index') ? 'text-[#0096c7]' : '' }}">
                            <span>Produk</span>
                        </a>
                        <a href="{{ route('tools.index') }}" class="hover:text-[#0096c7] transition-colors flex items-center gap-1 {{ request()->routeIs('tools.index') ? 'text-[#0096c7]' : '' }}">
                            <span>Tools Hub</span>
                        </a>
                        <a href="{{ route('home') }}#contact" class="hover:text-[#0096c7] transition-colors">Kontak</a>
                    </nav>

                    @if(!empty($settings['cv_file_path']) && file_exists(public_path($settings['cv_file_path'])))
                        <a href="{{ route('cv.download') }}" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0096c7]/10 border border-[#0096c7]/40 text-[#0096c7] text-[11px] font-extrabold uppercase tracking-wider hover:bg-[#0096c7] hover:text-white transition-all">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                            <span>UNDUH CV</span>
                        </a>
                    @endif

                    <!-- Theme Switcher -->
                    <button @click="toggleTheme()" type="button" class="p-1.5 rounded-lg border border-slate-300 dark:border-slate-800 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all flex items-center gap-1" title="Mode Terang / Gelap">
                        <span x-show="theme === 'dark'" class="text-amber-400 flex items-center gap-1">
                            <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                            TERANG
                        </span>
                        <span x-show="theme === 'light'" class="text-slate-800 flex items-center gap-1">
                            <svg class="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
                            GELAP
                        </span>
                    </button>

                    @auth
                        <a href="{{ route('admin.dashboard') }}" class="hidden sm:inline-block text-xs font-bold text-[#0096c7] hover:underline">CMS ADMIN</a>
                    @endauth

                    <!-- Mobile Hamburger Button -->
                    <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" class="lg:hidden p-2 border border-slate-300 dark:border-slate-800 text-heading hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path x-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            <path x-show="mobileMenuOpen" x-cloak stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu Dropdown Drawer -->
            <div x-show="mobileMenuOpen" x-cloak x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-2" class="lg:hidden pt-4 pb-2 border-t border-slate-200 dark:border-slate-800 mt-4 space-y-3 text-xs uppercase tracking-widest font-bold">
                <a @click="mobileMenuOpen = false" href="{{ route('services.index') }}" class="block py-2 text-[#0096c7]">Jasa & Layanan</a>
                <a @click="mobileMenuOpen = false" href="{{ route('home') }}#portfolio" class="block py-2 text-heading hover:text-[#0096c7]">Portofolio</a>
                <a @click="mobileMenuOpen = false" href="{{ route('products.index') }}" class="block py-2 text-[#0096c7]">Produk Jualan</a>
                <a @click="mobileMenuOpen = false" href="{{ route('tools.index') }}" class="block py-2 text-[#0096c7]">Tools Hub (Gratis)</a>
                <a @click="mobileMenuOpen = false" href="{{ route('home') }}#contact" class="block py-2 text-heading hover:text-[#0096c7]">Kontak</a>
                
                @if(!empty($settings['cv_file_path']) && file_exists(public_path($settings['cv_file_path'])))
                    <div class="pt-2">
                        <a href="{{ route('cv.download') }}" class="flex items-center justify-center gap-1.5 text-center py-2.5 bg-[#0096c7] text-white text-xs font-extrabold">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                            <span>UNDUH CV / RESUME (PDF)</span>
                        </a>
                    </div>
                @endif

                @auth
                    <div class="pt-2 border-t border-slate-200 dark:border-slate-800">
                        <a href="{{ route('admin.dashboard') }}" class="block py-2 text-[#0096c7]">CMS Admin Dashboard →</a>
                    </div>
                @endauth
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-10">
        {{ $slot }}
    </main>

    <!-- Editorial Minimalist Footer -->
    <footer class="section-banner mt-24 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-300 dark:border-slate-800 pb-8 mb-8">
                <div>
                    <span class="font-display text-3xl tracking-widest text-heading block">ADY BUDISANTIKA</span>
                    <span class="text-xs uppercase tracking-widest text-[#0096c7] font-semibold">Pengembang Software Full Stack & Arsitek Sistem</span>
                </div>

                <div class="flex flex-wrap gap-6 text-xs uppercase tracking-widest font-bold text-subtext">
                    <a href="{{ route('tools.index') }}" class="hover:text-[#0096c7] transition-colors flex items-center gap-1 {{ request()->routeIs('tools.index') ? 'text-[#0096c7]' : '' }}">
                        <span>Tools Hub</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                    @if(!empty($settings['github_url']))
                        <a href="{{ $settings['github_url'] }}" target="_blank" class="hover:text-[#0096c7] transition-colors flex items-center gap-1">
                            <span>GitHub</span>
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                    @endif
                    @if(!empty($settings['linkedin_url']))
                        <a href="{{ $settings['linkedin_url'] }}" target="_blank" class="hover:text-[#0096c7] transition-colors flex items-center gap-1">
                            <span>LinkedIn</span>
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                        </a>
                    @endif
                    @if(!empty($settings['email']))
                        <a href="mailto:{{ $settings['email'] }}" class="hover:text-[#0096c7] transition-colors flex items-center gap-1">
                            <span>Email</span>
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </a>
                    @endif
                </div>
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center text-xs text-subtext">
                <p>&copy; {{ date('Y') }} Ady Budisantika. Hak Cipta Dilindungi.</p>
                <p class="mt-2 sm:mt-0 font-mono">PORTOFOLIO 2026</p>
            </div>
        </div>
    </footer>
</body>
</html>
