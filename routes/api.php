<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
        'middleware' => 'auth:api'
    ], function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::put('update', 'AuthController@update');
        Route::post('changePass', 'AuthController@changePass');

        Route::post('addCart', 'api\CartController@store');
        Route::post('addInfoCart', 'api\InfoCartController@store');
        // Route::get('viewCart', 'api\CartController@show');
        Route::get('viewCarts/{idcustomer}&&{status}', 'api\CartController@showListCart');
        Route::get('cancelCart/{id}', 'api\CartController@cancelCart');
    });
});
// Route::apiResource('categories', 'api\CategoryController')->only(['index', 'show', 'store', 'destroy']);
Route::prefix('categories')->name('categories.')->group(function () {
    Route::get('', 'api\CategoryController@index')->name('index');
    Route::get('categories', 'api\CategoryController@dataCategories')->name('dataCategories');
    Route::post('', 'api\CategoryController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\CategoryController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\CategoryController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\CategoryController@destroy')->name('delete'); //Xóa;
});
Route::prefix('products')->name('products.')->group(function () {
    Route::get('', 'api\ProductController@index')->name('index'); //Danh sách;
    Route::get('promotion', 'api\ProductController@promotionInDay')->name('getpromotion');
    Route::get('productNew', 'api\ProductController@productNew')->name('productnew');
    Route::get('productCommon', 'api\ProductController@productcommon')->name('productcommon');
    Route::post('productPaginate', 'api\ProductController@panigation')->name('panigation');
    Route::post('', 'api\ProductController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\ProductController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\ProductController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\ProductController@destroy')->name('delete'); //Xóa;
});
Route::prefix('sales')->name('sales.')->group(function () {
    Route::get('', 'api\SaleController@index')->name('index'); //Danh sách;
    Route::post('', 'api\SaleController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\SaleController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\SaleController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\SaleController@destroy')->name('delete'); //Xóa;
});
Route::prefix('productsale')->name('productsale.')->group(function () {
    Route::get('', 'api\ProductSaleController@index')->name('index'); //Danh sách;
    Route::post('', 'api\ProductSaleController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\ProductSaleController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\ProductSaleController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\ProductSaleController@destroy')->name('delete'); //Xóa;
});

Route::prefix('infoproductsale')->name('infoproductsale.')->group(function () {
    Route::get('', 'api\InfoProductSaleController@index')->name('index'); //Danh sách;
    Route::post('', 'api\InfoProductSaleController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\InfoProductSaleController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\InfoProductSaleController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\InfoProductSaleController@destroy')->name('delete'); //Xóa;
});
