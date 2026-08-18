<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Symfony\Component\HttpFoundation\Response;

class EnsureUserCanManageBackup
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!Gate::allows('manage-backup')) {
            abort(403, 'Akses ditolak. Anda tidak memiliki izin untuk mengelola backup sistem.');
        }

        return $next($request);
    }
}
