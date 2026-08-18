<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" data-theme="light" class="light scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ $title ?? 'Authentication' }} — Ady Budisantika</title>
    <!-- Prevent Theme Flash -->
    <script>
        (function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
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
<body class="bg-[#f7f8f9] dark:bg-[#0b0f17] text-[#1a1d20] dark:text-[#e5e7eb] antialiased selection:bg-[#0096c7] selection:text-white font-sans min-h-screen transition-colors duration-300">

    <!-- Background Accent -->
    <div class="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#0096c7]/5 dark:bg-[#0096c7]/10 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-[#48cae4]/5 dark:bg-[#48cae4]/10 blur-3xl"></div>
    </div>

    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 px-4">
        <!-- Monogram Logo -->
        <div class="mb-8">
            <a href="{{ route('home') }}" class="flex items-center gap-2 group">
                <span class="font-display text-3xl tracking-widest text-[#0096c7]">A</span>
                <span class="text-sm text-subtext font-light">/</span>
                <span class="font-display text-3xl tracking-widest text-heading">B</span>
            </a>
        </div>

        <!-- Auth Card -->
        <div class="editorial-card w-full sm:max-w-md p-6 sm:p-10">
            {{ $slot }}
        </div>

        <!-- Footer -->
        <p class="mt-8 text-[10px] uppercase font-bold tracking-[0.25em] text-subtext text-center">
            &copy; {{ date('Y') }} Ady Budisantika
        </p>
    </div>
</body>
</html>
