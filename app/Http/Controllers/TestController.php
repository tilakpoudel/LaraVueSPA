<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function testMethod(){
        return response()->json([
            'msg'=>'You have called me , i retrun json'
        ]);
        // return view('welcome');
    }
    public function test(){
        return response()->json([
            "msg" =>"some error occurred"
        ], 422);
    }
}
