<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use Illuminate\Http\Request;

class CertificationController extends Controller
{
    public function index()
    {
        $certifications = Certification::orderBy('order', 'asc')->latest()->get();
        return view('admin.certifications.index', compact('certifications'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'icon' => 'nullable|string|max:10',
            'description' => 'nullable|string',
            'credential_url' => 'nullable|url|max:500',
            'order' => 'nullable|integer',
        ]);

        Certification::create($validated);

        return redirect()->route('admin.certifications.index')->with('success', 'Sertifikasi teknikal berhasil ditambahkan.');
    }

    public function update(Request $request, Certification $certification)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'issuer' => 'required|string|max:255',
            'icon' => 'nullable|string|max:10',
            'description' => 'nullable|string',
            'credential_url' => 'nullable|url|max:500',
            'order' => 'nullable|integer',
        ]);

        $certification->update($validated);

        return redirect()->route('admin.certifications.index')->with('success', 'Sertifikasi teknikal berhasil diperbarui.');
    }

    public function destroy(Certification $certification)
    {
        $certification->delete();
        return redirect()->route('admin.certifications.index')->with('success', 'Sertifikasi teknikal berhasil dihapus.');
    }
}
