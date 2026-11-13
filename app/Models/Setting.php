<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Setting extends Model
{
    use HasFactory;

    /**
     * Cache key for the full key-value settings map.
     */
    private const CACHE_KEY = 'settings.map';

    /**
     * Container key for the per-request memoized settings map.
     */
    private const RUNTIME_KEY = 'settings.map.runtime';

    /**
     * How long the settings map may stay cached (seconds).
     * Admin writes invalidate it immediately; the TTL only protects
     * against stale data when the table is edited outside the app.
     */
    private const CACHE_TTL = 3600;

    protected $fillable = [
        'key',
        'value',
    ];

    protected static function booted(): void
    {
        static::saved(fn () => static::flushCache());
        static::deleted(fn () => static::flushCache());
    }

    /**
     * Retrieve the full settings map.
     *
     * The persistent cache keeps it to one cache lookup per request, while the
     * scoped container binding guarantees all Setting::get() calls inside the
     * same request share a single array (no N+1 queries).
     *
     * @return array<string, string|null>
     */
    public static function map(): array
    {
        if (!app()->bound(self::RUNTIME_KEY)) {
            app()->scoped(self::RUNTIME_KEY, function () {
                return Cache::remember(
                    self::CACHE_KEY,
                    self::CACHE_TTL,
                    fn () => static::query()->pluck('value', 'key')->all()
                );
            });
        }

        return app(self::RUNTIME_KEY);
    }

    /**
     * Retrieve a setting value by key.
     */
    public static function get(string $key, mixed $default = null): mixed
    {
        return static::map()[$key] ?? $default;
    }

    /**
     * Set or update a setting value by key.
     */
    public static function set(string $key, mixed $value): self
    {
        return static::updateOrCreate(
            ['key' => $key],
            ['value' => $value]
        );
    }

    /**
     * Clear both the persistent and per-request settings maps.
     */
    public static function flushCache(): void
    {
        Cache::forget(self::CACHE_KEY);

        if (app()->bound(self::RUNTIME_KEY)) {
            app()->forgetInstance(self::RUNTIME_KEY);
        }
    }
}
