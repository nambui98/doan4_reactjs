<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblproducts;
use App\tblproducts_coppies;

use App\tblcategories;


use App\Http\Resources\Product as ProductResource;
use Carbon\Carbon;
use DateTime;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

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
            ->join('tblproducts_coppies', 'tblproducts.id', '=', 'tblproducts_coppies.idproduct')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->select(
                'tblproducts.id',
                'tblsales.numbersale',
                'tblsales.type',
                'tblproducts_coppies.mass',
                'tblproducts.outputprice',
                'tblproducts.created_at',
                'tblcategories.name',
                'tblcategories.idparent',
                'tblcategories.images',
                'tblcategories.content',
                'tblcategories.description'
            )
            ->where('tblproducts_coppies.mass', '>', 0)
            ->where(DB::raw("DATE(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY))"), '>=', date('Y-m-d'))

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
    public function getAll(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        $base = tblproducts::leftJoin('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
            ->leftJoin('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
            ->leftJoin('tblproducts_coppies', 'tblproducts.id', '=', 'tblproducts_coppies.idproduct')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->select(
                DB::raw("DATE(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY)) as dateUse"),
                'tblproducts.id',
                'tblsales.numbersale',
                'tblsales.type',
                'tblproducts_coppies.mass',
                'tblproducts.outputprice',
                'tblproducts_coppies.created_at',
                // 'tblproducts_coppies.updated_at',
                'tblcategories.name',
                'tblcategories.idparent',
                'tblcategories.images',
                'tblcategories.content',
                'tblcategories.description'
            )
            // ->where('tblproducts_coppies.mass', '>', 0)
            ->where(DB::raw("DATE(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY))"), '>=', date('Y-m-d'));
        // ->orderBy('tblproducts_coppies.id', 'desc');
        $data = $base

            ->orderBy('tblproducts_coppies.id', 'desc')->where('tblcategories.name', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)
            ->get();
        // $data = tblroles::orderBy('id', 'desc')->where('rolename', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)->get();
        return response()->json([
            'rows' =>
            $data,
            'count' => count($base->get()),
            'success' => true,

        ]);
    }
    public function panigation(Request $request)
    {
        $query = tblproducts::leftJoin('tblcategories', 'tblproducts.idcategories', '=', 'tblcategories.id')
            ->leftJoin('product_daily_view', 'product_daily_view.idproduct', '=', 'tblproducts.id')
            ->join('tblproducts_coppies', 'tblproducts.id', '=', 'tblproducts_coppies.idproduct')
            ->leftJoin('tblsales', 'tblsales.id', '=', 'product_daily_view.idsale')
            ->leftJoin('tblproduct_sales', 'tblproduct_sales.id', '=', 'product_daily_view.idproduct_sale')
            ->where('tblproducts_coppies.mass', '>', 0)
            // ->where(DB::raw("DATE_FORMAT(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY), '%Y-%m-%d') >= DATE_FORMAT(CURDATE(), '%Y-%m-%d')"))
            // ->where(date('Y-m-d'), '>=', (new Carbon(new DateTime("tblproducts.created_at"), 'Asia/Phnom_Penh'))->addDays('tblproducts.dateUse'))
            ->select(
                // DB::raw("DATE(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY)) as date"),
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
            ->where(DB::raw("DATE(DATE_ADD(CONVERT_TZ(tblproducts.created_at,'+00:00','+07:00'), INTERVAL tblproducts.dateUse DAY))"), '>=', date('Y-m-d'));
        // ->where(DB::raw("DATE(tblproducts.created_at) = '" . "2020-06-01" . "'"));
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
        $result = DB::table('productcommon')
            ->get();
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
        // $data = $request->all();
        // $post = tblproducts::create($data);
        $validator =
            Validator::make($request->all(), [
                'idcategories' => 'required|integer',
                'mass' => 'required',
                'inputprice' => 'required',
                'outputprice' => 'required',
                'intomoney' => 'required',
                'dateUse' => 'required',
            ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $data = [
                    "idcategories" => $request->idcategories,
                    "mass" => $request->mass,
                    "inputprice" => $request->inputprice,
                    "outputprice" => $request->outputprice,
                    "intomoney" => $request->intomoney,
                    "idbill_im" => $request->idbill_im,
                    "dateUse" => $request->dateUse,
                    "idadmin" => $idadmin
                ];
                $post = tblproducts::create($data);
                $coppy = tblproducts_coppies::create([
                    'idproduct' => $post->id,
                    'mass' => $request->mass
                ]);
                return response()->json(["data" => $post, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
        // return response()->json($post, 200);
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
                'tblproducts.dateUse',
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