<x-layouts.admin title="Kelola Sertifikasi" header="Manajemen Sertifikasi Teknikal">

    <div x-data="{
        openCreateModal: false,
        openEditModal: false,
        showDeleteModal: false,
        deleteForm: null,
        editData: { id: '', name: '', issuer: '', icon: 'AWS', description: '', credential_url: '', order: 1 }
    }">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
                <h2 class="font-display text-2xl font-bold text-heading uppercase">Daftar Sertifikasi Teknikal</h2>
                <p class="text-xs text-subtext mt-1">Kelola kredensial profesional dan lencana sertifikasi teknikal yang tampil pada website.</p>
            </div>
            <button @click="openCreateModal = true" type="button" class="px-6 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all flex items-center gap-2">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                <span>Tambah Sertifikasi</span>
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
                                <td class="p-4 w-16">
                                    <div class="w-10 h-10 bg-[#0096c7]/10 border border-[#0096c7]/30 flex items-center justify-center font-bold text-xs text-[#0096c7]">
                                        {{ $item->icon ?? 'AWS' }}
                                    </div>
                                </td>
                                <td class="p-4 font-bold text-heading">
                                    <span class="block text-sm uppercase">{{ $item->name }}</span>
                                </td>
                                <td class="p-4">
                                    <span class="inline-block px-2 py-0.5 border border-[#0096c7] text-[#0096c7] text-[10px] font-mono uppercase font-bold">
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
                                        " type="button" class="px-3 py-1 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                                            Edit
                                        </button>

                                        <form x-ref="form_{{ $item->id }}" method="POST" action="{{ route('admin.certifications.destroy', $item) }}" @submit.prevent="deleteForm = $refs.form_{{ $item->id }}; showDeleteModal = true">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="px-3 py-1 border border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-bold hover:bg-rose-500 hover:text-white transition-all">
                                                Hapus
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="p-8 text-center text-subtext text-xs uppercase tracking-widest">
                                    Belum ada data sertifikasi. Silakan klik tombol "Tambah Sertifikasi".
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Create Modal -->
        <div x-show="openCreateModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
            <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-lg space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800">
                <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Tambah Sertifikasi Baru</h3>
                    <button @click="openCreateModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" action="{{ route('admin.certifications.store') }}" class="space-y-5">
                    @csrf
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Nama Sertifikasi *</label>
                        <input type="text" name="name" required placeholder="misal: Certified Laravel Developer" class="input input-theme w-full rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Penerbit (Issuer) *</label>
                            <input type="text" name="issuer" required placeholder="misal: LARAVEL OFFICIAL" class="input input-theme w-full rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Ikon Badge / Text</label>
                            <input type="text" name="icon" value="AWS" class="input input-theme w-full rounded-none text-xs font-mono">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Credential URL (Opsional)</label>
                        <input type="url" name="credential_url" placeholder="https://..." class="input input-theme w-full rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Singkat</label>
                        <textarea name="description" rows="3" placeholder="Tuliskan penjelasan sertifikasi..." class="textarea input-theme w-full rounded-none text-xs leading-relaxed resize-none"></textarea>
                    </div>

                    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                        <button type="button" @click="openCreateModal = false" class="px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs uppercase font-extrabold tracking-wider transition-colors">Batal</button>
                        <button type="submit" class="px-8 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">Simpan Sertifikasi</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Edit Modal -->
        <div x-show="openEditModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" x-cloak>
            <div class="editorial-card bg-white dark:bg-[#131924] p-6 sm:p-8 w-full max-w-lg space-y-6 shadow-2xl border border-slate-200 dark:border-slate-800">
                <div class="flex justify-between items-center pb-3 border-b border-slate-200 dark:border-slate-800">
                    <h3 class="font-display text-xl font-bold uppercase text-heading">Edit Sertifikasi</h3>
                    <button @click="openEditModal = false" class="text-subtext hover:text-heading p-1">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                    </button>
                </div>

                <form method="POST" :action="'/admin/certifications/' + editData.id" class="space-y-5">
                    @csrf
                    @method('PUT')
                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Nama Sertifikasi *</label>
                        <input type="text" name="name" x-model="editData.name" required class="input input-theme w-full rounded-none text-xs">
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Penerbit (Issuer) *</label>
                            <input type="text" name="issuer" x-model="editData.issuer" required class="input input-theme w-full rounded-none text-xs">
                        </div>

                        <div>
                            <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Ikon Badge / Text</label>
                            <input type="text" name="icon" x-model="editData.icon" class="input input-theme w-full rounded-none text-xs font-mono">
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Credential URL (Opsional)</label>
                        <input type="url" name="credential_url" x-model="editData.credential_url" class="input input-theme w-full rounded-none text-xs">
                    </div>

                    <div>
                        <label class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">Deskripsi Singkat</label>
                        <textarea name="description" x-model="editData.description" rows="3" class="textarea input-theme w-full rounded-none text-xs leading-relaxed resize-none"></textarea>
                    </div>

                    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-3">
                        <button type="button" @click="openEditModal = false" class="px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-subtext hover:text-heading text-xs uppercase font-extrabold tracking-wider transition-colors">Batal</button>
                        <button type="submit" class="px-8 py-2.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider transition-all shadow-md">Update Sertifikasi</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Delete Confirmation Modal -->
        <div x-show="showDeleteModal" x-cloak @keydown.escape.window="showDeleteModal = false" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div x-show="showDeleteModal" x-transition.opacity class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="showDeleteModal = false"></div>
            <div x-show="showDeleteModal" x-transition class="relative editorial-card bg-white dark:bg-[#131924] w-full max-w-md p-8 z-10 shadow-2xl border border-slate-200 dark:border-slate-800">
                <div class="space-y-4">
                    <div class="w-12 h-12 bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                        <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                    </div>
                    <div>
                        <h3 class="font-display text-xl font-bold text-heading uppercase">Hapus Sertifikasi?</h3>
                        <p class="text-xs text-subtext mt-2 leading-relaxed">Data kredensial sertifikasi ini akan dihapus secara permanen.</p>
                    </div>
                    <div class="flex gap-3 pt-2">
                        <button @click="showDeleteModal = false" type="button" class="flex-1 px-4 py-3 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold tracking-wider hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                            Batal
                        </button>
                        <button @click="if(deleteForm) deleteForm.submit()" type="button" class="flex-1 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider transition-all">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>

</x-layouts.admin>
