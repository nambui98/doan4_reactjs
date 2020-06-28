<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tblcomment_pro;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Validator;

class ctrlCommentPro extends Controller
{
    public function show($idproduct)
    {
        $result = tblcomment_pro::orderBy('id', 'desc')
            ->where('idproduct', $idproduct)
            ->join('tblcustomers', 'tblcustomers.id', '=', 'tblcomment_pros.idcustomer')
            ->select('tblcomment_pros.*', 'tblcustomers.name', 'tblcustomers.avatar')

            ->get();
        return response()->json($result, 200);
    }
    public function store(Request $request)
    {
        $validator =
            Validator::make($request->all(), [
                'idproduct' => 'required',
                'idcustomer' => 'required',
                'content' => 'required',
            ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), "success" => false], 200);
        } else {
            try {
                $user = $request->user()->id;
                $data = [
                    "idproduct" => $request->idproduct,
                    "idcustomer" => $user,
                    "content" => $request->content,
                    "rate" => $request->rate,
                ];
                $post = tblcomment_pro::create($data);
                $result = tblcomment_pro::orderBy('id', 'desc')->where('idproduct', $request->idproduct)
                    ->join('tblcustomers', 'tblcustomers.id', '=', 'tblcomment_pros.idcustomer')
                    ->select('tblcomment_pros.*', 'tblcustomers.name', 'tblcustomers.avatar')

                    ->get();
                return response()->json($result, 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }
    public function saveImg($imgName, $imgBase64)
    {
        // $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/news/$imgName", base64_decode($imgBase64));
    }
}
