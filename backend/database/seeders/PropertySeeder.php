<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
{
    \App\Models\Property::create([
        'user_id' => 1, // Make sure you have a user with ID 1
        'title' => 'Modern Apartment in Downtown',
        'description' => 'A beautiful 2-bedroom apartment with a city view.',
        'type' => 'Apartment',
        'price' => 1500.00,
        'location' => 'New York, NY',
        'bedrooms' => 2,
        'bathrooms' => 1,
        'status' => 'available'
    ]);

    \App\Models\Property::create([
        'user_id' => 1,
        'title' => 'Luxury Villa with Pool',
        'description' => 'Spacious 4-bedroom villa with a private garden and pool.',
        'type' => 'Villa',
        'price' => 5000.00,
        'location' => 'Miami, FL',
        'bedrooms' => 4,
        'bathrooms' => 3,
        'status' => 'available'
    ]);
}
}
