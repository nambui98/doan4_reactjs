<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblcarts;
use App\tblinfocarts;
use App\tblproducts_coppies;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
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

        try {
            $data = tblcarts::orderBy('id', 'desc')
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $carts = tblinfocarts::join('tblproducts', 'tblproducts.id', '=', 'tblinfocarts.idproduct')
                    ->join('tblcategories', 'tblcategories.id', '=', 'tblproducts.idcategories')
                    ->where('tblinfocarts.idcart', $value->id)
                    ->select(
                        'tblinfocarts.*',
                        'tblcategories.name',
                        'tblcategories.images'
                    )
                    ->get();
                $value->carts = $carts;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcarts::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCartId(Request $request, $id)
    {

        try {
            $data = tblcarts::find($id);

            return response()->json([
                'data' =>
                $data,

                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCartWait(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;

        try {
            $data = tblcarts::where('status', 1)
                ->orderBy('id', 'desc')
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $carts = tblinfocarts::join('tblproducts', 'tblproducts.id', '=', 'tblinfocarts.idproduct')
                    ->join('tblcategories', 'tblcategories.id', '=', 'tblproducts.idcategories')
                    ->where('tblinfocarts.idcart', $value->id)
                    ->select(
                        'tblinfocarts.*',
                        'tblcategories.name',
                        'tblcategories.images'
                    )
                    ->get();
                $value->carts = $carts;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcarts::where('status', 1)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCartCancel(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;

        try {
            $data = tblcarts::where('status', 4)
                ->orderBy('id', 'desc')
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $carts = tblinfocarts::join('tblproducts', 'tblproducts.id', '=', 'tblinfocarts.idproduct')
                    ->join('tblcategories', 'tblcategories.id', '=', 'tblproducts.idcategories')
                    ->where('tblinfocarts.idcart', $value->id)
                    ->select(
                        'tblinfocarts.*',
                        'tblcategories.name',
                        'tblcategories.images'
                    )
                    ->get();
                $value->carts = $carts;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcarts::where('status', 4)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCartDelivery(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;

        try {
            $data = tblcarts::where('status', 2)
                ->orderBy('id', 'desc')
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $carts = tblinfocarts::join('tblproducts', 'tblproducts.id', '=', 'tblinfocarts.idproduct')
                    ->join('tblcategories', 'tblcategories.id', '=', 'tblproducts.idcategories')
                    ->where('tblinfocarts.idcart', $value->id)
                    ->select(
                        'tblinfocarts.*',
                        'tblcategories.name',
                        'tblcategories.images'
                    )
                    ->get();
                $value->carts = $carts;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcarts::where('status', 2)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCartSuccess(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;

        try {
            $data = tblcarts::where('status', 3)
                ->orderBy('id', 'desc')
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($data as $key => $value) {
                $carts = tblinfocarts::join('tblproducts', 'tblproducts.id', '=', 'tblinfocarts.idproduct')
                    ->join('tblcategories', 'tblcategories.id', '=', 'tblproducts.idcategories')
                    ->where('tblinfocarts.idcart', $value->id)
                    ->select(
                        'tblinfocarts.*',
                        'tblcategories.name',
                        'tblcategories.images'
                    )
                    ->get();
                $value->carts = $carts;
            }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcarts::where('status', 3)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function delete($id)
    {
        try {
            $carts = tblinfocarts::where('idcart', $id)
                ->delete();
            $data = tblcarts::where('id', $id)
                ->delete();

            return response()->json([

                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
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
    public function saveCarts(Request $request)
    {
        // return response()->json(["data" => $request->carts, "success" => true], 200);
        $tblcart = new tblcarts([
            'name' => $request->name,
            'idcustomer' => $request->idcustomer,
            'address' => $request->address,
            'phone' => $request->phone,
            'totalmoney' => $request->totalMoney,
            'status' => $request->status,
            'reason' => $request->reason,
            'paytype' => $request->paytype,
            'payTypeOfType' => $request->payTypeOfType,
        ]);
        try {
            $tblcart->save();
            // return response()->json(["data" => $tblcart, "success" => true], 200);

            foreach ($request->carts as $key => $value) {
                $value = (object) $value;
                // dd($value);
                $tblinfocart = new tblinfocarts([
                    'idproduct' => $value->id,
                    'idcart' => $tblcart->id,
                    'mass' => $value->quantity,
                    'price' => $value->priceSale,
                    'totalMoney' => $value->totalMoneySale,
                    'typeCategory' => $value->typequantity
                ]);
                // dd($tblinfocart);
                $product = tblproducts_coppies::where('idproduct', $value->id);
                $product->update(['mass' => ($product->first()->mass) - ($value->quantity)]);
                $tblinfocart->save();
            }

            return response()->json(["data" => $tblcart, "success" => true], 200);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }

        // $tblinfocart->save();
        // dd($tblcart);
        return response()->json([
            'id' => $tblcart,
            'message' => 'Successfully!'
        ], 200);
        $tblinfocart = new tblinfocarts([
            'idproduct' => $request->idproduct,
            'idcart' => $request->idcart,
            'mass' => $request->mass,
            'price' => $request->price,
            'totalMoney' => $request->totalMoney,
            'typeCategory' => $request->typeCategory
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
    public function changeStatus(Request $request, $id)
    {
        $post = tblcarts::where('id', '=', $id)
            ->update(['status' => $request->status]);
        return response()->json([
            'data' => $post,
            'success' => true,
        ], 200);
    }
    public function viewCart(Request $request, $id)
    {
        $post = tblcarts::where('id', '=', $id)
            ->update(['status' => $request->status]);
        return response()->json([
            'data' => $post,
            'success' => true,
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