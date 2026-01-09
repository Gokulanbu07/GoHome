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
        Schema::table('users', function (Blueprint $table) {
        // Drop the old unwanted columns ONLY if they exist
        if (Schema::hasColumn('users', 'phone')) {
            $table->dropColumn('phone');
        }
        if (Schema::hasColumn('users', 'profile_image')) {
            $table->dropColumn('profile_image');
        }

        // Add phone_number ONLY if it does NOT exist
        if (!Schema::hasColumn('users', 'phone_number')) {
            $table->string('phone_number')->nullable();
        }

        // Add role ONLY if it does NOT exist
        if (!Schema::hasColumn('users', 'role')) {
            $table->string('role')->default('user');
        }
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
