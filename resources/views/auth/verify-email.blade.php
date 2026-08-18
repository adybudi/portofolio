<x-guest-layout>
    <div class="mb-8 space-y-2">
        <div class="text-[10px] uppercase font-bold tracking-[0.25em] text-[#0096c7]">
            Verification
        </div>
        <h1 class="font-display text-4xl font-extrabold text-heading uppercase tracking-tight leading-none">
            Verify Email
        </h1>
        <div class="accent-line"></div>
    </div>

    <div class="mb-6">
        <p class="text-xs text-subtext leading-relaxed">
            {{ __('Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.') }}
        </p>
    </div>

    @if (session('status') == 'verification-link-sent')
        <div class="mb-6 p-4 border-l-4 border-l-[#0096c7] bg-[#0096c7]/5">
            <p class="text-xs font-medium text-[#0096c7]">
                {{ __('A new verification link has been sent to the email address you provided during registration.') }}
            </p>
        </div>
    @endif

    <div class="flex flex-col gap-3">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf
            <button type="submit" class="w-full px-6 py-3.5 bg-[#0096c7] hover:bg-[#0077b6] text-white text-xs uppercase tracking-widest font-bold rounded-none transition-all shadow-md">
                {{ __('Resend Verification Email') }}
            </button>
        </form>
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="w-full px-6 py-3.5 border border-slate-300 dark:border-slate-700 text-heading text-xs uppercase tracking-widest font-bold rounded-none transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                {{ __('Log Out') }}
            </button>
        </form>
    </div>
</x-guest-layout>
