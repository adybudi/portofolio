<x-layouts.app-public :settings="$settings">
    
    <!-- Products Hero Banner Section -->
    <section class="py-12 sm:py-16 relative border-b border-slate-200 dark:border-slate-800 bg-[#edeef1]/50 dark:bg-[#111622]/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl space-y-4">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-[#0096c7]">
                    KATALOG PRODUK & LAYANAN DIGITAL
                </span>
                <h1 class="font-display text-4xl sm:text-6xl font-extrabold uppercase text-heading tracking-tight leading-none">
                    PRODUK & SOURCE CODE
                </h1>
                <div class="accent-line"></div>
                <p class="text-sm sm:text-base text-subtext leading-relaxed font-light">
                    Kumpulan template web, source code aplikasi enterprise, e-book, dan perkakas digital siap pakai karya Ady Budisantika.
                </p>
            </div>
        </div>
    </section>

    <!-- Products Grid & Filter Section -->
    <section class="py-12 sm:py-16 relative" x-data="{ selectedCategory: 'Semua', selectedProduct: null, isModalOpen: false }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <!-- Category Filter Tabs -->
            @if(count($productCategories) > 0)
                <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div class="flex flex-wrap gap-2 text-xs font-mono font-bold uppercase">
                        <button @click="selectedCategory = 'Semua'" :class="selectedCategory === 'Semua' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'" class="px-4 py-2 border transition-all">
                            SEMUA PRODUK ({{ count($products) }})
                        </button>
                        @foreach($productCategories as $cat)
                            <button @click="selectedCategory = '{{ $cat }}'" :class="selectedCategory === '{{ $cat }}' ? 'bg-[#0096c7] text-white border-[#0096c7]' : 'border-slate-300 dark:border-slate-700 text-subtext hover:text-heading'" class="px-4 py-2 border transition-all">
                                {{ strtoupper($cat) }}
                            </button>
                        @endforeach
                    </div>
                </div>
            @endif

            <!-- Products Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                @forelse($products as $index => $item)
                    <div class="editorial-card editorial-card-hover rounded-none p-5 flex flex-col justify-between space-y-4 group cursor-pointer"
                         x-show="selectedCategory === 'Semua' || selectedCategory === '{{ $item->category }}'">
                        
                        <div class="space-y-4">
                            <!-- Image / Placeholder -->
                            <div @click="selectedProduct = {{ json_encode($item) }}; isModalOpen = true" class="aspect-[4/3] w-full overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 relative">
                                @if($item->image_path)
                                    <img src="{{ uploaded_asset($item->image_path) }}" alt="{{ $item->title }}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500">
                                @else
                                    <div class="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-100 dark:bg-slate-900/60 p-4 text-center">
                                        <svg class="w-10 h-10 text-[#0096c7]/60 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                                        <span class="text-[11px] font-mono uppercase font-bold text-subtext">Produk Digital</span>
                                    </div>
                                @endif
                            </div>

                            <div class="space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0096c7]">
                                        {{ $item->category ?: 'Produk Digital' }}
                                    </span>
                                    @if($item->price !== null)
                                        <span class="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-extrabold">
                                            Rp {{ number_format($item->price, 0, ',', '.') }}
                                        </span>
                                    @endif
                                </div>

                                <h3 @click="selectedProduct = {{ json_encode($item) }}; isModalOpen = true" class="font-display text-2xl font-bold uppercase text-heading group-hover:text-[#0096c7] transition-colors line-clamp-2">
                                    {{ $item->title ?: 'Produk (Tanpa Judul)' }}
                                </h3>

                                @if($item->description)
                                    <p class="text-xs text-subtext line-clamp-3 leading-relaxed font-normal">
                                        {{ $item->description }}
                                    </p>
                                @endif
                            </div>
                        </div>

                        <div class="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-extrabold uppercase tracking-widest">
                            <button type="button" @click="selectedProduct = {{ json_encode($item) }}; isModalOpen = true" class="text-heading hover:text-[#0096c7] flex items-center gap-1">
                                <svg class="w-3.5 h-3.5 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                <span>Detail</span>
                            </button>
                            @if($item->link)
                                <a href="{{ $item->link }}" target="_blank" class="px-4 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-[11px] font-extrabold uppercase tracking-wider transition-all flex items-center gap-1">
                                    <span>Beli Sekarang</span>
                                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </a>
                            @endif
                        </div>
                    </div>
                @empty
                    <div class="col-span-full editorial-card p-12 text-center text-subtext text-xs uppercase">
                        Belum ada produk yang dipublikasikan.
                    </div>
                @endforelse
            </div>

            <!-- Lightbox Product Detail Modal -->
            <div x-show="isModalOpen" x-cloak class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
                <div @click.away="isModalOpen = false" class="editorial-card bg-white dark:bg-[#131924] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-300 dark:border-slate-800 relative rounded-none">
                    
                    <button @click="isModalOpen = false" class="absolute top-4 right-4 p-2 text-subtext hover:text-heading transition-colors font-bold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>

                    <template x-if="selectedProduct">
                        <div class="space-y-5">
                            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                                <span class="px-2.5 py-1 bg-[#0096c7]/10 border border-[#0096c7]/40 text-[#0096c7] text-[10px] font-mono font-bold uppercase" x-text="selectedProduct.category || 'Produk Digital'"></span>
                                <template x-if="selectedProduct.price !== null">
                                    <span class="px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-sm font-mono font-extrabold" x-text="'Rp ' + Number(selectedProduct.price).toLocaleString('id-ID')"></span>
                                </template>
                            </div>

                            <h3 class="font-display text-3xl font-extrabold uppercase text-heading" x-text="selectedProduct.title || 'Produk (Tanpa Judul)'"></h3>

                            <template x-if="selectedProduct.image_path">
                                <div class="w-full aspect-[4/3] bg-slate-900 overflow-hidden border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                                    <img :src="'/' + selectedProduct.image_path" :alt="selectedProduct.title" class="w-full h-full object-cover">
                                </div>
                            </template>

                            <template x-if="selectedProduct.description">
                                <div class="space-y-2">
                                    <span class="text-[10px] font-mono font-bold uppercase tracking-widest text-subtext block">DESKRIPSI & SPESIFIKASI PRODUK:</span>
                                    <p class="text-xs sm:text-sm text-subtext leading-relaxed font-normal whitespace-pre-line" x-text="selectedProduct.description"></p>
                                </div>
                            </template>

                            <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                <button type="button" @click="isModalOpen = false" class="px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs font-mono font-bold uppercase">Tutup</button>

                                <template x-if="selectedProduct.link">
                                    <a :href="selectedProduct.link" target="_blank" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs font-extrabold uppercase tracking-widest transition-all flex items-center gap-1.5">
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

</x-layouts.app-public>
