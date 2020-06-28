<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tblcarts;
use Illuminate\Http\Request;
use App\tblinfocarts;
use App\tblproducts;
use App\tblproducts_coppies;

class InfoCartController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd("vao day");

        $request->validate([
            'idproduct' => 'required|integer',
            'idcart' => 'required|alpha_num',
            'mass' => 'required|alpha_num',
            'price' => 'required|alpha_num',
            'typeCategory' => 'required|integer',
            // 'totalMoney' => 'requried|alpha_num'
        ]);

        $tblinfocart = new tblinfocarts([
            'idproduct' => $request->idproduct,
            'idcart' => $request->idcart,
            'mass' => $request->mass,
            'price' => $request->price,
            'totalMoney' => $request->totalMoney,
            'typeCategory' => $request->typeCategory
        ]);
        $product = tblproducts_coppies::where('idproduct', $request->idproduct);
        $test = $product->update(['mass' => ($product->first()->mass) - ($request->mass)]);
        $tblinfocart->save();
        return response()->json([
            'test' => $test,
            "message" => "success",
            // 'message' => 'Successfully!'
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblcarts $post)
    {

        return response()->json($post, 200);
    }
    // public function showListCart(Request $id)
    // {
    //     return tblinfocarts::leftJoin('tblcarts', 'tblinfocarts.idcart', '=', 'tblcarts.id')
    //         ->select('tblcarts.id', 'tblcarts.totalmoney', 'tblcarts.created_at', 'tblcarts.status')
    //         ->get();
    // }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}