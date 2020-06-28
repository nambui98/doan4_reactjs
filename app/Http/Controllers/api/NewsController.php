<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tbladmins;
use App\tblcategories;
use App\tblnews;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
    public function panigation(Request $request)
    {
        // return "tré";
        $result = tblnews::paginate(4);
        return response()->json($result, 200);
    }
    public function show(Request $post)
    {
        $result = tblnews::where('id', $post->post)
            ->first();
        return response()->json($result, 200);
    }
    public function index(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $data = tblnews::orderBy('id', 'desc')
                ->where('title', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $category = tblcategories::where('id', $value->idcategory)
                    ->first();
                $admin = tbladmins::where('id', $value->idadmin)
                    ->first();
                // foreach ($products as $key => $product) {
                //     $promotion = tblsales::where('id', $product->idsale)
                //         ->first();
                //     $productOne = tblproducts::where('id', $product->idproduct)
                //         ->first();
                //     $category = tblcategories::where('id', $productOne->idcategories)
                //         ->first();
                //     $product->name = $category->name;
                //     $product->outputPrice = $productOne->outputprice;

                //     $product->promotion = (object) $promotion;
                // }
                $value->news_type = (object) $category;
                $value->admin = (object) $admin;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblnews::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getAll()
    {

        $result = tblnews::all();
        // foreach ($result as $key => $value) {
        //     $admin = tbladmins::where('id', $value->idadmin)
        //         ->first();
        //     $value->admin = (object) $admin;
        // }
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
                'title' => 'required',
                // 'idcategory ' => 'string',

            ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), "success" => false], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $nameImage = Str::random(15) . '.' . 'png';
                if ($request->image) {
                    $this->saveImg($nameImage, $request->image);
                }
                $data = [
                    "title" => $request->title,
                    "idcategory" => $request->idcategory,
                    "intro" => $request->intro,
                    "content" => $request->content,
                    "image" => $nameImage,
                    "status" => $request->status,
                    // "numbersale" => $request->numbersale,
                    "idadmin" => $idadmin
                ];
                // return $data;
                $post = tblnews::create($data);
                return response()->json(["data" => $post, "success" => true], 200);
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $validator =
            Validator::make($request->all(), [
                'title' => 'required',
            ]);
        $nameImage = "";

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), "success" => false], 200);
        } else {
            if ($request->image) {
                $nameImage = Str::random(15) . '.' . 'png';
                $this->saveImg($nameImage, $request->image);
            } else {
                // return tblcustomers::find($id);
                $nameImage = tblnews::find($id)->image;
            }
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;

                $new = [
                    "title" => $request->title,
                    "idcategory" => $request->idcategory,
                    "intro" => $request->intro,
                    "content" => $request->content,
                    "image" => $nameImage,
                    "status" => $request->status,
                    // "numbersale" => $request->numbersale,
                    "idadmin" => $idadmin
                ];
                tblnews::where('id', $id)->update($new);
                return response()->json(["data" => $new, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(tblnews $post)
    {
        // dd($post);
        $post->delete();
        $posts = tblnews::all();
        return response()->json(["data" => $posts, 'success' => true], 200);
    }
}
