<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\tblcustomers;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
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
    public function saveImg($imgName, $imgType, $imgBase64)
    {
        $img = str_replace("data:$imgType;base64,", '', $imgBase64);
        file_put_contents("img/avatar/$imgName", base64_decode($img));
    }
    public function signup(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:tblcustomers',
            'username' => 'required|string|unique:tblcustomers',
            'address' => 'required|string',
            'phone' => 'required|string',
            'status' => 'required|integer',
            'password' => 'required|string|confirmed'
        ]);
        if ($request->typeImg &&  $request->avatarBase64) {
            $this->saveImg($request->avatar, $request->typeImg, $request->avatarBase64);
        }
        $tblcustomer = new tblcustomers([
            'name' => $request->name,
            'username' => $request->username,
            'avatar' => $request->avatar,
            'address' => $request->address,
            'phone' => $request->phone,
            'status' => $request->status,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $tblcustomer->save();
        return response()->json([
            'message' => 'Successfully created tblcustomers!'
        ], 200);
    }
    public function update(Request $request)
    {

        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:tblcustomers,id',
            'username' => 'required|string|unique:tblcustomers,id',
            'address' => 'required|string',
            'phone' => 'required|string',
            'status' => 'required|integer'
        ]);
        if ($request->typeImg &&  $request->avatarBase64) {
            $this->saveImg($request->avatar, $request->typeImg, $request->avatarBase64);
        }
        $tblcustomer = [
            'name' => $request->name,
            'username' => $request->username,
            'avatar' => $request->avatar,
            'address' => $request->address,
            'phone' => $request->phone,
            'status' => $request->status,
            'email' => $request->email,
        ];
        $result = tblcustomers::where('id', $request->user()->id)->update($tblcustomer);
        if ($result) {

            return response()->json([
                'data' => $tblcustomer,
                'status' => true
            ], 200);
        } else {

            return response()->json([
                'status' => 'false'
            ], 401);
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
            $result = tblcustomers::where('id', $user->id)->update($pass);
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
        if (!Auth::attempt($credentials))
            return response()->json([
                'message' => 'Unauthorized'
            ], 401);
        $customer = $request->user();
        $tokenResult = $customer->createToken('Personal Access Token');
        $token = $tokenResult->token;
        if ($request->remember_me)
            $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();
        return response()->json([
            'id' => $customer->id,
            'name' => $customer->name,
            'avatar' => $customer->avatar,
            'phone' => $customer->phone,
            'address' => $customer->address,
            'email' => $customer->email,
            'username' => $customer->username,
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString()
        ]);
    }

    /**
     * Logout tblcustomers (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }

    /**
     * Get the authenticated tblcustomers
     *
     * @return [json] tblcustomers object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
