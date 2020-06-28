<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\tbladmins;
use App\tbladmin_roles;

use Illuminate\Support\Str;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        // return CategoryResource::collection(Category::orderBy('id', 'desc')->get());
        // $posts = Category::orderBy('id', 'desc')->get();
        // return new CategoryResource(tblcategories::where('idparent', null)->get());

        // $data = tbladmins::orderBy('id', 'desc')->get();
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        // $data = tbladmins::orderBy('id', 'desc')->where('rolename', 'LIKE', "%$name%")->get();'
        $data = tbladmins::orderBy('id', 'desc')->where('username', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)->get();
        $newData = [];
        foreach ($data as $key => $value) {
            $roles = tbladmins::join('tbladmin_roles', 'tbladmin_roles.idadmin', '=', 'tbladmins.id')
                ->join('tblroles', 'tblroles.id', '=', 'tbladmin_roles.idrole')
                ->select('tblroles.*')
                ->where('tbladmin_roles.idadmin', $value->id)
                ->get();
            $value['roles'] = $roles;
        }
        // return  $data;

        return response()->json([
            'rows' =>
            $data,
            'count' => count(tbladmins::all()),
            'success' => true,

        ]);
    }
    public function saveImg($imgName, $imgType, $imgBase64)
    {
        $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/avatar/$imgName", base64_decode($img));
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
            'fullname' => 'required|string',
            'email' => 'required|string|email|unique:tbladmins',
            'username' => 'required|string|unique:tbladmins',
            // 'address' => 'required|string',
            'phone' => 'required|string',
            'type' => 'required|integer',
            'password' => 'required|string'
        ]);
        if ($request->typeImg &&  $request->avatarBase64) {
            $this->saveImg($request->avatar, $request->typeImg, $request->avatarBase64);
        }
        $tblcustomer = new tbladmins([
            'fullname' => $request->fullname,
            'username' => $request->username,
            'avatar' => $request->avatar,
            // 'address' => $request->address,
            'phone' => $request->phone,
            'type' => $request->type,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $tblcustomer->save();
        return response()->json(['data' => $tblcustomer, 'success' => true], 200);
        // return response()->json([
        //     'message' => 'Successfully created tbladmins!'
        // ], 200);
        // $data = $request->all();
        // $post = tbladmins::create($data);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(tbladmins $post)
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
    public function update(Request $request, tbladmins $post)
    {
        $data = $request->all();
        $post->update($data);

        return response()->json(["data" => $post, 'success' => true], 200);
    }
    public function changeRoles(Request $request, $id)
    {
        $roles = $request->roles;
        tbladmin_roles::where('tbladmin_roles.idadmin', $id)
            ->delete();
        foreach ($roles as $key => $role) {
            $tbladmin_roles = new tbladmin_roles([
                'idadmin' => $id,
                'idrole' => $role
            ]);
            $tbladmin_roles->save();
        }
        return response()->json(["data" => $roles, 'success' => true], 200);
    }
    public function resetPassword(Request $request, $id)
    {
        $password = $request->password;
        $result = tbladmins::where('id', $id)->update(['password' => bcrypt($password)]);
        return response()->json(["data" => $result, 'success' => true], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(tbladmins $post)
    {
        // dd($post);
        $post->delete();
        $posts = tbladmins::all();

        return response()->json(["data" => $posts, 'success' => true], 200);
    }
}
