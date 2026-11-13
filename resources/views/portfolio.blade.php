<x-layouts.app-public :settings="$settings">

    <!-- Portfolio Hero -->
    <section class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800 bg-[#edeef1]/50 dark:bg-[#111622]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl space-y-4">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#0096c7]">
                    Katalog Proyek & Studi Kasus
                </span>
                <h1 class="font-display text-4xl sm:text-6xl font-extrabold uppercase text-heading tracking-tight leading-none">
                    Portofolio
                </h1>
                <div class="accent-line"></div>
                <p class="text-sm sm:text-base text-subtext leading-relaxed font-light">
                    Kumpulan proyek aplikasi web, e-commerce, company profile, dan sistem informasi
                    yang pernah saya kerjakan. Total {{ $portfolios->count() }} proyek.
                </p>
            </div>
        </div>
    </section>

    <!-- Portfolio Grid with Filter -->
    <section class="py-12 sm:py-16 relative" x-data="{ selectedCategory: 'Semua' }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Filter -->
            <div class="flex flex-wrap gap-2 mb-10">
                <button @click="selectedCategory = 'Semua'"
                        :class="selectedCategory === 'Semua' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'"
                        class="px-4 py-2 border text-[11px] font-mono font-bold uppercase tracking-wider transition-all">
                    Semua ({{ $portfolios->count() }})
                </button>
                @foreach($portfolioCategories as $category)
                    <button @click="selectedCategory = '{{ $category }}'"
                            :class="selectedCategory === '{{ $category }}' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'"
                            class="px-4 py-2 border text-[11px] font-mono font-bold uppercase tracking-wider transition-all">
                        {{ $category }} ({{ $portfolios->where('category', $category)->count() }})
                    </button>
                @endforeach
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                @forelse($portfolios as $index => $item)
                    <article class="editorial-card editorial-card-hover rounded-none flex flex-col group"
                             x-show="selectedCategory === 'Semua' || selectedCategory === '{{ $item->category }}'">
                        <div class="aspect-video w-full overflow-hidden bg-[#0b0f17] border-b border-slate-200 dark:border-slate-700 relative">
                            @if($item->image_path)
                                <img src="{{ uploaded_asset($item->image_path) }}" alt="{{ $item->title }}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
                            @else
                                <div class="relative w-full h-full p-5 flex flex-col justify-between overflow-hidden">
                                    <span class="relative text-[9px] font-mono font-bold uppercase tracking-widest text-[#48cae4]">{{ $item->category }}</span>
                                    <span class="relative font-display text-3xl font-bold uppercase leading-none text-white line-clamp-2">{{ $item->title }}</span>
                                    <span class="relative text-[8px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">Case Study</span>
                                </div>
                            @endif
                        </div>

                        <div class="p-5 flex flex-col flex-1 space-y-4">
                            <div class="space-y-2">
                                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0096c7]">{{ $item->category }}</span>
                                <h2 class="font-display text-2xl font-bold uppercase leading-none text-heading group-hover:text-[#0096c7] transition-colors">
                                    {{ $item->title }}
                                </h2>
                                @if($item->description)
                                    <p class="text-xs text-subtext leading-relaxed">{{ $item->description }}</p>
                                @endif
                            </div>

                            @if($item->tech_stack)
                                <div class="flex flex-wrap gap-1.5 pt-1">
                                    @foreach(explode(',', $item->tech_stack) as $tech)
                                        <span class="px-2 py-0.5 border border-slate-300 dark:border-slate-700 text-[9px] font-mono font-bold uppercase text-subtext">{{ trim($tech) }}</span>
                                    @endforeach
                                </div>
                            @endif

                            @if($item->project_url)
                                <a href="{{ $item->project_url }}" target="_blank" rel="noopener" class="mt-auto pt-3 border-t border-slate-200 dark:border-slate-800 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0096c7] hover:underline inline-flex items-center gap-1">
                                    Buka Proyek
                                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>
                            @endif
                        </div>
                    </article>
                @empty
                    <div class="col-span-full editorial-card p-12 text-center text-subtext text-xs uppercase">
                        Belum ada proyek yang dipublikasikan.
                    </div>
                @endforelse
            </div>

            <!-- CTA -->
            <div class="mt-14 text-center">
                <div class="border border-dashed border-[#0096c7]/40 p-8 max-w-xl mx-auto space-y-4">
                    <h3 class="font-extrabold text-heading text-sm uppercase tracking-wider">Punya proyek yang ingin dibangun?</h3>
                    <p class="text-subtext text-xs">Diskusikan kebutuhan aplikasi atau website Anda dengan saya.</p>
                    <a href="{{ route('home') }}#contact" class="inline-block px-8 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-wider transition-all">
                        Diskusikan Proyek Anda →
                    </a>
                </div>
            </div>

        </div>
    </section>

</x-layouts.app-public>
