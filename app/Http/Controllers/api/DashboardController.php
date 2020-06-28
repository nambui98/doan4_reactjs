<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Validator;

class DashboardController extends Controller
{
    public function getExpiredProduct(Request $request)
    {
        $type = $request->type;
        $isPrint = $request->isPrint;
        $limit = $request->limit;
        $page = ($request->page - 1) * $request->limit;
        try {
            $data = DB::select(
                "call product_expired($type,$isPrint, $limit, $page)"
            );
            $printAll = 1;
            $count = DB::select(
                "call product_expired($type,$printAll, $limit, $page)"
            );
            // ->orderBy('id', 'desc');
            // ->where('name', 'LIKE', "%$name%")
            // ->limit($limit)
            // ->offset(($page - 1) * $limit)
            // ->get();
            // dd($count);

            return response()->json([
                'rows' =>
                $data,
                'count' => count($count),
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getCountCart(Request $request)
    {
        $type = $request->type;
        $status = $request->status;
        $year = $request->year;
        try {
            $data = DB::select(
                "call getCountCarts($type,$status,$year)"
            );
            if (!$data) {
                $data["count"] = 0;
            }
            return response()->json([
                'data' => (object) $data[0],
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getLostMoney(Request $request)
    {
        $type = $request->type;

        try {
            $data = DB::select(
                "call lostMoney($type)"
            );
            return response()->json([
                'data' => (object) $data[0],
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getSoldMoney(Request $request)
    {
        $type = $request->type;
        $year = $request->year;

        try {
            $data = DB::select(
                "call getTotalSold($type,$year)"
            );
            return response()->json([
                'data' => (object) $data[0],
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getTotalCart(Request $request)
    {
        $type = $request->type;
        $year = $request->year;
        try {
            $data = DB::select(
                "call getTotalCart($type,$year)"
            );
            if (!$data) {
                $data["count"] = 0;
            }
            return response()->json([
                'data' => (object) $data[0],
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function profit(Request $request)
    {
        $type = $request->type;
        $year = $request->year;
        try {
            $data = DB::select(
                "call profit($type,$year)"
            );
            if (!$data) {
                $dataEmty = (object) [];
                $dataEmty->date = date('Y-m-d');
                $dataEmty->profit = 0;
                array_push($data, $dataEmty);
            }
            return response()->json([
                'data' =>  $data,
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
}