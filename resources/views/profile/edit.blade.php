<x-layouts.admin title="Profile" header="Profile & Account Settings">
    <div class="max-w-4xl mx-auto space-y-8">
        <div class="mb-2">
            <h2 class="font-display text-2xl font-bold text-heading uppercase">Kelola Akun & Profil</h2>
            <p class="text-xs text-subtext mt-1">Perbarui informasi akun, password, dan kelola penghapusan akun.</p>
        </div>

        <!-- Profile Information -->
        <div class="editorial-card p-6 sm:p-8">
            <div class="space-y-6">
                @include('profile.partials.update-profile-information-form')
            </div>
        </div>

        <!-- Update Password -->
        <div class="editorial-card p-6 sm:p-8">
            <div class="space-y-6">
                @include('profile.partials.update-password-form')
            </div>
        </div>

        <!-- Delete Account -->
        <div class="editorial-card p-6 sm:p-8 border-l-4 border-l-rose-500">
            <div class="space-y-6">
                @include('profile.partials.delete-user-form')
            </div>
        </div>
    </div>
</x-layouts.admin>
