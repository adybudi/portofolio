<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Services\ImageUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ServiceController extends Controller
{
    /**
     * Display a listing of services.
     */
    public function index()
    {
        $services = Service::orderBy('order', 'asc')->latest()->paginate(10);
        return view('admin.services.index', compact('services'));
    }

    /**
     * Show form to create a new service.
     */
    public function create()
    {
        return view('admin.services.create');
    }

    /**
     * Store a newly created service in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'          => 'required|string|max:255',
            'description'    => 'nullable|string',
            'price'          => 'nullable|numeric|min:0',
            'has_discount'   => 'nullable|boolean',
            'discount_price' => 'nullable|numeric|min:0',
            'image'          => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'features'       => 'nullable|array',
            'features.*'     => 'nullable|string|max:255',
            'is_active'      => 'nullable|boolean',
            'order'          => 'nullable|integer',
        ]);

        $slug = Str::slug($validated['title']) . '-' . Str::random(5);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = ImageUploadService::store($request->file('image'), 'services');
        }

        // Filter empty feature items
        $features = collect($validated['features'] ?? [])->filter()->values()->toArray();

        Service::create([
            'title'          => $validated['title'],
            'slug'           => $slug,
            'description'    => $validated['description'] ?? null,
            'price'          => $validated['price'] ?? null,
            'has_discount'   => $request->has('has_discount'),
            'discount_price' => $validated['discount_price'] ?? null,
            'image'          => $imagePath,
            'features'       => !empty($features) ? $features : null,
            'is_active'      => $request->has('is_active'),
            'order'          => $validated['order'] ?? 0,
        ]);

        return redirect()->route('admin.services.index')->with('success', 'Jasa berhasil ditambahkan.');
    }

    /**
     * Show form to edit an existing service.
     */
    public function edit(Service $service)
    {
        return view('admin.services.edit', compact('service'));
    }

    /**
     * Update the specified service in storage.
     */
    public function update(Request $request, Service $service)
    {
        $validated = $request->validate([
            'title'          => 'required|string|max:255',
            'description'    => 'nullable|string',
            'price'          => 'nullable|numeric|min:0',
            'has_discount'   => 'nullable|boolean',
            'discount_price' => 'nullable|numeric|min:0',
            'image'          => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'features'       => 'nullable|array',
            'features.*'     => 'nullable|string|max:255',
            'is_active'      => 'nullable|boolean',
            'order'          => 'nullable|integer',
        ]);

        $oldImagePath = $service->image;
        $newImagePath = $oldImagePath;

        if ($request->hasFile('image')) {
            $newImagePath = ImageUploadService::store($request->file('image'), 'services');
        }

        $features = collect($validated['features'] ?? [])->filter()->values()->toArray();

        $service->update([
            'title'          => $validated['title'],
            'description'    => $validated['description'] ?? null,
            'price'          => $validated['price'] ?? null,
            'has_discount'   => $request->has('has_discount'),
            'discount_price' => $validated['discount_price'] ?? null,
            'image'          => $newImagePath,
            'features'       => !empty($features) ? $features : null,
            'is_active'      => $request->has('is_active'),
            'order'          => $validated['order'] ?? 0,
        ]);

        if ($request->hasFile('image') && $oldImagePath && $oldImagePath !== $newImagePath) {
            ImageUploadService::delete($oldImagePath);
        }

        return redirect()->route('admin.services.index')->with('success', 'Jasa berhasil diperbarui.');
    }

    /**
     * Remove the specified service from storage.
     */
    public function destroy(Service $service)
    {
        $oldImagePath = $service->image;
        $service->delete();
        ImageUploadService::delete($oldImagePath);

        return redirect()->route('admin.services.index')->with('success', 'Jasa berhasil dihapus.');
    }

    /**
     * Toggle active status.
     */
    public function toggleStatus(Service $service)
    {
        $service->update(['is_active' => !$service->is_active]);
        $status = $service->is_active ? 'diaktifkan' : 'dinonaktifkan';
        return redirect()->route('admin.services.index')->with('success', "Jasa berhasil {$status}.");
    }
}
