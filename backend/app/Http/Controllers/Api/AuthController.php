<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'full_name' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'password' => 'required|string|min:6',
        'phone_number' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json(['success' => false, 'message' => $validator->errors()->first()], 422);
    }

    $user = User::create([
        'name' => $request->full_name,
        'email' => $request->email,
        'phone_number' => $request->phone_number,
        'password' => Hash::make($request->password),
        'role' => $request->role ?? 'user',
        'email_verified_at' => now(),
    ]);

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'success' => true,
        'user' => $user,
        'access_token' => $token,
        'token_type' => 'Bearer',
    ]);
}

public function login(Request $request)
{
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    // Debugging: Check if user even exists
    $user = User::where('email', $request->email)->first();

    if (!$user) {
        return response()->json(['success' => false, 'message' => 'Email not found in database'], 404);
    }

    // Attempt login
    if (!Auth::attempt($credentials)) {
        return response()->json(['success' => false, 'message' => 'Wrong password'], 401);
    }

    $token = $user->createToken('auth_token')->plainTextToken;

    return response()->json([
        'success' => true,
        'access_token' => $token,
        'user' => $user, // This includes the 'role' for your redirect
    ]);
}

}
