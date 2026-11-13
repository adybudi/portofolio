<x-layouts.app-public :settings="$settings">

    <!-- Services Hero Banner Section -->
    <section class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800 bg-[#edeef1]/50 dark:bg-[#111622]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl space-y-4">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#0096c7]">
                    KATALOG JASA & LAYANAN PROFESIONAL
                </span>
                <h1 class="font-display text-4xl sm:text-6xl font-extrabold uppercase text-heading tracking-tight leading-none">
                    JASA & LAYANAN
                </h1>
                <div class="accent-line"></div>
                <p class="text-sm sm:text-base text-subtext leading-relaxed font-light">
                    Layanan jasa pengembangan website, aplikasi, dan konsultasi sistem yang saya tawarkan secara profesional.
                    Hubungi saya untuk mendiskusikan kebutuhan proyek Anda.
                </p>
            </div>
        </div>
    </section>

    <!-- Services Grid Section -->
    <section class="py-12 sm:py-16 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            @if($services->isEmpty())
                <!-- Empty State -->
                <div class="col-span-full editorial-card p-12 text-center text-subtext text-xs uppercase">
                    Belum ada jasa yang dipublikasikan.
                </div>
            @else
                <!-- Services Grid -->
                @php $featuredService = $services->count() === 1; @endphp
                <div class="grid grid-cols-1 {{ $featuredService ? 'max-w-5xl mx-auto' : 'sm:grid-cols-2 lg:grid-cols-3' }} gap-6 sm:gap-8">
                    @foreach($services as $service)
                    @php $isFeaturedCard = $featuredService && $service->image; @endphp
                    <div class="editorial-card editorial-card-hover rounded-none flex flex-col group {{ $isFeaturedCard ? 'md:flex-row' : '' }}">
                        <!-- Thumbnail -->
                        <div class="aspect-video w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 {{ $isFeaturedCard ? 'md:w-1/2 md:shrink-0 md:border-b-0 md:border-r' : '' }}">
                            @if($service->image)
                                <img src="{{ uploaded_asset($service->image) }}" alt="{{ $service->title }}" loading="lazy" decoding="async" class="w-full h-full {{ $isFeaturedCard ? 'object-contain bg-[#0b0f17]' : 'object-cover' }} group-hover:scale-105 transition-all duration-500">
                            @else
                                <div class="relative w-full h-full overflow-hidden bg-[#0b0f17] p-5 flex flex-col justify-between">
                                    <span class="relative text-[9px] font-mono font-bold uppercase tracking-widest text-[#48cae4]">Layanan</span>
                                    <span class="relative font-display text-2xl font-bold uppercase leading-none text-white line-clamp-2">{{ $service->title }}</span>
                                    <span class="relative text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">Ady Budisantika</span>
                                </div>
                            @endif
                        </div>

                        <!-- Content -->
                        <div class="p-5 flex flex-col flex-1 {{ $isFeaturedCard ? 'md:w-1/2 md:justify-between lg:p-8' : '' }}">
                            <div class="flex-1 space-y-3">
                                <h2 class="font-extrabold text-heading text-sm uppercase tracking-tight group-hover:text-[#0096c7] transition-colors leading-snug">
                                    {{ $service->title }}
                                </h2>
                                @if($service->description)
                                    <p class="text-subtext text-xs leading-relaxed">{{ $service->description }}</p>
                                @endif

                                @if($service->features && count($service->features) > 0)
                                    <ul class="space-y-1.5 pt-1">
                                        @foreach($service->features as $feature)
                                            <li class="flex items-start gap-1.5 text-xs text-subtext">
                                                <svg class="w-3 h-3 text-[#0096c7] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {{ $feature }}
                                            </li>
                                        @endforeach
                                    </ul>
                                @endif
                            </div>

                            <!-- Price & CTA -->
                            <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                                <div class="flex items-end justify-between gap-3">
                                    <div>
                                        @if($service->price)
                                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-[#0096c7] block mb-0.5">
                                                MULAI DARI
                                            </span>
                                            @if($service->has_discount && $service->discount_price)
                                                <span class="block text-[11px] line-through text-subtext font-mono">
                                                    Rp {{ number_format($service->price, 0, ',', '.') }}
                                                </span>
                                                <span class="block text-base font-extrabold text-[#0096c7] font-mono leading-tight">
                                                    Rp {{ number_format($service->discount_price, 0, ',', '.') }}
                                                </span>
                                                <span class="inline-block mt-1 px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[9px] font-bold uppercase">DISKON</span>
                                            @else
                                                <span class="block text-base font-extrabold text-heading font-mono">
                                                    Rp {{ number_format($service->price, 0, ',', '.') }}
                                                </span>
                                            @endif
                                        @else
                                            <span class="text-xs text-subtext font-medium italic">Hubungi untuk harga</span>
                                        @endif
                                    </div>
                                    <a href="{{ route('home') }}#contact" class="px-4 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-[11px] font-extrabold uppercase tracking-wider transition-all shrink-0">
                                        Pesan Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

                <!-- CTA Bottom -->
                <div class="mt-12 text-center">
                    <div class="border border-dashed border-[#0096c7]/40 p-8 max-w-xl mx-auto space-y-4">
                        <h3 class="font-extrabold text-heading text-sm uppercase tracking-wider">Tidak menemukan yang Anda cari?</h3>
                        <p class="text-subtext text-xs">Hubungi saya langsung untuk mendiskusikan kebutuhan proyek kustom Anda.</p>
                        <a href="{{ route('home') }}#contact" class="inline-block px-8 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-wider transition-all">
                            Diskusikan Proyek Anda →
                        </a>
                    </div>
                </div>
            @endif
        </div>
    </section>

</x-layouts.app-public>
