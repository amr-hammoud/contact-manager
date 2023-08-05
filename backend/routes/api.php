<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'contact'], function() {
    Route::get("{id?}", [ContactController::class, "get"]);
    Route::post("createOrUpdate/{id?}", [ContactController::class, "createOrUpdate"]);
    Route::delete("delete/{id}", [ContactController::class, "createOrUpdate"]);
});
