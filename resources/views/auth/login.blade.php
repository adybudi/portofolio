<x-guest-layout>
    <div class="mb-8 space-y-2">
        <div class="text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7]">
            Welcome Back
        </div>
        <h1 class="font-display text-4xl font-extrabold text-heading uppercase tracking-tight leading-none">
            Sign In
        </h1>
        <div class="accent-line"></div>
    </div>

    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}" class="space-y-5">
        @csrf
        <!-- Email -->
        <div>
            <label for="email" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">{{ __('Email') }}</label>
            <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="username"
                   class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>
        <!-- Password -->
        <div>
            <label for="password" class="block text-[10px] font-extrabold uppercase tracking-widest text-subtext mb-2">{{ __('Password') }}</label>
            <input id="password" type="password" name="password" required autocomplete="current-password"
                   class="w-full px-4 py-3 bg-white dark:bg-[#131924] border border-slate-300 dark:border-slate-700 text-heading text-sm focus:outline-none focus:border-[#0096c7] transition-all rounded-none" />
            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>
        <!-- Remember Me -->
        <div class="flex items-center">
            <label for="remember_me" class="inline-flex items-center gap-2 cursor-pointer">
                <input id="remember_me" type="checkbox" name="remember" class="rounded-none border-slate-300 text-[#0096c7] focus:ring-[#0096c7]" />
                <span class="text-xs text-subtext font-medium">{{ __('Remember me') }}</span>
            </label>
        </div>
        <!-- Actions -->
        <div class="flex flex-col gap-4 pt-2">
            <button type="submit" class="w-full px-6 py-3.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase tracking-widest font-bold rounded-none transition-all shadow-md">
                {{ __('Sign In') }}
            </button>
            @if (Route::has('password.request'))
                <a href="{{ route('password.request') }}" class="text-center text-xs text-subtext hover:text-[#0096c7] transition-colors">
                    {{ __('Forgot your password?') }}
                </a>
            @endif
        </div>
    </form>
</x-guest-layout>
