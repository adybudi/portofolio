<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Internal Tools Registry
    |--------------------------------------------------------------------------
    |
    | Tools that run inside this application (client-side processing) and are
    | listed on the /tools hub. External tools keep using the Tool model.
    |
    */

    'tools' => [
        [
            'slug' => 'merge-pdf',
            'name' => 'Merge PDF',
            'description' => 'Gabungkan beberapa file PDF menjadi satu dokumen langsung di browser. File tidak pernah diunggah ke server.',
            'category' => 'PDF',
            'route' => 'tools.merge-pdf',
            'keywords' => 'merge pdf, gabung pdf, combine pdf, satukan pdf',
        ],
        [
            'slug' => 'compress-image',
            'name' => 'Image Compressor',
            'description' => 'Kompres dan perkecil ukuran gambar JPG, PNG, atau WebP langsung di browser. Tanpa upload, tanpa antre.',
            'category' => 'Image',
            'route' => 'tools.compress-image',
            'keywords' => 'compress image, kompres gambar, perkecil foto, optimize image',
        ],
    ],

];
