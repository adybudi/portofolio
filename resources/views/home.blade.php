<x-layouts.app-public :settings="$settings">

    <!-- Hero Section (Balanced Top Padding Gap & Auto-Play Slideshow) -->
    <section class="pt-8 sm:pt-12 pb-12 sm:pb-16 relative border-b border-slate-200 dark:border-slate-800 overflow-hidden" id="about">
        <!-- Three.js 3D Particle Constellation / Wave Field Canvas -->
        <div id="hero-3d-canvas" class="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-50"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                <!-- Left Column: Big Editorial Typography -->
                <div class="lg:col-span-7 space-y-6">
                    <div>
                        <h1 class="font-display text-5xl sm:text-7xl lg:text-7xl xl:text-[6.5rem] font-extrabold text-heading uppercase leading-[0.88] tracking-tight break-words">
                            ADY<br>BUDISANTIKA
                        </h1>
                    </div>

                    <div class="space-y-3">
                        <p class="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#0096c7] dark:text-[#48cae4]">
                            {{ $settings['hero_title'] ?? 'PENGEMBANG SOFTWARE FULL STACK & ARSITEK SISTEM' }}
                        </p>
                        <p class="text-base sm:text-lg text-subtext font-light max-w-xl leading-relaxed">
                            {{ $settings['hero_subtitle'] ?? 'Saya merancang dan membangun aplikasi web modern yang responsif, cepat, dan berkinerja tinggi berbasis Laravel & JavaScript.' }}
                        </p>
                        <div class="accent-line mt-4"></div>
                    </div>

                    <div class="pt-4 flex flex-wrap gap-4 items-center">
                        @if($settings['show_portfolio_section'])
                            <a href="#portfolio" class="px-8 py-3.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase tracking-widest font-bold rounded-none transition-all shadow-md">
                                Lihat Portofolio Proyek ↓
                            </a>
                        @endif
                        @if(!empty($settings['cv_file_path']) && file_exists(public_path($settings['cv_file_path'])))
                            <a href="{{ route('cv.download') }}" class="px-8 py-3.5 border border-[#0096c7] text-[#0096c7] hover:bg-[#0096c7] hover:text-white text-xs uppercase tracking-widest font-extrabold transition-all shadow-md flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                <span>Unduh CV / Resume (PDF)</span>
                                @if(!empty($settings['cv_download_count']))
                                    <span class="text-[10px] font-mono px-1.5 py-0.5 bg-[#0096c7]/10 rounded border border-[#0096c7]/30">({{ $settings['cv_download_count'] }})</span>
                                @endif
                            </a>
                        @endif
                        @if($settings['show_experience_section'])
                            <a href="#experience" class="px-8 py-3.5 border border-slate-400 dark:border-slate-700 text-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                Pengalaman Karir →
                            </a>
                        @endif
                    </div>
                </div>

                <!-- Right Column: Minimalist Portrait Container / Auto-Play Multi-Photo Slideshow -->
                <div class="lg:col-span-5 flex justify-center relative">
                    @if(!empty($settings['spline_embed_url']))
                        <div class="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-[#131924]">
                            <iframe src="{{ $settings['spline_embed_url'] }}" frameborder="0" width="100%" height="100%" class="w-full h-full"></iframe>
                        </div>
                    @else
                        <div class="relative w-full max-w-md aspect-[4/5] flex items-center justify-center group"
                             x-data="{
                                activeIndex: 0,
                                timer: null,
                                isHovered: false,
                                photos: {{ json_encode($settings['hero_avatars']) }},
                                duration: {{ $settings['hero_hover_duration'] }},
                                init() {
                                    this.startAutoPlay();
                                },
                                startAutoPlay() {
                                    if (this.photos.length > 1 && !this.timer) {
                                        this.timer = setInterval(() => {
                                            this.activeIndex = (this.activeIndex + 1) % this.photos.length;
                                        }, this.duration);
                                    }
                                },
                                stopAutoPlay() {
                                    if (this.timer) {
                                        clearInterval(this.timer);
                                        this.timer = null;
                                    }
                                }
                             }"
                             @mouseenter="isHovered = true"
                             @mouseleave="isHovered = false">

                            <!-- Circular Accent Shape Behind Photo -->
                            <div class="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-[#0096c7]/80 dark:bg-[#0077b6]/70 top-6 right-4 -z-0"></div>

                            <!-- Multi-Photo Gallery Slideshow Container -->
                            <div class="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-[#edeef1] dark:bg-[#131924]">
                                @foreach($settings['hero_avatars'] as $index => $photo)
                                    <img src="{{ asset($photo) }}"
                                         alt="Ady Budisantika - Foto {{ $index + 1 }}"
                                         x-show="activeIndex === {{ $index }}"
                                         x-transition:enter="transition ease-out duration-700"
                                         x-transition:enter-start="opacity-0 scale-105"
                                         x-transition:enter-end="opacity-100 scale-100"
                                         x-transition:leave="transition ease-in duration-300"
                                         x-transition:leave-start="opacity-100"
                                         x-transition:leave-end="opacity-0"
                                         class="absolute inset-0 w-full h-full object-cover transition-all duration-700" />
                                @endforeach

                                <!-- Dots Indicators (Only visible when > 1 photo) -->
                                @if(count($settings['hero_avatars']) > 1)
                                    <div class="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-1.5">
                                        @foreach($settings['hero_avatars'] as $index => $photo)
                                            <button @click="activeIndex = {{ $index }}" type="button"
                                                    :class="activeIndex === {{ $index }} ? 'w-6 bg-[#0096c7]' : 'w-2 bg-white/50'"
                                                    class="h-1.5 rounded-full transition-all duration-300"
                                                    title="Foto {{ $index + 1 }}"></button>
                                        @endforeach
                                    </div>
                                @endif
                            </div>
                        </div>
                    @endif
                </div>

            </div>
        </div>
    </section>

    <!-- Dynamic Section: Jasa / Layanan Saya -->
    @if(($settings['show_services_section'] ?? true) && isset($services) && count($services) > 0)
        <section id="services" class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <!-- Left Sidebar Header -->
                    <div class="lg:col-span-4 space-y-4">
                        <h2 class="text-xs font-bold uppercase tracking-[0.25em] text-heading">JASA & LAYANAN</h2>
                        <div class="accent-line"></div>
                        <p class="text-subtext text-sm leading-relaxed">Layanan profesional yang saya tawarkan. Kerjakan bersama saya untuk hasil terbaik.</p>
                        <a href="{{ route('services.index') }}" class="inline-flex items-center gap-2 text-[#0096c7] text-xs font-bold uppercase tracking-wider hover:underline mt-2">
                            Lihat Semua Jasa
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                        </a>
                    </div>

                    <!-- Right: Service Cards Grid -->
                    <div class="lg:col-span-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            @foreach($services->take(4) as $service)
                            <div class="border border-slate-200 dark:border-slate-800 p-5 hover:border-[#0096c7] transition-colors group relative bg-white dark:bg-[#111827]/60">
                                @if($service->image)
                                    <img src="{{ uploaded_asset($service->image) }}" alt="{{ $service->title }}" class="w-full h-36 object-cover mb-4 border border-slate-100 dark:border-slate-800">
                                @endif
                                <h3 class="font-extrabold text-heading text-sm uppercase tracking-tight group-hover:text-[#0096c7] transition-colors">{{ $service->title }}</h3>
                                @if($service->description)
                                    <p class="text-subtext text-xs mt-2 leading-relaxed line-clamp-2">{{ $service->description }}</p>
                                @endif

                                @if($service->features && count($service->features) > 0)
                                    <ul class="mt-3 space-y-1">
                                        @foreach(array_slice($service->features, 0, 3) as $feature)
                                            <li class="flex items-center gap-1.5 text-xs text-subtext">
                                                <svg class="w-3 h-3 text-[#0096c7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                                                {{ $feature }}
                                            </li>
                                        @endforeach
                                    </ul>
                                @endif

                                <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between gap-2">
                                    <div>
                                        @if($service->price)
                                            @if($service->has_discount && $service->discount_price)
                                                <span class="text-[10px] line-through text-subtext font-mono">Rp {{ number_format($service->price, 0, ',', '.') }}</span>
                                                <span class="block text-sm font-extrabold text-[#0096c7] font-mono">Rp {{ number_format($service->discount_price, 0, ',', '.') }}</span>
                                            @else
                                                <span class="text-sm font-extrabold text-heading font-mono">Rp {{ number_format($service->price, 0, ',', '.') }}</span>
                                            @endif
                                        @else
                                            <span class="text-xs text-subtext font-medium">Hubungi untuk harga</span>
                                        @endif
                                    </div>
                                    <a href="{{ route('home') }}#contact" class="px-3 py-1.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-[10px] font-bold uppercase tracking-wider transition-all shrink-0">
                                        Hubungi
                                    </a>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </section>
    @endif

    <!-- Dynamic Section: Selected Projects -->
    @if($settings['show_portfolio_section'])
        <section id="portfolio" class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800" x-data="{ selectedTab: 'Semua', selectedProject: null, isModalOpen: false }">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <!-- Left Sidebar Header -->
                    <div class="lg:col-span-4 space-y-4">
                        <h2 class="text-xs font-bold uppercase tracking-[0.25em] text-heading">
                            PORTOFOLIO PILIHAN
                        </h2>
                        <div class="accent-line"></div>
                        <p class="text-sm text-subtext leading-relaxed font-normal max-w-xs">
                            Kumpulan karya dan proyek teknikal yang mencerminkan strategi, kejelasan arsitektur, dan dampak bisnis.
                        </p>

                        <!-- Filter Tabs List (Dynamic Categories) -->
                        <div class="pt-4 space-y-2">
                            <span class="text-[10px] uppercase font-mono font-bold tracking-widest text-subtext block mb-2">FILTER KATEGORI:</span>
                            <div class="flex flex-wrap gap-2 text-[11px] font-mono font-bold uppercase">
                                <button @click="selectedTab = 'Semua'" :class="selectedTab === 'Semua' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'" class="px-3 py-1.5 border transition-all">
                                    SEMUA PROYEK
                                </button>
                                @foreach($portfolioCategories as $cat)
                                    <button @click="selectedTab = '{{ $cat }}'" :class="selectedTab === '{{ $cat }}' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'" class="px-3 py-1.5 border transition-all">
                                        {{ strtoupper($cat) }}
                                    </button>
                                @endforeach
                            </div>
                        </div>

                        <div class="pt-4">
                            <a href="{{ route('tools.index') }}" target="_blank" class="text-xs uppercase tracking-widest font-extrabold text-[#0096c7] hover:underline inline-flex items-center gap-2">
                                <span>LIHAT SEMUA TOOLS & PROYEK</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>

                    <!-- Right 3-Column Projects Grid -->
                    <div class="lg:col-span-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            @forelse($portfolios as $index => $item)
                                <div class="editorial-card editorial-card-hover rounded-none p-4 flex flex-col justify-between space-y-4 group"
                                     x-show="selectedTab === 'Semua' || selectedTab === '{{ $item->category }}'">
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                                            <span class="text-xs font-mono font-bold text-[#0096c7]">
                                                {{ sprintf('%02d', $index + 1) }}
                                            </span>
                                            <span class="text-[10px] font-bold uppercase tracking-wider text-subtext">
                                                {{ $item->category }}
                                            </span>
                                        </div>

                                        <h3 class="font-display text-2xl font-bold uppercase text-heading line-clamp-1 group-hover:text-[#0096c7] transition-colors">
                                            {{ $item->title }}
                                        </h3>

                                        <div @click="selectedProject = {{ json_encode($item) }}; isModalOpen = true" class="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer relative">
                                            @if($item->image_path)
                                                <img src="{{ asset($item->image_path) }}" alt="{{ $item->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
                                            @else
                                                <div class="w-full h-full flex items-center justify-center text-xs text-subtext">Tidak Ada Gambar</div>
                                            @endif
                                            <div class="absolute inset-0 bg-[#0096c7]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span class="px-3 py-1.5 bg-black/80 text-white text-[10px] uppercase font-bold tracking-widest flex items-center gap-1.5">
                                                    <span>Detail & Tech Stack</span>
                                                    <svg class="w-3.5 h-3.5 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                                </span>
                                            </div>
                                        </div>

                                        @if($item->tech_stack)
                                            <div class="flex flex-wrap gap-1 pt-1">
                                                @foreach(explode(',', $item->tech_stack) as $tech)
                                                    <span class="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[9px] font-mono uppercase text-subtext">{{ trim($tech) }}</span>
                                                @endforeach
                                            </div>
                                        @endif

                                        <p class="text-xs text-subtext line-clamp-2 leading-relaxed font-normal">
                                            {{ $item->description }}
                                        </p>
                                    </div>

                                    <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest">
                                        <button type="button" @click="selectedProject = {{ json_encode($item) }}; isModalOpen = true" class="text-heading hover:text-[#0096c7] transition-colors flex items-center gap-1">
                                            <svg class="w-3.5 h-3.5 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                            <span>Detail Proyek</span>
                                        </button>
                                        @if($item->project_url)
                                            <a href="{{ $item->project_url }}" target="_blank" class="text-[#0096c7] hover:underline flex items-center gap-1">
                                                <span>Live Demo</span>
                                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                            </a>
                                        @endif
                                    </div>
                                </div>
                            @empty
                                <div class="col-span-3 text-center py-12 text-subtext text-xs">
                                    Belum ada portofolio yang ditambahkan.
                                </div>
                            @endforelse
                        </div>
                    </div>

                </div>

                <!-- Interactive Project Detail Modal -->
                <div x-show="isModalOpen" x-cloak class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    <div @click.away="isModalOpen = false" class="editorial-card bg-white dark:bg-[#131924] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-300 dark:border-slate-800 relative rounded-none">

                        <!-- Modal Close Button -->
                        <button @click="isModalOpen = false" class="absolute top-4 right-4 p-2 text-subtext hover:text-heading transition-colors font-bold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>

                        <template x-if="selectedProject">
                            <div class="space-y-5">
                                <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                                    <span class="px-2.5 py-1 bg-[#0096c7]/10 border border-[#0096c7]/40 text-[#0096c7] text-[10px] font-mono font-bold uppercase" x-text="selectedProject.category"></span>
                                    <span class="text-xs text-subtext font-mono">Detail Spesifikasi Proyek</span>
                                </div>

                                <h3 class="font-display text-3xl font-extrabold uppercase text-heading" x-text="selectedProject.title"></h3>

                                <div class="w-full aspect-video bg-slate-200 dark:bg-slate-800 overflow-hidden border border-slate-300 dark:border-slate-700">
                                    <template x-if="selectedProject.image_path">
                                        <img :src="'/' + selectedProject.image_path" :alt="selectedProject.title" class="w-full h-full object-cover">
                                    </template>
                                    <template x-if="!selectedProject.image_path">
                                        <div class="w-full h-full flex items-center justify-center text-xs text-subtext">Tidak Ada Pratinjau Gambar</div>
                                    </template>
                                </div>

                                <!-- Tech Stack Badges -->
                                <template x-if="selectedProject.tech_stack">
                                    <div class="space-y-1.5">
                                        <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-subtext block">TEKNOLOGI & TECH STACK:</span>
                                        <div class="flex flex-wrap gap-2">
                                            <template x-for="tech in selectedProject.tech_stack.split(',')" :key="tech">
                                                <span class="px-3 py-1 bg-[#0096c7]/10 border border-[#0096c7]/30 text-[#0096c7] text-xs font-mono font-bold uppercase" x-text="tech.trim()"></span>
                                            </template>
                                        </div>
                                    </div>
                                </template>

                                <div class="space-y-2">
                                    <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-subtext block">DESKRIPSI & ARSITEK SULUSI:</span>
                                    <p class="text-xs sm:text-sm text-subtext leading-relaxed font-normal whitespace-pre-line" x-text="selectedProject.description"></p>
                                </div>

                                <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <button type="button" @click="isModalOpen = false" class="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase">Tutup Modal</button>

                                    <template x-if="selectedProject.project_url">
                                        <a :href="selectedProject.project_url" target="_blank" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-widest transition-all flex items-center gap-1.5">
                                            <span>Buka Demo Proyek Live</span>
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
        </section>
    @endif

    <!-- Dynamic Section: Highlight Products & Digital Goods -->
    @if($settings['show_products_section'] ?? true)
        <section id="products" class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800" x-data="{ selectedHomeProduct: null, isProductModalOpen: false }">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <!-- Left Sidebar Header -->
                    <div class="lg:col-span-4 space-y-4">
                        <h2 class="text-xs font-bold uppercase tracking-[0.25em] text-heading">
                            PRODUK & SOURCE CODE
                        </h2>
                        <div class="accent-line"></div>
                        <p class="text-sm text-subtext leading-relaxed font-normal max-w-xs">
                            Katalog template web, source code aplikasi enterprise, e-book, dan perkakas digital siap pakai.
                        </p>

                        <div class="pt-4">
                            <a href="{{ route('products.index') }}" class="px-6 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-widest transition-all inline-flex items-center gap-2">
                                <span>Lihat Semua Produk ({{ $totalProductsCount }})</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>

                    <!-- Right 3-Column Products Grid -->
                    <div class="lg:col-span-8">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            @forelse($latestProducts as $index => $product)
                                <div class="editorial-card editorial-card-hover rounded-none p-4 flex flex-col justify-between space-y-3 group cursor-pointer"
                                     @click="selectedHomeProduct = {{ json_encode($product) }}; isProductModalOpen = true">

                                    <div class="space-y-3">
                                        <div class="aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative">
                                            @if($product->image_path)
                                                <img src="{{ uploaded_asset($product->image_path) }}" alt="{{ $product->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
                                            @else
                                                <div class="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-900/60 p-4 text-center">
                                                    <svg class="w-10 h-10 mb-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                                                    <span class="text-[10px] font-mono uppercase font-bold text-subtext">Produk Digital</span>
                                                </div>
                                            @endif
                                        </div>

                                        <div class="space-y-1.5">
                                            <div class="flex items-center justify-between">
                                                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0096c7]">
                                                    {{ $product->category ?: 'Produk Digital' }}
                                                </span>
                                                @if($product->price !== null)
                                                    <span class="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-extrabold">
                                                        Rp {{ number_format($product->price, 0, ',', '.') }}
                                                    </span>
                                                @endif
                                            </div>

                                            <h3 class="font-display text-xl font-bold uppercase text-heading group-hover:text-[#0096c7] transition-colors line-clamp-1">
                                                {{ $product->title ?: 'Produk (Tanpa Judul)' }}
                                            </h3>

                                            @if($product->description)
                                                <p class="text-xs text-subtext line-clamp-2 leading-relaxed font-normal">
                                                    {{ $product->description }}
                                                </p>
                                            @endif
                                        </div>
                                    </div>

                                    <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-widest text-[#0096c7]">
                                        <span class="flex items-center gap-1">
                                            <svg class="w-3.5 h-3.5 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                            <span>Pratinjau Produk</span>
                                        </span>
                                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                                    </div>
                                </div>
                            @empty
                                <div class="col-span-3 editorial-card p-8 text-center text-subtext text-xs uppercase">
                                    Belum ada produk jualan terbaru.
                                </div>
                            @endforelse
                        </div>
                    </div>

                </div>

                <!-- Lightbox Product Detail Modal -->
                <div x-show="isProductModalOpen" x-cloak class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                    <div @click.away="isProductModalOpen = false" class="editorial-card bg-white dark:bg-[#131924] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-300 dark:border-slate-800 relative rounded-none">

                        <button @click="isProductModalOpen = false" class="absolute top-4 right-4 p-2 text-subtext hover:text-heading transition-colors font-bold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>

                        <template x-if="selectedHomeProduct">
                            <div class="space-y-5">
                                <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                                    <span class="px-2.5 py-1 bg-[#0096c7]/10 border border-[#0096c7]/40 text-[#0096c7] text-[10px] font-mono font-bold uppercase" x-text="selectedHomeProduct.category || 'Produk Digital'"></span>
                                    <template x-if="selectedHomeProduct.price !== null">
                                        <span class="px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-sm font-mono font-extrabold" x-text="'Rp ' + Number(selectedHomeProduct.price).toLocaleString('id-ID')"></span>
                                    </template>
                                </div>

                                <h3 class="font-display text-3xl font-extrabold uppercase text-heading" x-text="selectedHomeProduct.title || 'Produk (Tanpa Judul)'"></h3>

                                <template x-if="selectedHomeProduct.image_path">
                                    <div class="w-full aspect-[4/3] bg-slate-900 overflow-hidden border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                                        <img :src="'/' + selectedHomeProduct.image_path" :alt="selectedHomeProduct.title" class="w-full h-full object-cover">
                                    </div>
                                </template>

                                <template x-if="selectedHomeProduct.description">
                                    <div class="space-y-2">
                                        <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-subtext block">DESKRIPSI PRODUK:</span>
                                        <p class="text-xs sm:text-sm text-subtext leading-relaxed font-normal whitespace-pre-line" x-text="selectedHomeProduct.description"></p>
                                    </div>
                                </template>

                                <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                    <button type="button" @click="isProductModalOpen = false" class="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase">Tutup</button>

                                    <template x-if="selectedHomeProduct.link">
                                        <a :href="selectedHomeProduct.link" target="_blank" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-widest transition-all flex items-center gap-1.5">
                                            <span>Beli / Buka Link Pembelian</span>
                                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        </a>
                                    </template>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
        </section>
    @endif



    <!-- Dynamic Section: Career Experience & Education Timeline -->
    @if($settings['show_experience_section'])
        <section id="experience" class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    <!-- Left Header -->
                    <div class="lg:col-span-4 space-y-4">
                        <h2 class="text-xs font-bold uppercase tracking-[0.25em] text-heading">
                            REKAM JEJAK KARIR
                        </h2>
                        <div class="accent-line"></div>
                        <p class="text-sm text-subtext leading-relaxed font-normal max-w-xs">
                            Perjalanan profesional dan pengalaman kerja dalam membangun sistem skala enterprise.
                        </p>
                    </div>

                    <!-- Right Timeline Grid (Fully Dynamic from Database) -->
                    <div class="lg:col-span-8 space-y-8">
                        @forelse($experiences as $index => $item)
                            <div class="editorial-card p-6 border-l-4 {{ $index === 0 ? 'border-l-[#0096c7]' : 'border-l-slate-400 dark:border-l-slate-700' }} space-y-2">
                                <div class="flex flex-wrap justify-between items-start gap-2">
                                    <div>
                                        <h3 class="font-display text-2xl font-bold uppercase text-heading">{{ $item->title }}</h3>
                                        <span class="text-xs font-bold text-[#0096c7] uppercase">{{ $item->company }}</span>
                                    </div>
                                    <span class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-[10px] font-mono uppercase font-bold text-subtext">
                                        {{ $item->period }}
                                    </span>
                                </div>
                                @if($item->description)
                                    <p class="text-xs text-subtext leading-relaxed pt-2">
                                        {{ $item->description }}
                                    </p>
                                @endif
                            </div>
                        @empty
                            <div class="editorial-card p-6 text-center text-xs text-subtext uppercase">
                                Belum ada data rekam jejak karir.
                            </div>
                        @endforelse
                    </div>

                </div>
            </div>
        </section>
    @endif

    <!-- Dynamic Section: Professional Certifications Badges -->
    @if($settings['show_certifications_section'])
        <section id="certifications" class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <!-- Left Header -->
                    <div class="lg:col-span-4 space-y-4">
                        <h2 class="text-xs font-bold uppercase tracking-[0.25em] text-heading">
                            SERTIFIKASI TEKNIKAL
                        </h2>
                        <div class="accent-line"></div>
                        <p class="text-sm text-subtext leading-relaxed font-normal max-w-xs">
                            Kredensial profesional dan pengakuan keahlian rekayasa sistem.
                        </p>
                    </div>

                    <!-- Right Badges Grid (Fully Dynamic from Database) -->
                    <div class="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        @forelse($certifications as $item)
                            <div class="editorial-card p-6 space-y-3">
                                <div class="w-10 h-10 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center font-bold text-base text-[#0096c7]">
                                    {{ $item->icon ?? '📜' }}
                                </div>
                                <span class="text-[10px] font-mono font-bold text-[#0096c7] uppercase block">{{ $item->issuer }}</span>
                                <h3 class="font-display text-xl font-bold uppercase text-heading">{{ $item->name }}</h3>
                                @if($item->description)
                                    <p class="text-[11px] text-subtext leading-relaxed">{{ $item->description }}</p>
                                @endif
                                @if($item->credential_url)
                                    <a href="{{ $item->credential_url }}" target="_blank" class="text-[10px] font-mono font-bold text-[#0096c7] hover:underline flex items-center gap-1 pt-1">
                                        <span>Verifikasi Kredensial</span>
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                    </a>
                                @endif
                            </div>
                        @empty
                            <div class="col-span-3 editorial-card p-6 text-center text-xs text-subtext uppercase">
                                Belum ada data sertifikasi teknikal.
                            </div>
                        @endforelse
                    </div>

                </div>
            </div>
        </section>
    @endif



    <!-- Dynamic Section: Contact Form -->
    @if($settings['show_contact_section'])
        <section id="contact" class="py-12 sm:py-16 relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="section-banner p-8 sm:p-12 border border-slate-300 dark:border-slate-800">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        <!-- Left: Header & Info -->
                        <div class="lg:col-span-5 space-y-4">
                            <h2 class="font-display text-4xl font-extrabold uppercase tracking-tight text-heading">
                                HUBUNGI SAYA
                            </h2>
                            <div class="accent-line"></div>
                            <p class="text-xs text-subtext font-normal leading-relaxed max-w-sm">
                                Saya terbuka untuk proyek freelance, posisi purna waktu, serta konsultasi rekayasa perangkat lunak. Silakan kirimkan pesan Anda melalui form di samping.
                            </p>

                            <div class="pt-4 space-y-3 text-xs">
                                @if(!empty($settings['email']))
                                    <div>
                                        <span class="text-[10px] font-bold uppercase tracking-widest text-subtext block">EMAIL LANGSUNG</span>
                                        <a href="mailto:{{ $settings['email'] }}" class="font-bold text-heading hover:text-[#0096c7] transition-colors">{{ $settings['email'] }}</a>
                                    </div>
                                @endif

                                @if(!empty($settings['linkedin_url']))
                                    <div>
                                        <span class="text-[10px] font-bold uppercase tracking-widest text-subtext block">LINKEDIN</span>
                                        <a href="{{ $settings['linkedin_url'] }}" target="_blank" class="font-bold text-heading hover:text-[#0096c7] transition-colors">linkedin.com/in/adybudi</a>
                                    </div>
                                @endif
                            </div>
                        </div>

                        <!-- Right: Interactive Contact Form -->
                        <div class="lg:col-span-7">
                            <div class="p-6 sm:p-8 border border-[#0096c7] bg-white dark:bg-[#131924] shadow-xl">

                                @if(session('contact_success'))
                                    <div class="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                                        <span>✅</span>
                                        <span>{{ session('contact_success') }}</span>
                                    </div>
                                @endif

                                <form method="POST" action="{{ route('contact.send') }}" class="space-y-4">
                                    @csrf
                                    <!-- Anti-bot Honeypot Field -->
                                    <input type="text" name="website_url" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">

                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Nama Lengkap *</label>
                                            <input type="text" name="name" value="{{ old('name') }}" required placeholder="Nama Anda" class="w-full px-4 py-3 input-theme rounded-none text-xs">
                                            @error('name') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                                        </div>

                                        <div>
                                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Email *</label>
                                            <input type="email" name="email" value="{{ old('email') }}" required placeholder="email@domain.com" class="w-full px-4 py-3 input-theme rounded-none text-xs">
                                            @error('email') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                                        </div>
                                    </div>

                                    <div>
                                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Subjek Pesan (Opsional)</label>
                                        <input type="text" name="subject" value="{{ old('subject') }}" placeholder="Penawaran Proyek / Pertanyaan" class="w-full px-4 py-3 input-theme rounded-none text-xs">
                                    </div>

                                    <div>
                                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Isi Pesan *</label>
                                        <textarea name="message" rows="4" required placeholder="Tuliskan detail ide atau pertanyaan proyek Anda..." class="w-full px-4 py-3 input-theme rounded-none text-xs leading-relaxed">{{ old('message') }}</textarea>
                                        @error('message') <span class="text-[10px] text-rose-500 mt-1 block">{{ $message }}</span> @enderror
                                    </div>

                                    @if(config('services.turnstile.enabled'))
                                        <div class="cf-turnstile w-full my-3" data-sitekey="{{ config('services.turnstile.site_key') }}" data-size="flexible" data-theme="auto"></div>
                                        @error('cf-turnstile-response') <span class="text-[10px] text-rose-500 mt-1 block font-mono">{{ $message }}</span> @enderror
                                    @endif

                                    <div class="pt-2">
                                        <button type="submit" class="w-full py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">
                                            KIRIM PESAN KONTAK →
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    @endif

</x-layouts.app-public>
