<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageUploadService
{
    /**
     * Allowed image extensions.
     */
    protected const ALLOWED_EXTENSIONS = ['jpeg', 'jpg', 'png', 'webp'];

    /**
     * Forbidden extension list to explicitly reject.
     */
    protected const FORBIDDEN_EXTENSIONS = [
        'php', 'phtml', 'php3', 'php4', 'php5', 'phps', 'phar', 'inc',
        'html', 'htm', 'js', 'svg', 'sh', 'bash', 'exe', 'cgi', 'pl', 'py', 'rb',
    ];

    /**
     * Store an uploaded image safely on the 'public' disk and sync to public_path.
     *
     * @param UploadedFile $file
     * @param string $subdir
     * @return string Relative path stored (e.g. 'uploads/portfolios/uuid.webp')
     */
    public static function store(UploadedFile $file, string $subdir): string
    {
        // 1. Strict Subdirectory Sanitization (Prevent path traversal)
        $cleanSubdir = preg_replace('/[^a-zA-Z0-9_\-]/', '', $subdir);
        if (empty($cleanSubdir)) {
            $cleanSubdir = 'general';
        }
        $folderPath = 'uploads/' . $cleanSubdir;

        // 2. Strict File Content, Extension & MIME Verification
        $ext = strtolower($file->guessExtension() ?: $file->getClientOriginalExtension());
        if (!in_array($ext, self::ALLOWED_EXTENSIONS, true)) {
            throw new \InvalidArgumentException("Ekstensi file [{$ext}] tidak diizinkan. Hanya JPEG, PNG, dan WEBP yang diperbolehkan.");
        }

        self::verifyImageContent($file);

        // 3. Generate Random Server-Side Filename (UUID) - Never use original filename
        $filename = Str::uuid()->toString() . '.' . $ext;

        // 4. Save using explicit Storage::disk('public')
        $storedPath = $file->storeAs($folderPath, $filename, 'public');

        // 5. Shared Hosting Sync (Direct copy to public_path for environments without symlink)
        try {
            $targetDir = public_path($folderPath);
            if (!file_exists($targetDir)) {
                @mkdir($targetDir, 0755, true);
            }
            if (file_exists($file->getRealPath())) {
                @copy($file->getRealPath(), $targetDir . '/' . $filename);
            }
        } catch (\Throwable $e) {
            // Continue gracefully if public_path copy is restricted
        }

        return $storedPath;
    }

    /**
     * Safely delete a file from Storage::disk('public') and public_path.
     *
     * @param string|null $path
     */
    public static function delete(?string $path): void
    {
        if (empty($path)) {
            return;
        }

        // Path Traversal Security Check - Protect system files outside uploads directory
        if (str_contains($path, '..') || str_contains($path, "\\") || Str::startsWith($path, '/')) {
            return;
        }

        // Delete from Storage::disk('public')
        if (Storage::disk('public')->exists($path)) {
            Storage::disk('public')->delete($path);
        }

        // Delete from direct public_path('uploads/...')
        if (Str::startsWith($path, 'uploads/') && file_exists(public_path($path))) {
            @unlink(public_path($path));
        }
    }

    /**
     * Strict image verification checking MIME, extensions, double extension, and GD / getimagesize.
     */
    public static function verifyImageContent(UploadedFile $file): void
    {
        if (!$file->isValid()) {
            throw new \InvalidArgumentException('File upload tidak valid atau mengalami kerusakan.');
        }

        $mime = strtolower($file->getMimeType() ?: '');
        $clientExt = strtolower($file->getClientOriginalExtension());
        $originalName = strtolower($file->getClientOriginalName());

        // Reject forbidden extensions & SVG/HTML/JS MIMEs
        if (in_array($clientExt, self::FORBIDDEN_EXTENSIONS, true) ||
            str_contains($mime, 'svg') ||
            str_contains($mime, 'html') ||
            str_contains($mime, 'javascript') ||
            str_contains($mime, 'php')) {
            throw new \InvalidArgumentException('Tipe file atau ekstensi tidak diizinkan. Hanya gambar (JPEG, PNG, WEBP) yang diperbolehkan.');
        }

        // Detect suspicious double extension tricks (e.g. malicious.php.jpg)
        foreach (self::FORBIDDEN_EXTENSIONS as $forbidden) {
            if (str_contains($originalName, '.' . $forbidden . '.')) {
                throw new \InvalidArgumentException("Nama berkas mencurigakan mengandung ekstensi ganda [.{$forbidden}]. Upload ditolak demi keamanan.");
            }
        }

        // Internal image inspection (GD getimagesize + finfo fallback)
        $imageInfo = @getimagesize($file->getRealPath());
        if ($imageInfo === false) {
            $finfo = new \finfo(FILEINFO_MIME_TYPE);
            $detectedMime = $finfo->file($file->getRealPath());
            if (!in_array($detectedMime, ['image/jpeg', 'image/png', 'image/webp'], true)) {
                throw new \InvalidArgumentException('File yang diunggah bukan berkas gambar yang valid (fake MIME atau file corrupt).');
            }
        } else {
            $validTypes = [IMAGETYPE_JPEG, IMAGETYPE_PNG];
            if (defined('IMAGETYPE_WEBP')) {
                $validTypes[] = IMAGETYPE_WEBP;
            } else {
                $validTypes[] = 18; // IMAGETYPE_WEBP fallback constant
            }

            if (!in_array($imageInfo[2], $validTypes, true)) {
                throw new \InvalidArgumentException('Format internal gambar tidak didukung. Hanya JPEG, PNG, dan WEBP yang diizinkan.');
            }

            // Dimension Bounds Verification (at least 1x1px, max 6000x6000px)
            if ($imageInfo[0] < 1 || $imageInfo[1] < 1 || $imageInfo[0] > 6000 || $imageInfo[1] > 6000) {
                throw new \InvalidArgumentException('Dimensi gambar di luar batas yang diizinkan (maksimal 6000x6000px).');
            }
        }
    }

    /**
     * Get public URL for image with automatic fallback if missing.
     */
    public static function url(?string $path, string $fallback = 'uploads/placeholder.jpg'): string
    {
        if (empty($path)) {
            return asset($fallback);
        }

        // 1. Direct public_path check (works even without storage:link symlink)
        if (file_exists(public_path($path))) {
            return asset($path);
        }

        // 2. Storage disk public check
        if (Storage::disk('public')->exists($path)) {
            return Storage::disk('public')->url($path);
        }

        return asset($fallback);
    }
}
