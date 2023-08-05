<?php

use App\Http\Controllers\ContactController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'contact'], function() {
    Route::post("create", [ContactController::class, "create"]);
});
