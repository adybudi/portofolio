<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Services\ImageUploadService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of products.
     */
    public function index()
    {
        $products = Product::orderBy('order', 'asc')->latest()->paginate(10);
        return view('admin.products.index', compact('products'));
    }

    /**
     * Show form to create a new product.
     */
    public function create()
    {
        return view('admin.products.create');
    }

    /**
     * Store a newly created product in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'category' => 'nullable|string|max:100',
            'link' => 'nullable|url|max:500',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_active' => 'nullable|boolean',
            'order' => 'nullable|integer',
        ]);

        $title = $validated['title'] ?? null;
        $slug = !empty($title) 
            ? Str::slug($title) . '-' . Str::random(5) 
            : 'product-' . time() . '-' . Str::random(5);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = ImageUploadService::store($request->file('image'), 'products');
        }

        Product::create([
            'title' => $title,
            'slug' => $slug,
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'] ?? null,
            'category' => $validated['category'] ?? null,
            'link' => $validated['link'] ?? null,
            'image_path' => $imagePath,
            'is_active' => $request->has('is_active'),
            'order' => $validated['order'] ?? 0,
        ]);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    /**
     * Show form to edit an existing product.
     */
    public function edit(Product $product)
    {
        return view('admin.products.edit', compact('product'));
    }

    /**
     * Update the specified product in storage.
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'title' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric|min:0',
            'category' => 'nullable|string|max:100',
            'link' => 'nullable|url|max:500',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:5120|dimensions:min_width=10,min_height=10,max_width=6000,max_height=6000',
            'is_active' => 'nullable|boolean',
            'order' => 'nullable|integer',
        ]);

        $imagePath = ImageUploadService::update(
            $request->file('image'),
            'products',
            $product->image_path
        );

        $title = $validated['title'] ?? null;

        $product->update([
            'title' => $title,
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'] ?? null,
            'category' => $validated['category'] ?? null,
            'link' => $validated['link'] ?? null,
            'image_path' => $imagePath,
            'is_active' => $request->has('is_active'),
            'order' => $validated['order'] ?? 0,
        ]);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil diperbarui.');
    }

    /**
     * Remove the specified product from storage.
     */
    public function destroy(Product $product)
    {
        $oldImagePath = $product->image_path;
        $product->delete();
        ImageUploadService::delete($oldImagePath);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil dihapus.');
    }
}
