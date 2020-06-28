<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\tbladmins;
use App\tbladmin_roles;
use App\tblroles;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthAdminCtrl extends Controller
{
    /**
     * Create tblcustomers
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function saveImg($imgName, $imgBase64)
    {
        // $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/avatar/$imgName" . '.' . 'png', base64_decode($imgBase64));
    }
    public function index(Request $request)
    {
        // return CategoryResource::collection(Category::orderBy('id', 'desc')->get());
        // $posts = Category::orderBy('id', 'desc')->get();
        // return new CategoryResource(tblcategories::where('idparent', null)->get());

        // $data = tblroles::orderBy('id', 'desc')->get();
        $name = $request->name;
        $limit = $request->limit;
        $page = $request->page;
        // $data = tblroles::orderBy('id', 'desc')->where('rolename', 'LIKE', "%$name%")->get();'
        $data = tbladmins::orderBy('id', 'desc')->where('username', 'LIKE', "%$name%")->limit($limit)->offset(($page - 1) * $limit)->get();
        // $data = tblroles::orderBy('id', 'desc')->where('rolename', 'LIKE', "%$name%")->skip(0)->take(1)->get();;

        // dd($data);

        return response()->json([
            'rows' =>
            $data,
            'count' => count(tbladmins::all()),
            'success' => true,

        ]);
    }
    public function signup(Request $request)
    {

        $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|string|email|unique:tbladmins',
            'username' => 'required|string|unique:tbladmins',
            'phone' => 'required|string',
            'password' => 'required|string'
        ]);
        $nameImage = Str::random(15);
        if ($request->avatar) {
            $this->saveImg($nameImage, $request->avatar);
        }
        // return $request->avatar;
        $tblcustomer = new tbladmins([
            'fullname' => $request->fullname,
            'username' => $request->username,
            'avatar' => $nameImage . '.' . 'png',
            // 'address' => $request->address,
            'phone' => $request->phone,
            'status' => 1,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $tblcustomer->save();
        return response()->json([
            'success' => true
        ], 200);
    }
    public function update(Request $request, $id)
    {
        // return $id;
        $request->validate([
            'fullname' => 'required|string',
            'email' => 'required|string|email|unique:tbladmins,id',
            'phone' => 'required|string',
            'status' => 'required|integer'
        ]);
        $nameImage = "";
        $status = "";
        if ($request->avatar) {
            $nameImage = Str::random(15);
        } else {
            $nameImage = tbladmins::find($id)->avatar;
        }
        if ($request->status) {
            $status = $request->status;
        } else {
            $status = tbladmins::find($id)->status;
        }
        $tblcustomer = [
            'fullname' => $request->fullname,
            // 'username' => $request->username,
            'avatar' => $nameImage . '.' . 'png',
            'phone' => $request->phone,
            'status' => $status,
            'email' => $request->email,
        ];
        // return $tblcustomer;
        $result = tbladmins::where('id', $id)->update($tblcustomer);
        if ($request->avatar) {
            $this->saveImg($nameImage, $request->avatar);
        }
        if ($result) {

            return response()->json([
                'data' => $result,
                'success' => true
            ], 200);
        } else {

            return response()->json([
                'status' => 'false',
                'message' => "lỗi"
            ], 200);
        }
    }

    public function changePass(Request $request)
    {

        $request->validate([
            'password' => 'required|string|confirmed',
            'passwordOld' => 'required|string'
        ]);
        $user = $request->user();
        $pass = [
            'password' => bcrypt($request->password)
        ];
        if (Hash::check($request->passwordOld, $user->password)) {
            $result = tbladmins::where('id', $user->id)->update($pass);
            if ($result) {
                return response()->json(['status' => true, 'message' => 'Thay đổi mật khẩu thành công'], 200);
            } else {

                return response()->json([
                    'status' => false,
                    'message' => 'Lỗi cập nhật mật khẩu'
                ], 201);
            }
        } else {
            return response()->json(['status' => false, 'message' => 'Mật khẩu cũ không đúng'], 201);
        }
    }
    /**
     * Login tblcustomers and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['username', 'password']);
        // dd($credentials);
        if (!Auth::guard('tbladmins')->attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $user = Auth::guard('tbladmins')->user();
        $success['token'] = $user->createToken('Personal Access Token');
        $token = $success['token'];
        // dd($token);

        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        // $token->save();
        $roles = tbladmins::join('tbladmin_roles', 'tbladmin_roles.idadmin', '=', 'tbladmins.id')
            ->join('tblroles', 'tblroles.id', '=', 'tbladmin_roles.idrole')
            ->select('tblroles.*')
            ->where('tbladmin_roles.idadmin', $user->id)
            ->get();
        // dd($roles);
        return response()->json([
            'admin' => [
                'id' => $user->id,
                'name' => $user->fullname,
                'avatar' => $user->avatar,
                'phone' => $user->phone,
                'email' => $user->email,
                'username' => $user->username,
                'roles' => $roles,
            ],

            'token' => $success['token']->accessToken,
            'success' => true,

        ]);
    }

    /**
     * Logout tblusers (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        Auth::guard('tbladmins-api')->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }

    /**
     * Get the authenticated tblcustomers
     *
     * @return [json] tblcustomers object
     */
    public function getDetails(Request $request)
    {
        // dd($request);
        $user = Auth::guard('tbladmins-api')->user();
        return response()->json($user);
    }
}
