<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SecurityHeaders
{
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        $response->headers->set('X-Content-Type-Options', 'nosniff');
        $response->headers->set('X-Frame-Options', 'SAMEORIGIN');
        $response->headers->set('Referrer-Policy', 'strict-origin-when-cross-origin');
        $response->headers->set('X-XSS-Protection', '0');
        $response->headers->set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');
        $response->headers->set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
        $response->headers->set('Cross-Origin-Resource-Policy', 'cross-origin');

        // Content-Security-Policy (CSP) configured to support Alpine.js, Spline 3D, Google Fonts, Cloudflare Turnstile, and local assets
        $csp = "default-src 'self'; " .
               "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com; " .
               "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " .
               "font-src 'self' https://fonts.gstatic.com data:; " .
               "img-src 'self' data: blob:; " .
               "frame-src 'self' https://my.spline.design https://challenges.cloudflare.com; " .
               "connect-src 'self' https://challenges.cloudflare.com; " .
               "frame-ancestors 'self'; " .
               "object-src 'none'; " .
               "base-uri 'self'; " .
               "form-action 'self';";

        // Allow Vite dev server assets (separate origin) while running `npm run dev`
        if (! app()->environment('production')) {
            $hotFile = public_path('hot');

            if (is_file($hotFile)) {
                $viteOrigin = rtrim(trim((string) file_get_contents($hotFile)), '/');

                if ($viteOrigin !== '') {
                    $viteWsOrigin = preg_replace('#^http#', 'ws', $viteOrigin);

                    $csp = str_replace(
                        [
                            "script-src 'self'",
                            "style-src 'self'",
                            "connect-src 'self' https://challenges.cloudflare.com",
                        ],
                        [
                            "script-src 'self' {$viteOrigin}",
                            "style-src 'self' {$viteOrigin}",
                            "connect-src 'self' https://challenges.cloudflare.com {$viteOrigin} {$viteWsOrigin}",
                        ],
                        $csp
                    );
                }
            }
        }

        $response->headers->set('Content-Security-Policy', $csp);

        if (app()->environment('production') || $request->isSecure()) {
            $response->headers->set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
        }

        return $response;
    }
}
