<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tag;

class TagController extends Controller
{
    public function addTag(Request $request){
        //validated data 
        $this->validate($request , [
            'tagName'=>'required|min:3|max:25',
        ]);

        $created_tag = Tag::create([
            'tagName'=>$request->tagName
        ]);
        return $created_tag;
    }

    public function getAllTags(){
        $all_tags = Tag::orderBy('id','desc')->get();
        return $all_tags;
    }

        public function updateTag(Request $request){
        //validated data 
        $this->validate($request , [
            'tagName'=>'required|min:3|max:25',
            'id'=>'required',
        ]);
        
        $updated_tag = Tag::where('id',$request->id)->update([
            'tagName'=>$request->tagName,
        ]);
        return $updated_tag;
    }

}
