<section class="space-y-6">
    <header>
        <h3 class="text-xs font-extrabold uppercase tracking-widest text-rose-500 border-b border-slate-200 dark:border-slate-800 pb-2">
            Delete Account
        </h3>
        <p class="mt-2 text-xs text-subtext leading-relaxed">
            {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.') }}
        </p>
    </header>

    <button type="button" x-data="" x-on:click.prevent="$dispatch('open-modal', 'confirm-user-deletion')"
            class="px-6 py-3 border border-rose-500 text-rose-600 dark:text-rose-400 text-[10px] uppercase font-extrabold tracking-wider rounded-none hover:bg-rose-500 hover:text-white transition-all">
        {{ __('Delete Account') }}
    </button>

    <x-modal name="confirm-user-deletion" :show="$errors->userDeletion->isNotEmpty()" focusable>
        <form method="post" action="{{ route('profile.destroy') }}" class="p-8 space-y-6">
            @csrf
            @method('delete')
            <div class="w-12 h-12 bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">
                <svg class="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
            <div>
                <h2 class="font-display text-xl font-bold text-heading uppercase">
                    {{ __('Delete Account?') }}
                </h2>
                <p class="mt-2 text-xs text-subtext leading-relaxed">
                    {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.') }}
                </p>
            </div>
            <div>
                <label for="password" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2 sr-only">{{ __('Password') }}</label>
                <input id="password" name="password" type="password"
                       placeholder="{{ __('Password') }}"
                       class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
                <x-input-error :messages="$errors->userDeletion->get('password')" class="mt-2" />
            </div>
            <div class="flex justify-end gap-3">
                <button type="button" x-on:click="$dispatch('close')"
                        class="px-6 py-3 border border-slate-300 dark:border-slate-700 text-heading text-[10px] uppercase font-bold tracking-wider rounded-none hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    {{ __('Cancel') }}
                </button>
                <button type="submit"
                        class="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white text-[10px] uppercase font-bold tracking-wider rounded-none transition-all">
                    {{ __('Delete Account') }}
                </button>
            </div>
        </form>
    </x-modal>
</section>
