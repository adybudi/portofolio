<x-layouts.app-public :settings="$settings">
    <div class="py-16 sm:py-24 relative" x-data="{ search: '', selectedCategory: 'All' }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <!-- Page Header -->
            <div class="max-w-3xl mb-16 space-y-4">
                <div class="text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7] dark:text-[#48cae4] flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                    <span>Direktori Tools & Perkakas</span>
                </div>
                <h1 class="font-display text-5xl sm:text-7xl font-extrabold text-heading uppercase tracking-tight leading-none">
                    DIREKTORI TOOLS KARYA ADY BUDISANTIKA
                </h1>
                <div class="accent-line"></div>
                <p class="text-subtext text-sm leading-relaxed max-w-xl">
                    Kumpulan perkakas utilitas pengembang, generator, dan alat bantu mikro yang dirancang untuk mempercepat alur kerja coding dan desain antarmuka.
                </p>

                <!-- Search Input -->
                <div class="pt-4 max-w-md">
                    <div class="relative w-full">
                        <input x-model="search" type="text" placeholder="Cari tool berdasarkan nama atau kata kunci..." class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-800 text-heading text-xs uppercase tracking-wider focus:outline-none focus:border-[#0096c7] transition-all">
                    </div>
                </div>
            </div>

            <!-- Responsive Grid (1 column on mobile, 3 columns on desktop) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @forelse($tools as $index => $tool)
                    <div class="editorial-card editorial-card-hover rounded-none p-6 flex flex-col justify-between space-y-6"
                         x-show="search === '' || '{{ strtolower($tool->name . ' ' . $tool->description . ' ' . $tool->category) }}'.includes(search.toLowerCase())">
                        
                        <div class="space-y-4">
                            <!-- Icon & Category & Clicks -->
                            <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                                <div class="w-10 h-10 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center font-bold text-sm text-[#0096c7]">
                                    @if($tool->icon_path)
                                        <img src="{{ uploaded_asset($tool->icon_path) }}" alt="{{ $tool->name }}" class="w-6 h-6 object-contain">
                                    @else
                                        <svg class="w-5 h-5 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm2 7a2 2 0 100 4 2 2 0 000-4zm-8 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2v-1z"/></svg>
                                    @endif
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="text-[10px] font-mono text-[#0096c7] font-bold flex items-center gap-1">
                                        <svg class="w-3 h-3 text-[#0096c7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                        {{ $tool->clicks_count }}
                                    </span>
                                    <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-subtext">
                                        {{ $tool->category }}
                                    </span>
                                </div>
                            </div>

                            <!-- Title & Description -->
                            <div class="space-y-2">
                                <h3 class="font-display text-2xl font-bold text-heading uppercase">
                                    {{ $tool->name }}
                                </h3>
                                <p class="text-subtext text-xs leading-relaxed line-clamp-3">
                                    {{ $tool->description }}
                                </p>
                            </div>
                        </div>

                        <!-- Action Button -->
                        <div class="pt-4 border-t border-slate-200 dark:border-slate-800">
                            <a href="{{ route('tools.launch', $tool) }}" target="_blank" class="text-xs uppercase font-extrabold tracking-widest text-[#0096c7] hover:underline flex items-center justify-between">
                                <span>BUKA TOOL</span>
                                <span>→</span>
                            </a>
                        </div>
                    </div>
                @empty
                    <div class="col-span-3 text-center py-16 text-subtext text-xs uppercase tracking-widest">
                        Tidak ada tool yang ditemukan.
                    </div>
                @endforelse
            </div>
        </div>
    </div>
</x-layouts.app-public>
