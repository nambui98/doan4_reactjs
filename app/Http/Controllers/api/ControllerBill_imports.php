<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblbill_imports;
use App\tbladmins;
use App\tblproducts;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ControllerBill_imports extends Controller
{
    public function index(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $billImport = tblbill_imports::orderBy('id', 'desc')
                ->where('idBill', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($billImport as $key => $value) {
                $admin = tbladmins::where('id', $value->idadmin)
                    ->first();
                $products = tblproducts::where('idbill_im', $value->id)
                    ->join('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
                    ->select('tblproducts.*', 'tblcategories.name', 'tblcategories.idparent', 'tblcategories.images', 'tblcategories.content', 'tblcategories.description')
                    ->get();
                $value->admin = (object) $admin;
                $value->products = $products;
            }
            return response()->json([
                'rows' =>
                $billImport,
                'count' => count(tblbill_imports::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getAll()
    {

        $result = tblbill_imports::all();

        return response()->json(['data' => $result, 'success' => true], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator =
            Validator::make($request->all(), [
                'amount' => 'required|integer',
                'idBill' => 'required|string|unique:tblbill_imports',
                'totalmoney' => 'required',
                'images' => 'string',
            ]);
        if ($validator->fails()) {
            $dataError = (array) $validator->errors();
            $message = '';
            // dd(gettype($message));
            foreach ($dataError as $key => $values) {
                // dd($values);
                foreach ($values as $key => $value) {
                    $message .= $value[0];
                    // dd($value);
                }
                break;
            }

            // dd($message);
            return response()->json(["error" => $message, "success" => false], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $nameImage = "";
                $strImages = '';
                if ($request->images) {
                    $listImage = explode("#####", $request->images);
                    for ($i = 0; $i < count($listImage); $i++) {
                        if ($i < count($listImage) - 1) {
                            $nameImage = Str::random(15) . '.' . 'png';
                            $strImages .= $nameImage . "#####";
                            $this->saveImg($nameImage, $listImage[$i]);
                        } else {
                            $nameImage = Str::random(15) . '.' . 'png';
                            $strImages .= $nameImage;
                            $this->saveImg($nameImage, $listImage[$i]);
                        }
                    }
                }
                $data = [
                    "amount" => $request->amount,
                    "idBill" => $request->idBill,
                    "totalmoney" => $request->totalmoney,
                    "images" => $strImages,
                    "idadmin" => $idadmin
                ];
                $post = tblbill_imports::create($data);
                return response()->json(["data" => $post, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }
    public function saveImg($imgName, $imgBase64)
    {
        // $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/bill/$imgName", base64_decode($imgBase64));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblbill_imports $post)
    {
        return response()->json($post, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tblbill_imports $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json(["data" => $post, 'success' => true], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(tblbill_imports $post)
    {

        try {
            // dd($post);
            $post->delete();
            $posts = tblbill_imports::all();
            return response()->json(["data" => $post, "success" => true], 200);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
        // return response()->json(["data" => $posts, 'success' => true], 200);
    }
}