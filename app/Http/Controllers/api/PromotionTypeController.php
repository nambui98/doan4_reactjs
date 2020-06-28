<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tbladmins;
use Illuminate\Http\Request;
use App\tblsales;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class PromotionTypeController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $data = tblsales::orderBy('id', 'desc')
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $admin = tbladmins::where('id', $value->idadmin)
                    ->first();
                $value->admin = (object) $admin;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblsales::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getAll()
    {

        $result = tblsales::all();
        foreach ($result as $key => $value) {
            $admin = tbladmins::where('id', $value->idadmin)
                ->first();
            $value->admin = (object) $admin;
        }
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
                // 'title' => 'required',
                'type' => 'required',
                'numbersale' => 'required',
            ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $data = [
                    // "title" => $request->title,
                    "type" => $request->type,
                    "numbersale" => $request->numbersale,
                    "idadmin" => $idadmin
                ];
                $post = tblsales::create($data);
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
    public function show(tblsales $post)
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
    public function update(Request $request, tblsales $post)
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
    public function destroy(tblsales $post)
    {
        // dd($post);
        $post->delete();
        $posts = tblsales::all();
        return response()->json(["data" => $posts, 'success' => true], 200);
    }
}
