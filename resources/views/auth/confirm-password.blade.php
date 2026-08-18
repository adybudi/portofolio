<x-guest-layout>
    <div class="mb-8 space-y-2">
        <div class="text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7]">
            Security Check
        </div>
        <h1 class="font-display text-4xl font-extrabold text-heading uppercase tracking-tight leading-none">
            Confirm Password
        </h1>
        <div class="accent-line"></div>
    </div>

    <div class="mb-6">
        <p class="text-xs text-subtext leading-relaxed">
            {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
        </p>
    </div>

    <form method="POST" action="{{ route('password.confirm') }}" class="space-y-5">
        @csrf
        <div>
            <label for="password" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">{{ __('Password') }}</label>
            <input id="password" type="password" name="password" required autocomplete="current-password" autofocus
                   class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>
        <div class="pt-2">
            <button type="submit" class="w-full px-6 py-3.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase tracking-widest font-bold rounded-none transition-all shadow-md">
                {{ __('Confirm') }}
            </button>
        </div>
    </form>
</x-guest-layout>
