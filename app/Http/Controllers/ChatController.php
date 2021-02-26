<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Events\ChatEvent;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function __contruct()
    {
        $this->middleware('auth');
    }

    public function chat()
    {
        return view('chat');
    }

    public function send(Request $request)
    {

        return $request->all();

        // $message = 'Hello';

        // $user = User::find(Auth::id());

        // event(new ChatEvent($message,$user));
    }

}
