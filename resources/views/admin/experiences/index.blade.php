<x-layouts.admin title="Kelola Rekam Karir" header="Manajemen Rekam Jejak Karir">
    
    <div x-data="{ 
        openCreateModal: false, 
        openEditModal: false, 
        editData: { id: '', title: '', company: '', period: '', description: '', order: 1 } 
    }">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Rekam Jejak Karir & Pendidikan</h2>
                <p class="text-xs text-subtext">Kelola riwayat pengalaman kerja dan latar belakang pendidikan yang tampil pada website.</p>
            </div>
            <button @click="openCreateModal = true" type="button" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                + Tambah Item Karir
            </button>
        </div>

        <!-- Table -->
        <div class="editorial-card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                            <th class="p-4">Urutan</th>
                            <th class="p-4">Posisi / Gelar</th>
                            <th class="p-4">Perusahaan / Institusi</th>
                            <th class="p-4">Periode</th>
                            <th class="p-4 hidden md:table-cell">Deskripsi Singkat</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                        @forelse($experiences as $item)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                <td class="p-4 font-mono font-bold text-[#0096c7]">
                                    #{{ $item->order }}
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    {{ $item->title }}
                                </td>
                                <td class="p-4 text-subtext font-semibold">
                                    {{ $item->company }}
                                </td>
                                <td class="p-4 font-mono text-[11px] text-subtext">
                                    {{ $item->period }}
                                </td>
                                <td class="p-4 hidden md:table-cell text-subtext max-w-xs truncate">
                                    {{ $item->description }}
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <button @click="
                                            editData = { 
                                                id: '{{ $item->id }}', 
                                                title: '{{ addslashes($item->title) }}', 
                                                company: '{{ addslashes($item->company) }}', 
                                                period: '{{ addslashes($item->period) }}', 
                                                description: '{{ addslashes($item->description) }}', 
                                                order: {{ $item->order }} 
                                            }; 
                                            openEditModal = true;
                                        " type="button" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800">
                                            Edit
                                        </button>

                                        <form method="POST" action="{{ route('admin.experiences.destroy', $item) }}" onsubmit="return confirm('Hapus item karir ini?')">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="px-3 py-1 border border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-bold hover:bg-rose-500 hover:text-white">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="6" class="p-8 text-center text-subtext text-xs uppercase tracking-widest">
                                    Belum ada data rekam karir.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Create Modal -->
        <div x-show="openCreateModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
            <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-lg space-y-6 shadow-2xl">
                <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Tambah Item Karir Baru</h3>
                    <button @click="openCreateModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" action="{{ route('admin.experiences.store') }}" class="space-y-4">
                    @csrf
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Posisi / Judul Gelar *</label>
                        <input type="text" name="title" required placeholder="misal: Lead Full Stack Engineer" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Perusahaan / Institusi *</label>
                        <input type="text" name="company" required placeholder="misal: PT Tech Enterprise Indonesia" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Periode *</label>
                            <input type="text" name="period" required placeholder="misal: 2023 — SEKARANG" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Urutan (Order)</label>
                            <input type="number" name="order" value="1" min="1" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Deskripsi Singkat</label>
                        <textarea name="description" rows="3" placeholder="Tuliskan peran dan pencapaian..." class="w-full px-4 py-2.5 input-theme rounded-none text-xs leading-relaxed"></textarea>
                    </div>

                    <div class="pt-4 flex justify-end gap-3">
                        <button type="button" @click="openCreateModal = false" class="px-5 py-2 text-xs uppercase font-extrabold tracking-wider text-subtext">Batal</button>
                        <button type="submit" class="px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider">Simpan Item</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit Modal -->
        <div x-show="openEditModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
            <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-lg space-y-6 shadow-2xl">
                <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Edit Item Karir</h3>
                    <button @click="openEditModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" :action="'/admin/experiences/' + editData.id" class="space-y-4">
                    @csrf
                    @method('PUT')
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Posisi / Judul Gelar *</label>
                        <input type="text" name="title" x-model="editData.title" required class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Perusahaan / Institusi *</label>
                        <input type="text" name="company" x-model="editData.company" required class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Periode *</label>
                            <input type="text" name="period" x-model="editData.period" required class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Urutan (Order)</label>
                            <input type="number" name="order" x-model="editData.order" min="1" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Deskripsi Singkat</label>
                        <textarea name="description" x-model="editData.description" rows="3" class="w-full px-4 py-2.5 input-theme rounded-none text-xs leading-relaxed"></textarea>
                    </div>

                    <div class="pt-4 flex justify-end gap-3">
                        <button type="button" @click="openEditModal = false" class="px-5 py-2 text-xs uppercase font-extrabold tracking-wider text-subtext">Batal</button>
                        <button type="submit" class="px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider">Update Item</button>
                    </div>
                </form>
            </div>
        </div>

    </div>

</x-layouts.admin>
