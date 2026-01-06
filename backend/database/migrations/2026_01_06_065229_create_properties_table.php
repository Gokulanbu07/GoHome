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
    Schema::create('properties', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the owner
        $table->string('title');
        $table->text('description');
        $table->string('type'); // e.g., Apartment, Villa, House
        $table->decimal('price', 15, 2);
        $table->string('location');
        $table->integer('bedrooms');
        $table->integer('bathrooms');
        $table->string('image')->nullable();
        $table->enum('status', ['available', 'sold', 'rented'])->default('available');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
