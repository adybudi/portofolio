<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Strict HTTP(S) URL validation.
 *
 * Laravel's "url" rule relies on filter_var(), which accepts exotic schemes
 * such as "javascript://host/..." and "data://...". Those values are unsafe
 * when rendered into href/src attributes, so we whitelist http/https only.
 */
class SafeHttpUrl implements ValidationRule
{
    public function __construct(
        private readonly ?string $requiredHost = null,
        private readonly bool $allowSubdomains = false,
    ) {}

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if ($value === null || $value === '') {
            return;
        }

        if (! is_string($value)) {
            $fail('URL tidak valid.');

            return;
        }

        $parts = parse_url(trim($value));

        if (
            $parts === false ||
            empty($parts['scheme']) ||
            empty($parts['host']) ||
            ! in_array(strtolower($parts['scheme']), ['http', 'https'], true)
        ) {
            $fail('URL harus berupa alamat http:// atau https:// yang valid.');

            return;
        }

        if ($this->requiredHost !== null) {
            $host = strtolower($parts['host']);
            $required = strtolower($this->requiredHost);
            $matches = $host === $required
                || ($this->allowSubdomains && str_ends_with($host, '.'.$required));

            if (! $matches) {
                $fail("URL harus berasal dari domain {$this->requiredHost}.");
            }
        }
    }
}
