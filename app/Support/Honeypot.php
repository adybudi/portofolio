<?php

namespace App\Support;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

/**
 * Encrypted time-based honeypot used by public forms.
 *
 * hp_time  : encrypted submission timestamp.
 * hp_check : HMAC of hp_time so tampered tokens are rejected early.
 */
class Honeypot
{
    public const MIN_SECONDS = 3;

    public const MAX_SECONDS = 7200;

    /**
     * @return array{hp_time: string, hp_check: string}
     */
    public static function fields(?int $timestamp = null): array
    {
        $encrypted = Crypt::encryptString((string) ($timestamp ?? time()));

        return [
            'hp_time' => $encrypted,
            'hp_check' => self::check($encrypted),
        ];
    }

    public static function passes(Request $request): bool
    {
        if ($request->filled('website_url')) {
            return false;
        }

        $encrypted = (string) $request->input('hp_time', '');
        $check = (string) $request->input('hp_check', '');

        if ($encrypted === '' || $check === '') {
            return false;
        }

        if (! hash_equals(self::check($encrypted), $check)) {
            return false;
        }

        try {
            $timestamp = (int) Crypt::decryptString($encrypted);
        } catch (\Throwable) {
            return false;
        }

        $age = time() - $timestamp;

        return $age >= self::MIN_SECONDS && $age <= self::MAX_SECONDS;
    }

    private static function check(string $encrypted): string
    {
        return hash_hmac('sha256', $encrypted, (string) config('app.key'));
    }
}
