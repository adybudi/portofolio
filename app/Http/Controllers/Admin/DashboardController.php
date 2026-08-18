<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use App\Models\Service;
use App\Models\Tool;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'portfolios_count' => Portfolio::count(),
            'services_count'   => Service::count(),
            'tools_count'      => Tool::count(),
            'latest_portfolios'=> Portfolio::latest()->take(5)->get(),
            'latest_tools'     => Tool::latest()->take(5)->get(),
        ];

        return view('admin.dashboard', compact('stats'));
    }
}
