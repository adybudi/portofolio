<section>
    <header class="mb-6">
        <h3 class="text-xs font-extrabold uppercase tracking-widest text-[#0096c7] border-b border-slate-200 dark:border-slate-800 pb-2">
            Profile Information
        </h3>
        <p class="mt-2 text-xs text-subtext">
            {{ __("Update your account's profile information and email address.") }}
        </p>
    </header>

    <form id="send-verification" method="post" action="{{ route('verification.send') }}">
        @csrf
    </form>

    <form method="post" action="{{ route('profile.update') }}" class="space-y-5">
        @csrf
        @method('patch')
        <div>
            <label for="name" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">{{ __('Name') }}</label>
            <input id="name" name="name" type="text" value="{{ old('name', $user->name) }}" required autofocus autocomplete="name"
                   class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
            <x-input-error class="mt-2" :messages="$errors->get('name')" />
        </div>
        <div>
            <label for="email" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">{{ __('Email') }}</label>
            <input id="email" name="email" type="email" value="{{ old('email', $user->email) }}" required autocomplete="username"
                   class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
            <x-input-error class="mt-2" :messages="$errors->get('email')" />
            @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                <div class="mt-3">
                    <p class="text-xs text-subtext">
                        {{ __('Your email address is unverified.') }}
                        <button form="send-verification" class="ml-1 underline text-[#0096c7] hover:text-[#0077b6]">
                            {{ __('Click here to re-send the verification email.') }}
                        </button>
                    </p>
                    @if (session('status') === 'verification-link-sent')
                        <p class="text-xs font-medium text-[#0096c7] mt-2">
                            {{ __('A new verification link has been sent to your email address.') }}
                        </p>
                    @endif
                </div>
            @endif
        @if (session('status') === 'profile-updated')
            <div x-data="{ show: true }" x-show="show" x-transition class="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    <span>Informasi profil Anda berhasil diperbarui!</span>
                </div>
                <button type="button" @click="show = false" class="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 text-xs font-bold">✕</button>
            </div>
        @endif

        <div class="pt-2 flex justify-end">
            <button type="submit" class="px-8 py-3 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase font-extrabold tracking-wider rounded-none transition-all shadow-md">
                {{ __('Save') }}
            </button>
        </div>
    </form>
</section>
