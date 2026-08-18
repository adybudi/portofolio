<?php

use App\Services\ImageUploadService;

if (!function_exists('uploaded_asset')) {
    /**
     * Return public URL for an uploaded file path with automatic storage resolution and fallback.
     */
    function uploaded_asset(?string $path, string $fallback = 'uploads/placeholder.jpg'): string
    {
        return ImageUploadService::url($path, $fallback);
    }
}
