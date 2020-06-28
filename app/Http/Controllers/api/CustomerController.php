<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\tblcustomers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $data = tblcustomers::orderBy('id', 'desc')
                ->where('username', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            // foreach ($data as $key => $value) {
            //     $products = tblcustomers::where('idproduct_sale', $value->id)
            //         ->get();
            //     foreach ($products as $key => $product) {
            //         $promotion = tblsales::where('id', $product->idsale)
            //             ->first();
            //         $productOne = tblproducts::where('id', $product->idproduct)
            //             ->first();
            //         $category = tblcategories::where('id', $productOne->idcategories)
            //             ->first();
            //         $product->name = $category->name;
            //         $product->outputPrice = $productOne->outputprice;

            //         $product->promotion = (object) $promotion;
            //     }
            //     $value->products = (object) $products;
            // }
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcustomers::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) {
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function getAll()
    {

        $result = tblcustomers::all();
        // foreach ($result as $key => $value) {
        //     $admin = tbladmins::where('id', $value->idadmin)
        //         ->first();
        //     $value->admin = (object) $admin;
        // }
        return response()->json(['data' => $result, 'success' => true], 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveImg($imgName, $imgBase64)
    {
        // $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/avatar/$imgName", base64_decode($imgBase64));
    }
    public function store(Request $request)
    {
        // return "test";
        $validator =
            Validator::make($request->all(), [
                'name' => 'required|string',
                'email' => 'required|string|email|unique:tblcustomers',
                'username' => 'required|string|unique:tblcustomers',
                'address' => 'required|string',
                'phone' => 'required|string|unique:tblcustomers',
                'status' => 'required|integer',
                'password' => 'required|string'
            ]);
        $nameImage = Str::random(15) . '.' . 'png';
        if ($request->avatar) {
            $this->saveImg($nameImage, $request->avatar);
        }
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), "success" => false], 200);
        } else {

            try {
                $tblcustomer = new tblcustomers([
                    'name' => $request->name,
                    'username' => $request->username,
                    'avatar' => $nameImage,
                    'address' => $request->address,
                    'phone' => $request->phone,
                    'status' => $request->status,
                    'email' => $request->email,
                    'password' => bcrypt($request->password)
                ]);
                $tblcustomer->save();
                return response()->json(["data" => $tblcustomer, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tblcustomers $post)
    {
        return response()->json($post, 200);
    }
    public function resetPassword(Request $request, $id)
    {
        $password = $request->password;
        $result = tblcustomers::where('id', $id)->update(['password' => bcrypt($password)]);
        return response()->json(["data" => $result, 'success' => true], 200);
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
        $validator =
            Validator::make($request->all(), [
                'name' => 'string',
                'email' => 'string|email|unique:tblcustomers,id',
                // 'username' => 'string|unique:tblcustomers,id',
                'address' => 'string',
                'phone' => 'string|unique:tblcustomers,id',
                'username' => 'string|unique:tblcustomers,id',
                // 'password' => 'string'
            ]);
        $nameImage = "";

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), "success" => false], 200);
        } else {
            if ($request->avatar) {
                $nameImage = Str::random(15) . '.' . 'png';
                $this->saveImg($nameImage, $request->avatar);
            } else {
                // return tblcustomers::find($id);
                $nameImage = tblcustomers::find($id)->avatar;
            }
            try {
                $tblcustomer = [
                    'name' => $request->name,
                    'email' => $request->email,
                    'avatar' => $nameImage,
                    'phone' => $request->phone,
                    'address' => $request->address,
                    'username' => $request->username,
                    // 'status' => $request->status,
                    // 'email' => $request->email,
                    // 'password' => bcrypt($request->password)
                ];
                tblcustomers::where('id', $id)->update($tblcustomer);
                return response()->json(["data" => $tblcustomer, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(tblcustomers $post)
    {
        // dd($post);
        $post->delete();
        $posts = tblcustomers::all();
        return response()->json(["data" => $posts, 'success' => true], 200);
    }
}
