<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Models\User;
use App\Rules\TurnstileRule;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create()
    {
        if (!$this->isRegistrationEnabled()) {
            return redirect()->route('login')->with('status', 'Registrasi pengguna baru ditutup demi keamanan sistem.');
        }

        return view('auth.register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        if (!$this->isRegistrationEnabled()) {
            return redirect()->route('login')->with('status', 'Registrasi pengguna baru ditutup demi keamanan sistem.');
        }

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'cf-turnstile-response' => [new TurnstileRule],
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->is_admin = false;
        $user->can_manage_backup = false;
        $user->save();

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }

    /**
     * Check if public registration is explicitly allowed.
     */
    private function isRegistrationEnabled(): bool
    {
        // Public registration is disabled by default in production unless explicitly allowed via config
        if (app()->environment('production') && !config('auth.allow_public_registration_in_production', false)) {
            return false;
        }

        return Setting::get('enable_public_registration', '0') === '1';
    }
}
