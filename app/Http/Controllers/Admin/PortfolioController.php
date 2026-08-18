<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Services\ImageUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::latest()->paginate(10);
        return view('admin.portfolios.index', compact('portfolios'));
    }

    public function create()
    {
        return view('admin.portfolios.create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'tech_stack' => 'nullable|string|max:255',
            'description' => 'required|string',
            'project_url' => 'nullable|url|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_featured' => 'nullable|boolean',
        ]);

        $slug = Str::slug($validated['title']) . '-' . Str::random(5);
        $imagePath = null;

        if ($request->hasFile('image')) {
            $imagePath = ImageUploadService::store($request->file('image'), 'portfolios');
        }

        Portfolio::create([
            'title' => $validated['title'],
            'slug' => $slug,
            'category' => $validated['category'],
            'tech_stack' => $validated['tech_stack'] ?? null,
            'description' => $validated['description'],
            'project_url' => $validated['project_url'] ?? null,
            'image_path' => $imagePath,
            'is_featured' => $request->has('is_featured'),
        ]);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio created successfully.');
    }

    public function edit(Portfolio $portfolio)
    {
        return view('admin.portfolios.edit', compact('portfolio'));
    }

    public function update(Request $request, Portfolio $portfolio)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:100',
            'tech_stack' => 'nullable|string|max:255',
            'description' => 'required|string',
            'project_url' => 'nullable|url|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_featured' => 'nullable|boolean',
        ]);

        $imagePath = ImageUploadService::update(
            $request->file('image'),
            'portfolios',
            $portfolio->image_path
        );

        $portfolio->update([
            'title' => $validated['title'],
            'category' => $validated['category'],
            'tech_stack' => $validated['tech_stack'] ?? null,
            'description' => $validated['description'],
            'project_url' => $validated['project_url'] ?? null,
            'image_path' => $imagePath,
            'is_featured' => $request->has('is_featured'),
        ]);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio updated successfully.');
    }

    public function destroy(Portfolio $portfolio)
    {
        $oldImagePath = $portfolio->image_path;
        $portfolio->delete();
        ImageUploadService::delete($oldImagePath);

        return redirect()->route('admin.portfolios.index')->with('success', 'Portfolio deleted successfully.');
    }
}
