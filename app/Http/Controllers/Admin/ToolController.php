<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tool;
use App\Services\ImageUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ToolController extends Controller
{
    public function index()
    {
        $tools = Tool::latest()->paginate(10);
        return view('admin.tools.index', compact('tools'));
    }

    public function create()
    {
        return view('admin.tools.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'description' => 'required|string',
            'url' => 'required|url|max:255',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_active' => 'nullable|boolean',
        ]);

        $slug = Str::slug($validated['name']) . '-' . Str::random(5);

        $iconPath = null;
        if ($request->hasFile('icon')) {
            $iconPath = ImageUploadService::store($request->file('icon'), 'tools');
        }

        Tool::create([
            'name' => $validated['name'],
            'slug' => $slug,
            'category' => $validated['category'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'icon_path' => $iconPath,
            'is_active' => $request->has('is_active'),
        ]);

        return redirect()->route('admin.tools.index')->with('success', 'Tool created successfully.');
    }

    public function edit(Tool $tool)
    {
        return view('admin.tools.edit', compact('tool'));
    }

    public function update(Request $request, Tool $tool)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'description' => 'required|string',
            'url' => 'required|url|max:255',
            'icon' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_active' => 'nullable|boolean',
        ]);

        $oldIconPath = $tool->icon_path;
        $newIconPath = $oldIconPath;

        if ($request->hasFile('icon')) {
            $newIconPath = ImageUploadService::store($request->file('icon'), 'tools');
        }

        $tool->update([
            'name' => $validated['name'],
            'category' => $validated['category'],
            'description' => $validated['description'],
            'url' => $validated['url'],
            'icon_path' => $newIconPath,
            'is_active' => $request->has('is_active'),
        ]);

        if ($request->hasFile('icon') && $oldIconPath && $oldIconPath !== $newIconPath) {
            ImageUploadService::delete($oldIconPath);
        }

        return redirect()->route('admin.tools.index')->with('success', 'Tool updated successfully.');
    }

    public function destroy(Tool $tool)
    {
        $oldIconPath = $tool->icon_path;
        $tool->delete();
        ImageUploadService::delete($oldIconPath);

        return redirect()->route('admin.tools.index')->with('success', 'Tool deleted successfully.');
    }
}
