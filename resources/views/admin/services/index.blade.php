<x-layouts.admin title="Manajemen Jasa" header="Manajemen Jasa / Layanan">

    <div class="flex items-center justify-between mb-6">
        <div>
            <p class="text-xs text-subtext mt-1">Total: <span class="font-bold text-heading">{{ $services->total() }}</span> jasa terdaftar</p>
        </div>
        <a href="{{ route('admin.services.create') }}" class="px-4 py-2 bg-[#0096c7] hover:bg-[#0077a3] text-white text-xs font-extrabold uppercase tracking-wider transition-all flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Tambah Jasa Baru
        </a>
    </div>

    @if($services->isEmpty())
        <div class="text-center py-20 border border-dashed border-slate-300 dark:border-slate-700">
            <svg class="w-12 h-12 mx-auto text-subtext mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <p class="text-subtext text-sm font-semibold">Belum ada jasa yang ditambahkan.</p>
            <a href="{{ route('admin.services.create') }}" class="mt-4 inline-block px-4 py-2 bg-[#0096c7] text-white text-xs font-bold uppercase">Tambah Sekarang</a>
        </div>
    @else
        <div class="overflow-x-auto border border-slate-200 dark:border-slate-800">
            <table class="w-full text-xs">
                <thead class="bg-slate-100 dark:bg-slate-800/60 text-subtext uppercase tracking-wider">
                    <tr>
                        <th class="px-4 py-3 text-left font-bold">Gambar</th>
                        <th class="px-4 py-3 text-left font-bold">Judul Jasa</th>
                        <th class="px-4 py-3 text-left font-bold">Harga</th>
                        <th class="px-4 py-3 text-center font-bold">Diskon</th>
                        <th class="px-4 py-3 text-center font-bold">Urutan</th>
                        <th class="px-4 py-3 text-center font-bold">Status</th>
                        <th class="px-4 py-3 text-center font-bold">Aksi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                    @foreach($services as $service)
                    <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                        <td class="px-4 py-3">
                            @if($service->image)
                                <img src="{{ uploaded_asset($service->image) }}" alt="{{ $service->title }}" class="w-14 h-10 object-cover border border-slate-200 dark:border-slate-700">
                            @else
                                <div class="w-14 h-10 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-subtext text-[10px]">N/A</div>
                            @endif
                        </td>
                        <td class="px-4 py-3">
                            <span class="font-bold text-heading">{{ $service->title }}</span>
                            @if($service->features && count($service->features) > 0)
                                <span class="block text-[10px] text-subtext mt-0.5">{{ count($service->features) }} fitur</span>
                            @endif
                        </td>
                        <td class="px-4 py-3">
                            @if($service->price)
                                <span class="{{ $service->has_discount ? 'line-through text-subtext' : 'font-bold text-heading' }}">
                                    Rp {{ number_format($service->price, 0, ',', '.') }}
                                </span>
                                @if($service->has_discount && $service->discount_price)
                                    <span class="block font-bold text-emerald-600 dark:text-emerald-400">
                                        Rp {{ number_format($service->discount_price, 0, ',', '.') }}
                                    </span>
                                @endif
                            @else
                                <span class="text-subtext">—</span>
                            @endif
                        </td>
                        <td class="px-4 py-3 text-center">
                            @if($service->has_discount)
                                <span class="px-2 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-[10px] font-bold uppercase">DISKON</span>
                            @else
                                <span class="text-subtext">—</span>
                            @endif
                        </td>
                        <td class="px-4 py-3 text-center text-subtext font-mono">{{ $service->order }}</td>
                        <td class="px-4 py-3 text-center">
                            <form action="{{ route('admin.services.toggle', $service) }}" method="POST" class="inline">
                                @csrf @method('PATCH')
                                <button type="submit" class="px-2 py-0.5 text-[10px] font-bold uppercase {{ $service->is_active ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-subtext' }} hover:opacity-80 transition-opacity">
                                    {{ $service->is_active ? 'AKTIF' : 'NONAKTIF' }}
                                </button>
                            </form>
                        </td>
                        <td class="px-4 py-3 text-center">
                            <div class="flex items-center justify-center gap-2">
                                <a href="{{ route('admin.services.edit', $service) }}" class="px-3 py-1.5 border border-[#0096c7] text-[#0096c7] hover:bg-[#0096c7] hover:text-white text-[10px] font-bold uppercase transition-all">EDIT</a>
                                <form action="{{ route('admin.services.destroy', $service) }}" method="POST" onsubmit="return confirm('Yakin hapus jasa ini?')">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="px-3 py-1.5 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white text-[10px] font-bold uppercase transition-all">HAPUS</button>
                                </form>
                            </div>
                        </td>
                    </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <div class="mt-4">
            {{ $services->links() }}
        </div>
    @endif

</x-layouts.admin>
