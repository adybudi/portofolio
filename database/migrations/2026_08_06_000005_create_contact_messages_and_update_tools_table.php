<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Create contact_messages table
        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('subject')->nullable();
            $table->text('message');
            $table->boolean('is_read')->default(false);
            $table->timestamps();
        });

        // 2. Add clicks_count to tools table
        if (!Schema::hasColumn('tools', 'clicks_count')) {
            Schema::table('tools', function (Blueprint $table) {
                $table->unsignedBigInteger('clicks_count')->default(0)->after('is_active');
            });
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_messages');

        if (Schema::hasColumn('tools', 'clicks_count')) {
            Schema::table('tools', function (Blueprint $table) {
                $table->dropColumn('clicks_count');
            });
        }
    }
};
