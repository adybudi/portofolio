<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
{
    public function index()
    {
        $experiences = Experience::orderBy('order', 'asc')->latest()->get();
        return view('admin.experiences.index', compact('experiences'));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'period' => 'required|string|max:100',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        Experience::create($validated);

        return redirect()->route('admin.experiences.index')->with('success', 'Pengalaman karir berhasil ditambahkan.');
    }

    public function update(Request $request, Experience $experience)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'company' => 'required|string|max:255',
            'period' => 'required|string|max:100',
            'description' => 'nullable|string',
            'order' => 'nullable|integer',
        ]);

        $experience->update($validated);

        return redirect()->route('admin.experiences.index')->with('success', 'Pengalaman karir berhasil diperbarui.');
    }

    public function destroy(Experience $experience)
    {
        $experience->delete();
        return redirect()->route('admin.experiences.index')->with('success', 'Pengalaman karir berhasil dihapus.');
    }
}
