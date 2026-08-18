<x-layouts.admin title="Kelola Sertifikasi" header="Manajemen Sertifikasi Teknikal">
    
    <div x-data="{ 
        openCreateModal: false, 
        openEditModal: false, 
        editData: { id: '', name: '', issuer: '', icon: 'AWS', description: '', credential_url: '', order: 1 } 
    }">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Sertifikasi Teknikal</h2>
                <p class="text-xs text-subtext">Kelola kredensial profesional dan lencana sertifikasi teknikal yang tampil pada website.</p>
            </div>
            <button @click="openCreateModal = true" type="button" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all">
                + Tambah Sertifikasi
            </button>
        </div>

        <!-- Table -->
        <div class="editorial-card overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 text-subtext text-[10px] uppercase font-bold tracking-widest">
                            <th class="p-4">Ikon</th>
                            <th class="p-4">Nama Sertifikasi</th>
                            <th class="p-4">Penerbit (Issuer)</th>
                            <th class="p-4 hidden md:table-cell">Deskripsi</th>
                            <th class="p-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                        @forelse($certifications as $item)
                            <tr class="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-colors">
                                <td class="p-4">
                                    <div class="w-10 h-10 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center font-bold text-xs text-[#0096c7]">
                                        {{ $item->icon ?? 'AWS' }}
                                    </div>
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    {{ $item->name }}
                                </td>
                                <td class="p-4">
                                    <span class="px-2 py-0.5 border border-[#0096c7] text-[#0096c7] text-[10px] font-mono uppercase font-bold">
                                        {{ $item->issuer }}
                                    </span>
                                </td>
                                <td class="p-4 hidden md:table-cell text-subtext max-w-xs truncate">
                                    {{ $item->description }}
                                </td>
                                <td class="p-4 text-right">
                                    <div class="flex items-center justify-end gap-2">
                                        <button @click="
                                            editData = { 
                                                id: '{{ $item->id }}', 
                                                name: '{{ addslashes($item->name) }}', 
                                                issuer: '{{ addslashes($item->issuer) }}', 
                                                icon: '{{ addslashes($item->icon) }}', 
                                                description: '{{ addslashes($item->description) }}', 
                                                credential_url: '{{ addslashes($item->credential_url) }}', 
                                                order: {{ $item->order }} 
                                            }; 
                                            openEditModal = true;
                                        " type="button" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800">
                                            Edit
                                        </button>

                                        <form method="POST" action="{{ route('admin.certifications.destroy', $item) }}" onsubmit="return confirm('Hapus sertifikasi ini?')">
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
                                <td colspan="5" class="p-8 text-center text-subtext text-xs uppercase tracking-widest">
                                    Belum ada data sertifikasi.
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
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Tambah Sertifikasi Baru</h3>
                    <button @click="openCreateModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" action="{{ route('admin.certifications.store') }}" class="space-y-4">
                    @csrf
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Nama Sertifikasi *</label>
                        <input type="text" name="name" required placeholder="misal: Certified Laravel Developer" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Penerbit (Issuer) *</label>
                            <input type="text" name="issuer" required placeholder="misal: LARAVEL OFFICIAL" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Ikon Badge / Text</label>
                            <input type="text" name="icon" value="AWS" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Credential URL (Opsional)</label>
                        <input type="url" name="credential_url" placeholder="https://..." class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Deskripsi Singkat</label>
                        <textarea name="description" rows="3" placeholder="Tuliskan penjelasan sertifikasi..." class="w-full px-4 py-2.5 input-theme rounded-none text-xs leading-relaxed"></textarea>
                    </div>

                    <div class="pt-4 flex justify-end gap-3">
                        <button type="button" @click="openCreateModal = false" class="px-5 py-2 text-xs uppercase font-extrabold tracking-wider text-subtext">Batal</button>
                        <button type="submit" class="px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider">Simpan Sertifikasi</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit Modal -->
        <div x-show="openEditModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
            <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-lg space-y-6 shadow-2xl">
                <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Edit Sertifikasi</h3>
                    <button @click="openEditModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" :action="'/admin/certifications/' + editData.id" class="space-y-4">
                    @csrf
                    @method('PUT')
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Nama Sertifikasi *</label>
                        <input type="text" name="name" x-model="editData.name" required class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Penerbit (Issuer) *</label>
                            <input type="text" name="issuer" x-model="editData.issuer" required class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Ikon Emoji / Text</label>
                            <input type="text" name="icon" x-model="editData.icon" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Credential URL (Opsional)</label>
                        <input type="url" name="credential_url" x-model="editData.credential_url" class="w-full px-4 py-2.5 input-theme rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-1">Deskripsi Singkat</label>
                        <textarea name="description" x-model="editData.description" rows="3" class="w-full px-4 py-2.5 input-theme rounded-none text-xs leading-relaxed"></textarea>
                    </div>

                    <div class="pt-4 flex justify-end gap-3">
                        <button type="button" @click="openEditModal = false" class="px-5 py-2 text-xs uppercase font-extrabold tracking-wider text-subtext">Batal</button>
                        <button type="submit" class="px-6 py-2 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider">Update Sertifikasi</button>
                    </div>
                </form>
            </div>
        </div>

    </div>

</x-layouts.admin>
