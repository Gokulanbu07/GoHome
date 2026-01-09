<?php
use App\Http\Controllers\Api\PropertyController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;


Route::middleware(['cors'])->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
});

#Property routes

Route::get('/properties', [PropertyController::class, 'index']);
Route::get('/properties/{id}', [PropertyController::class, 'show']);


#Auth routes
// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes (Only logged-in users can access)
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});







?>
