<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblinfo_products_sale;
use App\Http\Resources\Product as ProductResource;

class InfoProductSaleController extends Controller
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

        return tblinfo_products_sale::all();
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
        $post = tblinfo_products_sale::create($data);

        return response()->json($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblinfo_products_sale $post)
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
    public function update(Request $request, tblinfo_products_sale $post)
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
    public function destroy(tblinfo_products_sale $post)
    {
        $post->delete();
        $posts = tblinfo_products_sale::all();

        return response()->json($posts, 200);
    }
}
