@if ($paginator->hasPages())
    <nav role="navigation" aria-label="{{ __('Pagination Navigation') }}" class="flex items-center justify-center">
        {{-- Mobile: Previous/Next only --}}
        <div class="flex gap-2 items-center justify-between sm:hidden w-full">
            @if ($paginator->onFirstPage())
                <span class="inline-flex items-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-subtext bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 cursor-not-allowed">
                    {!! __('pagination.previous') !!}
                </span>
            @else
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="inline-flex items-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-heading bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 hover:border-[#0096c7] hover:text-[#0096c7] transition-colors">
                    {!! __('pagination.previous') !!}
                </a>
            @endif
            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="inline-flex items-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-heading bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 hover:border-[#0096c7] hover:text-[#0096c7] transition-colors">
                    {!! __('pagination.next') !!}
                </a>
            @else
                <span class="inline-flex items-center px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-subtext bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 cursor-not-allowed">
                    {!! __('pagination.next') !!}
                </span>
            @endif
        </div>

        {{-- Desktop: Full pagination --}}
        <div class="hidden sm:flex sm:items-center sm:gap-1">
            {{-- Previous --}}
            @if ($paginator->onFirstPage())
                <span class="inline-flex items-center justify-center w-10 h-10 text-subtext bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 cursor-not-allowed" aria-disabled="true" aria-label="@lang('pagination.previous')">
                    <span aria-hidden="true">&lsaquo;</span>
                </span>
            @else
                <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="inline-flex items-center justify-center w-10 h-10 text-heading bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 hover:border-[#0096c7] hover:text-[#0096c7] transition-colors" aria-label="@lang('pagination.previous')">
                    <span aria-hidden="true">&lsaquo;</span>
                </a>
            @endif

            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <span class="inline-flex items-center justify-center w-10 h-10 text-subtext" aria-disabled="true">
                        <span>{{ $element }}</span>
                    </span>
                @endif
                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <span aria-current="page" class="inline-flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-[#0096c7] border border-[#0096c7]">
                                {{ $page }}
                            </span>
                        @else
                            <a href="{{ $url }}" class="inline-flex items-center justify-center w-10 h-10 text-xs font-bold text-heading bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 hover:border-[#0096c7] hover:text-[#0096c7] transition-colors">
                                {{ $page }}
                            </a>
                        @endif
                    @endforeach
                @endif
            @endforeach

            {{-- Next --}}
            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="inline-flex items-center justify-center w-10 h-10 text-heading bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 hover:border-[#0096c7] hover:text-[#0096c7] transition-colors" aria-label="@lang('pagination.next')">
                    <span aria-hidden="true">&rsaquo;</span>
                </a>
            @else
                <span class="inline-flex items-center justify-center w-10 h-10 text-subtext bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 cursor-not-allowed" aria-disabled="true" aria-label="@lang('pagination.next')">
                    <span aria-hidden="true">&rsaquo;</span>
                </span>
            @endif
        </div>
    </nav>
@endif
