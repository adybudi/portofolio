<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Rules\TurnstileRule;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): View
    {
        return view('auth.forgot-password');
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => ['required', 'email'],
            'cf-turnstile-response' => [new TurnstileRule],
        ]);

        // Attempt delivery, but do not reveal whether the email exists.
        Password::sendResetLink($request->only('email'));

        // Always return the same response so registered and unknown emails
        // cannot be distinguished (email enumeration mitigation).
        return back()->with('status', 'Jika alamat email Anda terdaftar, instruksi pemulihan telah dikirimkan.');
    }
}
