<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckMaintenanceMode
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isMaintenance = Setting::get('maintenance_mode_enabled', '0') === '1';

        if ($isMaintenance) {
            // Bypass for Authenticated Admin
            if ($request->user() && $request->user()->is_admin) {
                return $next($request);
            }

            // Bypass for Admin routes, Auth routes, Health checks & asset requests
            if (
                $request->is('admin*') ||
                $request->is('login') ||
                $request->is('logout') ||
                $request->is('forgot-password') ||
                $request->is('reset-password*') ||
                $request->is('password/*') ||
                $request->is('up') ||
                $request->is('build/*') ||
                $request->is('uploads/*') ||
                $request->is('favicon.ico') ||
                $request->is('_debugbar*')
            ) {
                return $next($request);
            }

            // Handle API / JSON requests
            if ($request->expectsJson()) {
                return response()->json([
                    'status' => 'maintenance',
                    'message' => Setting::get('maintenance_message', 'Kami sedang melakukan pembaruan sistem. Silakan kembali lagi nanti.'),
                    'until' => Setting::get('maintenance_until', ''),
                ], 503, ['Retry-After' => '300']);
            }

            // Return custom editorial maintenance view with HTTP 503
            return response()->view('maintenance', [
                'title' => Setting::get('maintenance_title', 'Situs Sedang Dalam Pemeliharaan'),
                'message' => Setting::get('maintenance_message', 'Kami sedang melakukan pembaruan sistem untuk memberikan pengalaman yang lebih baik. Silakan kembali lagi beberapa saat lagi.'),
                'until' => Setting::get('maintenance_until', ''),
                'site_name' => Setting::get('site_name', 'Ady Budisantika — Portofolio & Direktori Tools'),
                'email' => Setting::get('email', 'ady.budisantika@gmail.com'),
                'github_url' => Setting::get('github_url', 'https://github.com/adybudi'),
                'linkedin_url' => Setting::get('linkedin_url', 'https://www.linkedin.com/in/ady-budisantika-2a6814335/'),
            ], 503)->header('Retry-After', '300');
        }

        return $next($request);
    }
}

