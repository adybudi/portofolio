<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Add the missing certification issue date column so backup imports no
     * longer silently drop that field.
     */
    public function up(): void
    {
        if (!Schema::hasColumn('certifications', 'issue_date')) {
            Schema::table('certifications', function (Blueprint $table) {
                $table->string('issue_date')->nullable()->after('credential_url');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('certifications', 'issue_date')) {
            Schema::table('certifications', function (Blueprint $table) {
                $table->dropColumn('issue_date');
            });
        }
    }
};
