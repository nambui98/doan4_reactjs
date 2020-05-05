<?php

namespace App\Http\Controllers\api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblcategories;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return CategoryResource::collection(Category::orderBy('id', 'desc')->get());
        // $posts = Category::orderBy('id', 'desc')->get();
        // return new CategoryResource(tblcategories::where('idparent', null)->get());
        // $this->data = array();
        // $db = tblcategories::where('idparent', null)->get();
        // foreach ($db as $key => $a) {
        //     $parent = [
        //         'id' => $a->id,
        //         'name' => $a->name
        //     ];
        //     $dbparent2 = tblcategories::where('idparent', $a->id)->get();
        //     $arrChild = [];
        //     foreach ($dbparent2 as $key => $pr2) {
        //         $dbparent3 = tblcategories::where('idparent', $pr2->id)->get();
        //         foreach ($dbparent3 as $key => $pr3) {

        //             array_push($arrChild, $pr3);
        //         }
        //     }

        //     $parent['data'] = $arrChild;
        //     $parent = (object) $parent;
        //     array_push($this->data, $parent);
        // }
        // $result = [
        //     'data' => $this->data,
        // ];
        $db = tblcategories::where('idparent', null)->get();

        return new CategoryResource($db);
        // return new CategoryResource(tblcategories::all());
    }

    public function dataCategories()
    {
        // return CategoryResource::collection(Category::orderBy('id', 'desc')->get());
        // $posts = Category::orderBy('id', 'desc')->get();
        // return new CategoryResource(tblcategories::where('idparent', null)->get());
        $this->data = array();
        $db = tblcategories::where('idparent', null)->get();
        foreach ($db as $key => $a) {
            $parent = [
                'id' => $a->id,
                'name' => $a->name
            ];
            $dbparent2 = tblcategories::where('idparent', $a->id)->get();
            $arrChild = [];
            foreach ($dbparent2 as $key => $pr2) {
                $parent2 = (object) [
                    'id' => $pr2->id,
                    'name' => $pr2->name
                ];
                array_push($arrChild, $parent2);
            }

            $parent['data'] = $arrChild;
            $parent = (object) $parent;
            // dd($parent);
            array_push($this->data, $parent);
        }
        // dd($this->data);
        $result = [
            'data' => $this->data,
        ];
        return $result;
        // return new CategoryResource(tblcategories::all());
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
        $post = tblcategories::create($data);

        return response()->json($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblcategories $post)
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
    public function update(Request $request, tblcategories $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json($post, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(tblcategories $post)
    {
        $post->delete();
        $posts = tblcategories::all();

        return response()->json($posts, 200);
    }
}
