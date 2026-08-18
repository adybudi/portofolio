<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TurnstileRule implements ValidationRule
{
    /**
     * Indicates whether the rule should be evaluated even when the attribute is empty.
     */
    public bool $implicit = true;

    /**
     * Run the validation rule.
     *
     * @param  Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!config('services.turnstile.enabled')) {
            return;
        }

        if (empty($value)) {
            $fail('Verifikasi keamanan Cloudflare Turnstile wajib diselesaikan.');
            return;
        }

        try {
            $response = Http::asForm()
                ->timeout(5)
                ->post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
                    'secret'   => config('services.turnstile.secret_key'),
                    'response' => $value,
                    'remoteip' => request()->ip(),
                ]);

            if (!$response->successful() || !$response->json('success')) {
                Log::warning('Cloudflare Turnstile validation failed', [
                    'errors' => $response->json('error-codes', []),
                    'ip'     => request()->ip(),
                ]);

                $fail('Verifikasi keamanan Cloudflare Turnstile gagal. Silakan coba lagi.');
            }
        } catch (\Throwable $e) {
            Log::error('Cloudflare Turnstile connection error', [
                'message' => $e->getMessage(),
                'ip'      => request()->ip(),
            ]);

            $fail('Tidak dapat memverifikasi captcha saat ini. Silakan coba beberapa saat lagi.');
        }
    }
}

