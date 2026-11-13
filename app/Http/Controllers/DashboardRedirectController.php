<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;

class DashboardRedirectController extends Controller
{
    /**
     * Send admins to the CMS dashboard and regular users back to the public site.
     */
    public function __invoke(): RedirectResponse
    {
        return auth()->user()?->is_admin
            ? redirect()->route('admin.dashboard')
            : redirect()->route('home');
    }
}
