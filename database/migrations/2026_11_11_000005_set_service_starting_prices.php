<?php

use App\Models\Service;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Use starting prices instead of fixed/promo prices.
     * The UI already renders these as "MULAI DARI".
     */
    public function up(): void
    {
        $prices = [
            'landing-page-company-profile-high-conversion' => 1750000,
            'company-profile-cms' => 6000000,
            'custom-web-app-dashboard' => 12000000,
            'ecommerce-store-payment-gateway' => 8000000,
            'restful-api-backend-integration' => 5000000,
            'website-speed-optimization' => 1500000,
            'figma-slicing-tailwind-blade' => 1500000,
            'bug-fixing-malware-maintenance' => 800000,
            'payment-gateway-whatsapp-integration' => 2500000,
            'vps-setup-migration' => 2000000,
        ];

        foreach ($prices as $slug => $price) {
            Service::where('slug', $slug)->update([
                'price' => $price,
                'has_discount' => false,
                'discount_price' => null,
            ]);
        }
    }

    public function down(): void
    {
        // Price alignment is intentionally not reverted.
    }
};
