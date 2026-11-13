<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Render a minimal XML sitemap for the public pages.
     */
    public function __invoke(): Response
    {
        $urls = [
            ['loc' => route('home'), 'changefreq' => 'weekly', 'priority' => '1.0'],
            ['loc' => route('portfolio.index'), 'changefreq' => 'weekly', 'priority' => '0.9'],
            ['loc' => route('services.index'), 'changefreq' => 'weekly', 'priority' => '0.9'],
            ['loc' => route('products.index'), 'changefreq' => 'weekly', 'priority' => '0.8'],
            ['loc' => route('tools.index'), 'changefreq' => 'weekly', 'priority' => '0.8'],
        ];

        $xml = view('sitemap', [
            'urls' => $urls,
            'lastmod' => now()->toAtomString(),
        ])->render();

        return response($xml, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8',
        ]);
    }
}
