<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
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
        ]);

        ContactMessage::create($validated);

        return back()->with('contact_success', 'Pesan Anda telah berhasil terkirim! Terima kasih telah menghubungi saya.');
    }
}
