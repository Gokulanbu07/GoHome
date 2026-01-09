<?php

namespace App\Http\Controllers\Api;

// We change this to the core Laravel routing class to fix the red underline
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Property;

class PropertyController extends Controller
{
    public function index()
    {
        return response()->json(Property::all());
    }

    public function show($id)
    {
        $property = Property::find($id);
        return $property ? response()->json($property) : response()->json(['message' => 'Not Found'], 404);
    }
}
