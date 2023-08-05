<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function create(Request $request){

        $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'latitude' => 'decimal:0,99|nullable',
            'longitude' => 'decimal:0,99|nullable',
            'user_id' => 'numeric',
        ]);

        $contact = new Contact();
        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->latitude = $request->latitude ? $request->latitude : null;
        $contact->longitude = $request->longitude ? $request->longitude : null;
        $contact->user_id = $request->user_id ? $request->user_id : 1;
        $contact->save();

        return response()->json([
            'status' => 'success',
            'data' => $contact
        ]);

    }
}
