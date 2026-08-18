<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use App\Rules\TurnstileRule;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Store incoming contact message.
     */
    public function store(Request $request)
    {
        // Honeypot check for anti-bot spam
        if ($request->filled('website_url')) {
            return back()->with('contact_success', 'Pesan Anda telah berhasil terkirim! Terima kasih telah menghubungi saya.');
        }

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|max:2000',
            'cf-turnstile-response' => [new TurnstileRule],
        ]);

        ContactMessage::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'subject' => $validated['subject'] ?? null,
            'message' => $validated['message'],
        ]);

        return back()->with('contact_success', 'Pesan Anda telah berhasil terkirim! Terima kasih telah menghubungi saya.');
    }
}
