<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use App\Models\Experience;
use App\Models\Portfolio;
use App\Models\Product;
use App\Models\Service;
use App\Models\Setting;
use App\Models\Tool;
use App\Services\AuditLogger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class BackupController extends Controller
{
    /**
     * Export all CMS data as downloadable JSON stream.
     */
    public function exportBackup(Request $request)
    {
        Gate::authorize('manage-backup');

        $backupData = [
            'exported_at' => now()->toIso8601String(),
            'app' => 'Portofolio & Tools Hub',
            'portfolios' => Portfolio::all(),
            'products' => Product::all(),
            'services' => Service::all(),
            'tools' => Tool::all(),
            'experiences' => Experience::all(),
            'certifications' => Certification::all(),
            'settings' => Setting::all(),
        ];

        $randomSuffix = Str::random(8);
        $filename = 'backup_portofolio_cms_' . date('Y_m_d_His') . '_' . $randomSuffix . '.json';

        AuditLogger::logBackupActivity('export', 'success', ['filename' => $filename]);

        return response()->streamDownload(function () use ($backupData) {
            echo json_encode($backupData, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
        }, $filename, [
            'Content-Type' => 'application/json',
            'Content-Disposition' => 'attachment; filename="' . $filename . '"',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    /**
     * Preview and validate uploaded backup file before destructive import.
     */
    public function previewImport(Request $request)
    {
        Gate::authorize('manage-backup');

        $request->validate([
            'backup_file' => 'required|file|mimes:json,txt|max:5120',
        ], [
            'backup_file.max' => 'Ukuran file backup tidak boleh melebihi 5MB.',
            'backup_file.mimes' => 'Format file backup harus berupa JSON.',
        ]);

        $file = $request->file('backup_file');
        $rawContent = file_get_contents($file->getRealPath());

        $content = json_decode($rawContent, true);
        if (json_last_error() !== JSON_ERROR_NONE || !is_array($content)) {
            AuditLogger::logBackupActivity('import_preview', 'failed', ['reason' => 'invalid_json']);
            return back()->withErrors(['backup_file' => 'File JSON backup tidak valid atau rusak.']);
        }

        // Validate structure
        $validKeys = ['portfolios', 'products', 'services', 'tools', 'experiences', 'certifications', 'settings'];
        $hasKey = false;
        foreach ($validKeys as $key) {
            if (isset($content[$key]) && is_array($content[$key])) {
                $hasKey = true;
                break;
            }
        }

        if (!$hasKey) {
            AuditLogger::logBackupActivity('import_preview', 'failed', ['reason' => 'invalid_structure']);
            return back()->withErrors(['backup_file' => 'Struktur file backup tidak sesuai spesifikasi sistem.']);
        }

        // Path Traversal Security Verification
        try {
            $this->validatePathTraversalSafety($content);
        } catch (\InvalidArgumentException $e) {
            AuditLogger::logBackupActivity('import_preview', 'failed', ['reason' => 'path_traversal_attempt', 'message' => $e->getMessage()]);
            return back()->withErrors(['backup_file' => 'File backup ditolak karena berisi path berbahaya (path traversal).']);
        }

        $summary = [
            'portfolios'     => count($content['portfolios'] ?? []),
            'products'       => count($content['products'] ?? []),
            'services'       => count($content['services'] ?? []),
            'tools'          => count($content['tools'] ?? []),
            'experiences'    => count($content['experiences'] ?? []),
            'certifications' => count($content['certifications'] ?? []),
            'settings'       => count($content['settings'] ?? []),
        ];

        session([
            'pending_backup_import' => $content,
            'pending_backup_token' => Str::random(32),
        ]);

        return view('admin.backup.confirm', compact('summary'));
    }

    /**
     * Perform destructive import inside DB transaction with password re-authentication.
     */
    public function importBackup(Request $request)
    {
        Gate::authorize('manage-backup');

        $request->validate([
            'password' => 'required|string',
        ], [
            'password.required' => 'Password konfirmasi wajib diisi untuk melakukan import.',
        ]);

        if (!Hash::check($request->password, auth()->user()->password)) {
            AuditLogger::logBackupActivity('import_auth', 'failed', ['reason' => 'invalid_password']);
            return back()->withErrors(['password' => 'Password konfirmasi salah. Prosedur import dibatalkan.']);
        }

        $content = session('pending_backup_import');
        if (!$content || !is_array($content)) {
            return redirect()->route('admin.settings.index')->withErrors(['backup_file' => 'Sesi import telah kedaluwarsa. Silakan upload ulang file backup.']);
        }

        try {
            DB::transaction(function () use ($content) {
                $allowedSettingKeys = [
                    'site_name', 'hero_title', 'hero_subtitle', 'about_text',
                    'github_url', 'linkedin_url', 'email', 'spline_embed_url',
                    'seo_keywords', 'seo_meta_desc', 'stat_years_experience',
                    'stat_projects_completed', 'stat_satisfied_clients', 'editorial_quote',
                    'show_portfolio_section', 'show_products_section', 'show_services_section',
                    'show_experience_section', 'show_certifications_section',
                    'show_contact_section',
                ];

                if (isset($content['settings']) && is_array($content['settings'])) {
                    foreach ($content['settings'] as $s) {
                        if (isset($s['key']) && in_array($s['key'], $allowedSettingKeys, true)) {
                            Setting::set($s['key'], $s['value'] ?? '');
                        }
                    }
                }

                if (isset($content['portfolios']) && is_array($content['portfolios'])) {
                    foreach ($content['portfolios'] as $p) {
                        if (isset($p['title'])) {
                            $slug = $p['slug'] ?? (Str::slug($p['title']) . '-' . Str::random(5));
                            Portfolio::updateOrCreate(['slug' => $slug], [
                                'title' => $p['title'],
                                'description' => $p['description'] ?? '',
                                'image_path' => $this->sanitizeFilePath($p['image_path'] ?? null),
                                'project_url' => $p['project_url'] ?? null,
                                'category' => $p['category'] ?? 'Web App',
                                'tech_stack' => $p['tech_stack'] ?? null,
                                'is_featured' => $p['is_featured'] ?? false,
                            ]);
                        }
                    }
                }

                if (isset($content['products']) && is_array($content['products'])) {
                    foreach ($content['products'] as $prod) {
                        $title = $prod['title'] ?? null;
                        $slug = $prod['slug'] ?? (!empty($title) ? (Str::slug($title) . '-' . Str::random(5)) : ('product-' . time() . '-' . Str::random(5)));
                        Product::updateOrCreate(['slug' => $slug], [
                            'title' => $title,
                            'description' => $prod['description'] ?? null,
                            'price' => $prod['price'] ?? null,
                            'category' => $prod['category'] ?? null,
                            'link' => $prod['link'] ?? null,
                            'image_path' => $this->sanitizeFilePath($prod['image_path'] ?? null),
                            'is_active' => $prod['is_active'] ?? true,
                            'order' => $prod['order'] ?? 0,
                        ]);
                    }
                }

                if (isset($content['services']) && is_array($content['services'])) {
                    foreach ($content['services'] as $srv) {
                        if (isset($srv['title'])) {
                            $slug = $srv['slug'] ?? (Str::slug($srv['title']) . '-' . Str::random(5));
                            Service::updateOrCreate(['slug' => $slug], [
                                'title' => $srv['title'],
                                'description' => $srv['description'] ?? null,
                                'price' => $srv['price'] ?? null,
                                'has_discount' => $srv['has_discount'] ?? false,
                                'discount_price' => $srv['discount_price'] ?? null,
                                'image' => $this->sanitizeFilePath($srv['image'] ?? null),
                                'features' => $srv['features'] ?? null,
                                'is_active' => $srv['is_active'] ?? true,
                                'order' => $srv['order'] ?? 0,
                            ]);
                        }
                    }
                }

                if (isset($content['tools']) && is_array($content['tools'])) {
                    foreach ($content['tools'] as $t) {
                        if (isset($t['name']) && isset($t['url'])) {
                            $slug = $t['slug'] ?? (Str::slug($t['name']) . '-' . Str::random(5));
                            Tool::updateOrCreate(['slug' => $slug], [
                                'name' => $t['name'],
                                'description' => $t['description'] ?? '',
                                'icon_path' => $this->sanitizeFilePath($t['icon_path'] ?? null),
                                'url' => $t['url'],
                                'category' => $t['category'] ?? 'Developer Utility',
                                'is_active' => $t['is_active'] ?? true,
                                'clicks_count' => $t['clicks_count'] ?? 0,
                            ]);
                        }
                    }
                }

                if (isset($content['experiences']) && is_array($content['experiences'])) {
                    foreach ($content['experiences'] as $exp) {
                        if (isset($exp['title']) && isset($exp['company'])) {
                            Experience::updateOrCreate([
                                'title' => $exp['title'],
                                'company' => $exp['company'],
                            ], [
                                'period' => $exp['period'] ?? '',
                                'description' => $exp['description'] ?? null,
                                'order' => $exp['order'] ?? 0,
                            ]);
                        }
                    }
                }

                if (isset($content['certifications']) && is_array($content['certifications'])) {
                    foreach ($content['certifications'] as $c) {
                        if (isset($c['name'])) {
                            Certification::updateOrCreate(['name' => $c['name']], [
                                'issuer' => $c['issuer'] ?? '',
                                'issue_date' => $c['issue_date'] ?? null,
                                'credential_url' => $c['credential_url'] ?? null,
                                'order' => $c['order'] ?? 0,
                            ]);
                        }
                    }
                }
            });

            session()->forget(['pending_backup_import', 'pending_backup_token']);
            AuditLogger::logBackupActivity('import_execute', 'success', ['status' => 'imported']);

            return redirect()->route('admin.settings.index')->with('success', 'Data backup berhasil di-import dan disinkronisasi ke sistem.');
        } catch (\Throwable $e) {
            session()->forget(['pending_backup_import', 'pending_backup_token']);
            AuditLogger::logBackupActivity('import_execute', 'failed', ['reason' => $e->getMessage()]);

            return redirect()->route('admin.settings.index')->withErrors(['backup_file' => 'Import gagal dilakukan dan database telah di-rollback: ' . $e->getMessage()]);
        }
    }

    /**
     * Inspect all path properties in JSON payload to prevent path traversal.
     */
    private function validatePathTraversalSafety(array $data): bool
    {
        array_walk_recursive($data, function ($value, $key) {
            if (is_string($value) && (str_contains($key, 'path') || str_contains($key, 'file'))) {
                if ($this->hasTraversalAttempt($value)) {
                    throw new \InvalidArgumentException("Path traversal attempt detected in key [{$key}]: {$value}");
                }
            }
        });

        return true;
    }

    private function hasTraversalAttempt(string $path): bool
    {
        if (empty($path)) {
            return false;
        }

        if (str_contains($path, '..') || str_contains($path, "\\") || Str::startsWith($path, '/')) {
            return true;
        }

        $forbiddenKeywords = ['.env', 'config/', 'storage/', 'vendor/', 'app/', 'routes/', 'bootstrap/', 'database/'];
        foreach ($forbiddenKeywords as $keyword) {
            if (str_contains(strtolower($path), $keyword)) {
                return true;
            }
        }

        return false;
    }

    private function sanitizeFilePath(?string $path): ?string
    {
        if (empty($path)) {
            return null;
        }

        if ($this->hasTraversalAttempt($path)) {
            throw new \InvalidArgumentException("Invalid media path: {$path}");
        }

        return $path;
    }
}
