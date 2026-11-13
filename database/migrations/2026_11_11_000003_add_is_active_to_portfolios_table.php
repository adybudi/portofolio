<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Hide selected projects without deleting their data.
     */
    public function up(): void
    {
        if (!Schema::hasColumn('portfolios', 'is_active')) {
            Schema::table('portfolios', function (Blueprint $table) {
                $table->boolean('is_active')->default(true)->after('is_featured');
            });
        }

        DB::table('portfolios')
            ->whereIn('slug', [
                'sikat-api-badung',
                'sistem-pemantauan-mobil-damkar',
                'kearsipan-pada-kantor-desa-petang',
                'kerja-praktek-kemenkumham',
                'pencatatan-seragam-kepolisian',
                'pemeriksaan-damkar',
            ])
            ->update(['is_active' => false]);
    }

    public function down(): void
    {
        if (Schema::hasColumn('portfolios', 'is_active')) {
            Schema::table('portfolios', function (Blueprint $table) {
                $table->dropColumn('is_active');
            });
        }
    }
};
