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
            if (Schema::hasColumn('users', 'profile_image')) {
            $table->dropColumn('profile_image');
        }
        if (Schema::hasColumn('users', 'phone')) {
            $table->dropColumn('phone');
        }

        // 2. Ensure phone_number is there and verified_at is handled
        if (!Schema::hasColumn('users', 'phone_number')) {
            $table->string('phone_number')->nullable();
        }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('profile_image')->nullable();
        $table->string('phone')->nullable();
        });
    }
};
