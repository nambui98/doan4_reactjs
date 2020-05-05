<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblcarts;

class CartController extends Controller
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
            'name' => 'required|string',
            'idcustomer' => 'required|alpha_num',
            'address' => 'required|string',
            'phone' => 'required|string',
            'totalmoney' => 'required|integer',
            'status' => 'required|integer',
            'reason' => 'nullable|string',
            'paytype' => 'required|integer',
            'payTypeOfType' => 'required|integer'
        ]);
        $tblcart = new tblcarts([
            'name' => $request->name,
            'idcustomer' => $request->idcustomer,
            'address' => $request->address,
            'phone' => $request->phone,
            'totalmoney' => $request->totalmoney,
            'status' => $request->status,
            'reason' => $request->reason,
            'paytype' => $request->paytype,
            'payTypeOfType' => $request->payTypeOfType,

        ]);
        $tblcart->save();
        return response()->json([
            'id' => $tblcart->id,
            'message' => 'Successfully!'
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
    public function showListCart(Request $request)
    {
        return tblcarts::where('idcustomer', '=', $request->idcustomer)
            ->where('status', '=', $request->status)
            ->orderBy('id', 'desc')
            ->paginate(5);
    }
    public function cancelCart(Request $request)
    {
        tblcarts::where('id', '=', $request->id)
            ->update(['status' => 4]);
        return response()->json([
            'message' => 'Successfully!'
        ], 200);
    }
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
