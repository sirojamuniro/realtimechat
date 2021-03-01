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

        $user = User::find(Auth::id());
        broadcast(new ChatEvent($request->message,$user))->toOthers();

        return ['status'=>'Message Sent!'];
    }


    // public function send(Request $request)
    // {



    //     $message = 'cok';

    //     $user = User::find(Auth::id());

    //     event(new ChatEvent($message,$user));
    // }

}
