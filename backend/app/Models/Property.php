<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $fillable = [
    'user_id',
    'title',
    'description',
    'type',
    'price',
    'location',
    'bedrooms',
    'bathrooms',
    'image',
    'status'
];
}
