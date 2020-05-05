<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tblcarts;
use Illuminate\Http\Request;
use App\tblinfocarts;


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
        $request->validate([
            'idproduct' => 'required|integer',
            'idcart' => 'required|alpha_num',
            'mass' => 'required|alpha_num',
            'price' => 'required|alpha_num',
            'typeCategory' => 'required|integer',

        ]);
        $tblinfocart = new tblinfocarts([
            'idproduct' => $request->idproduct,
            'idcart' => $request->idcart,
            'mass' => $request->mass,
            'price' => $request->price,
            'typeCategory' => $request->typeCategory
        ]);
        $tblinfocart->save();
        return response()->json([
            // 'id' => $tblinfocart->id,
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
