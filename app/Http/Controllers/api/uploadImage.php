<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\QueryException;

class uploadImage extends Controller
{
    public function uploadImg(Request $request)
    {

        try {
            $nameImage = Str::random(15) . '.' . 'png';
            $this->saveImg($nameImage, $request->image);
            return response()->json(["data" => $nameImage, "success" => true], 200);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function saveImg($imgName, $imgBase64)
    {
        file_put_contents("img/news/$imgName", base64_decode($imgBase64));
    }
}
