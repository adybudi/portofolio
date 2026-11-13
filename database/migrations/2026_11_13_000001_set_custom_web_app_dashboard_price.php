<?php

use App\Models\Service;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Set the Custom Web App & Dashboard starting price to Rp 10.000.000.
     */
    public function up(): void
    {
        Service::where('slug', 'custom-web-app-dashboard')->update([
            'price' => 10000000,
            'has_discount' => false,
            'discount_price' => null,
        ]);
    }

    public function down(): void
    {
        Service::where('slug', 'custom-web-app-dashboard')->update([
            'price' => 12000000,
        ]);
    }
};
