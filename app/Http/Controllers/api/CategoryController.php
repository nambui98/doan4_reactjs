<?php

namespace App\Http\Controllers\api;

use App\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tblcategories;
use App\Http\Resources\Category as CategoryResource;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

use Illuminate\Support\Facades\Validator;

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
    public function getCategoryBig()
    {
        $result = tblcategories::where('idparent', null)->where('status', 1)->get();

        return response()->json(['data' => $result, 'success' => true], 200);
    }
    public function getCategoryTwo()
    {
        $categoryTwo = tblcategories::where('idparent', '!=', null)
            ->where('images', null)
            ->get();
        return response()->json(['data' => $categoryTwo, 'success' => true], 200);
    }
    public function getCategorySmall()
    {
        $categorySmall = tblcategories::where('idparent', '!=', null)
            ->where('images', '!=', null)
            ->get();
        return response()->json(['data' => $categorySmall, 'success' => true], 200);
    }
    public function postGetCategoryBig(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $data = tblcategories::orderBy('id', 'desc')->where('idparent', null)->where('name', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)->get();
            return response()->json([
                'rows' =>
                $data,
                'count' => count(tblcategories::all()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }

    public function postGetCategoryTwo(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $categoryTwo = tblcategories::orderBy('id', 'desc')
                ->where('idparent', '!=', null)
                ->where('images', null)
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($categoryTwo as $key => $value) {
                $roles = tblcategories::where('id', $value->idparent)
                    ->first();
                $value->category = (object) $roles;
            }
            return response()->json([
                'rows' =>
                $categoryTwo,
                'count' => count(tblcategories::where('idparent', '!=', null)
                    ->where('images', null)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function postGetCategorySmall(Request $request)
    {
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        try {
            $categorySmall = tblcategories::orderBy('id', 'desc')
                ->where('idparent', '!=', null)
                ->where('images', '!=', null)
                ->where('name', 'LIKE', "%$name%")
                ->limit($limit)
                ->offset(($page - 1) * $limit)
                ->get();
            foreach ($categorySmall as $key => $value) {
                $category = tblcategories::where('id', $value->idparent)
                    ->first();
                $value->category = (object) $category;
            }
            return response()->json([
                'rows' =>
                $categorySmall,
                'count' => count(tblcategories::where('idparent', '!=', null)
                    ->where('images', '!=', null)->get()),
                'success' => true,

            ]);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
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
        $validator =
            Validator::make($request->all(), [
                'name' => 'required|string'
            ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $data = [
                    "name" => $request->name,
                    "status" => $request->status,
                    "idadmin" => $idadmin
                ];
                $post = tblcategories::create($data);
                return response()->json(["data" => $post, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }
    public function saveImg($imgName, $imgBase64)
    {
        // $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/products/$imgName", base64_decode($imgBase64));
    }
    public function storeTwo(Request $request)
    {
        $validator =
            Validator::make($request->all(), [
                'name' => 'required|string',
                'idparent' => 'required|integer',
            ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $data = [
                    "name" => $request->name,
                    "idparent" => $request->idparent,
                    "status" => $request->status,
                    "idadmin" => $idadmin
                ];
                $post = tblcategories::create($data);
                return response()->json(["data" => $post, "success" => true], 200);
            } catch (QueryException  $ex) {
                return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
            }
        }
    }
    public function storeSmall(Request $request)
    {
        $validator =
            Validator::make($request->all(), [
                'name' => 'required|string',
                'idparent' => 'required|integer',
                'images' => 'string',
                'content' => 'required|string',
                'description' => 'string',
            ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;
                $nameImage = "";
                $strImages = '';
                if ($request->images) {
                    $listImage = explode("#####", $request->images);
                    for ($i = 0; $i < count($listImage); $i++) {
                        if ($i < count($listImage) - 1) {
                            $nameImage = Str::random(15) . '.' . 'png';
                            $strImages .= $nameImage . "#####";
                            $this->saveImg($nameImage, $listImage[$i]);
                        } else {
                            $nameImage = Str::random(15) . '.' . 'png';
                            $strImages .= $nameImage;
                            $this->saveImg($nameImage, $listImage[$i]);
                        }
                    }
                }
                $data = [
                    "name" => $request->name,
                    "idparent" => $request->idparent,
                    "images" => $strImages,
                    "content" => $request->content,
                    "description" => $request->description,
                    "status" => $request->status,
                    "idadmin" => $idadmin
                ];
                $post = tblcategories::create($data);
                return response()->json(["data" => $post, "success" => true], 200);
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
        try {
            $data = $request->all();
            $post->update($data);
            return response()->json(["data" => $post, "success" => true], 200);
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
    public function updateSmall(Request $request, $id)
    {
        $validator =
            Validator::make($request->all(), [
                'name' => 'required|string',
                'idparent' => 'required|integer',
                'content' => 'required|string',
                'description' => 'string',
            ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()], 200);
        } else {
            try {
                $idadmin = Auth::guard('tbladmins-api')->user()->id;

                if ($request->images) {
                    $listImage = explode("#####", $request->images);
                    $nameImage = "";
                    // dd($listImage[count($listImage) - 2]);
                    $strImages = '';
                    for ($i = 0; $i < count($listImage); $i++) {
                        if ($listImage[count($listImage) - 1] == '') {
                            if (strlen($listImage[$i]) > 25  && $i < count($listImage) - 3) {
                                $nameImage = Str::random(15) . '.' . 'png';
                                $strImages .= $nameImage . "#####";
                                // $this->saveImg($nameImage, $listImage[$i]);
                            } else if ($i == (count($listImage) - 2) && strlen($listImage[$i]) > 25) {
                                // dd($listImage[$i]);
                                $nameImage = Str::random(15) . '.' . 'png';
                                $strImages .= $nameImage;
                                // $this->saveImg($nameImage, $listImage[$i]);
                            } else  if (strlen($listImage[$i]) < 25) {
                                // dd($listImage[$i]);
                                if ($listImage[$i] != '' && $i < count($listImage) - 1) {
                                    if ($i < count($listImage) - 2) {
                                        $strImages .= $listImage[$i] . "#####";
                                    } else {
                                        $strImages .= $listImage[$i];
                                    }
                                } else if ($listImage[$i] != '' && $i == (count($listImage) - 1)) {
                                    $strImages .= $listImage[$i];
                                }
                            }
                        } else {
                            // dd($listImage[count($listImage) - 1]);
                            if (strlen($listImage[$i]) > 25  && $i < count($listImage) - 1) {
                                $nameImage = Str::random(15) . '.' . 'png';
                                $strImages .= $nameImage . "#####";
                                $this->saveImg($nameImage, $listImage[$i]);
                            } else if ($i == (count($listImage) - 1) && strlen($listImage[$i]) > 25) {
                                // dd($listImage[$i]);
                                $nameImage = Str::random(15) . '.' . 'png';
                                $strImages .= $nameImage;
                                $this->saveImg($nameImage, $listImage[$i]);
                            } else  if (strlen($listImage[$i]) < 25) {
                                // dd($listImage[$i]);
                                if ($listImage[$i] != '' && $i < count($listImage) - 1) {
                                    if ($i < count($listImage) - 1) {
                                        $strImages .= $listImage[$i] . "#####";
                                    } else {
                                        $strImages .= $listImage[$i];
                                    }
                                } else if ($listImage[$i] != '' && $i == (count($listImage) - 1)) {
                                    $strImages .= $listImage[$i];
                                }
                            }
                        }
                    }
                    $data = [
                        "name" => $request->name,
                        "idparent" => $request->idparent,
                        "images" => $strImages,
                        "content" => $request->content,
                        "description" => $request->description,
                        "status" => $request->status,
                        "idadmin" => $idadmin
                    ];
                    // dd($strImages);
                    $post = tblcategories::where('id', $id)->update($data);
                    return response()->json(["data" => $post, "success" => true], 200);
                } else {
                    $data = [
                        "name" => $request->name,
                        "idparent" => $request->idparent,
                        "content" => $request->content,
                        "description" => $request->description,
                        "status" => $request->status,
                        "idadmin" => $idadmin
                    ];
                    $post = tblcategories::where('id', $id)->update($data);
                    dd("vao day");
                    return response()->json(["data" => $post, "success" => true], 200);
                }
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
    public function destroy($post)
    {
        try {
            $posts = tblcategories::where('id', $post)->delete();
            if ($posts > 0) {
                return response()->json(["data" => $posts, "success" => true], 200);
            } else {
                return response()->json(["error" => "Error", "success" => false], 200);
            }
        } catch (QueryException  $ex) { // User not found
            return   response()->json(["error" => $ex->getMessage(), "success" => false], 200);
        }
    }
}