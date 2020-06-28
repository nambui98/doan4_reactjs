<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblroles;


class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        $data = tblroles::orderBy('id', 'desc')->where('rolename', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)->get();
        return response()->json([
            'rows' =>
            $data,
            'count' => count(tblroles::all()),
            'success' => true,

        ]);
    }
    public function getAll()
    {

        $result = tblroles::all();

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
        $data = $request->all();
        $post = tblroles::create($data);

        return response()->json(['data' => $post, 'success' => true], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblroles $post)
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
    public function update(Request $request, tblroles $post)
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
    public function destroy(tblroles $post)
    {
        // dd($post);
        $post->delete();
        $posts = tblroles::all();

        return response()->json(["data" => $posts, 'success' => true], 200);
    }
}
