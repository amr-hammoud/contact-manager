<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{

    public function createOrUpdate(Request $request, $id = "add")
    {

        if($id == "add"){
            $contact = new Contact();
        }else{
            $contact = Contact::find($id);
            
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'latitude' => 'decimal:0,99|nullable',
            'longitude' => 'decimal:0,99|nullable',
        ]);
        
        $contact->name = $request->name;
        $contact->phone_number = $request->phone_number;
        $contact->location = $request->location;
        $contact->latitude = $request->latitude ? $request->latitude : null;
        $contact->longitude = $request->longitude ? $request->longitude : null;
        $contact->save();

        return response()->json(['status' => 'success']);
    }


    public function get($id = null)
    {

        if ($id) {
            $contacts = Contact::find($id);
        } else {
            $contacts = Contact::all();
        }
        return response()->json($contacts);
    }


    public function delete($id)
    {
        $contact = Contact::find($id)->delete();
        return response()->json(['status' => 'success']);
    }
}
