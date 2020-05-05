<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblproducts;
use App\tblcategories;


use App\Http\Resources\Product as ProductResource;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = tblproducts::leftJoin('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
            ->leftJoin('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->select(
                'tblproducts.id',
                'tblsales.numbersale',
                'tblsales.type',
                'tblproducts.outputprice',
                'tblproducts.created_at',
                'tblcategories.name',
                'tblcategories.idparent',
                'tblcategories.images',
                'tblcategories.content',
                'tblcategories.description'
            )
            ->get();
        $dbparent1 = tblcategories::where('idparent', '!=', null)->where('images', null)->get();
        $kq = [];
        foreach ($dbparent1 as $key => $a) {
            // $kq = $data::where('idparent', $a->id)->get();
            foreach ($data as $key => $b) {
                if ($a->id == $b->idparent) {
                    $b['idparent'] = $a->idparent;
                    array_push($kq, $b);
                }
            }
        }
        // dd($kq);
        return new ProductResource(
            $kq
        );
    }
    public function panigation(Request $request)
    {
        $query = tblproducts::leftJoin('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
            ->leftJoin('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->select(
                'tblproducts.id',
                'tblsales.numbersale',
                'tblsales.type',
                'tblproducts.outputprice',
                'tblproducts.created_at',
                'tblcategories.name',
                'tblcategories.idparent',
                'tblcategories.images',
                'tblcategories.content',
                'tblcategories.description'
            );

        $name = $request->name;
        $sort = $request->sort;
        $category = $request->category;
        $result = "";
        if ($name && !$sort) {
            $result = $query->where('name', 'LIKE', "%$name%");
        } else if ($name && $sort) {
            $result = $query->where('name', 'LIKE', "%$name%")->orderBy('tblproducts.outputprice', $sort);
        } else if ($sort && !$name) {
            $result = $query->orderBy('tblproducts.outputprice', $sort);
        } else if ($category) {
            $result = $query->where('idparent', $category);
        } else {
            $result = $query;
        }
        // return new ProductResource(

        //         ->paginate(9)
        // );
        return response()->json($result->paginate(9), 200);
    }
    public function promotionInDay()
    {
        return new ProductResource(
            tblproducts::join('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
                ->join('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
                ->join('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
                ->join('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
                ->select('tblproducts.id', 'tblproduct_sales.datePromotion', 'tblsales.numbersale', 'tblsales.type', 'tblproducts.outputprice', 'tblproducts.created_at', 'tblcategories.name', 'tblcategories.idparent', 'tblcategories.images', 'tblcategories.content', 'tblcategories.description')
                ->get()
        );
    }
    public function productNew()
    {
        $result = DB::table('views_productNew')->get();
        return
            response()->json($result, 200);
        // tblproducts::inRandomOrder()
        //     ->get()

    }
    public function productcommon()
    {
        $result = DB::table('productcommon')->get();
        return
            response()->json($result, 200);
        // tblproducts::inRandomOrder()
        //     ->get()

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
        $post = tblproducts::create($data);

        return response()->json($post, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $post)
    {
        $result = tblproducts::leftJoin('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
            ->leftJoin('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->select(
                'tblproducts.id',
                'tblsales.numbersale',
                'tblsales.type',
                'tblproducts.outputprice',
                'tblproducts.created_at',
                'tblcategories.name',
                'tblcategories.idparent',
                'tblcategories.images',
                'tblcategories.content',
                'tblcategories.description'
            )
            ->where('tblproducts.id', $post->post)
            ->first();
        return response()->json($result, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, tblproducts $post)
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
    public function destroy(tblproducts $post)
    {
        $post->delete();
        $posts = tblproducts::all();

        return response()->json($posts, 200);
    }
}
