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
        Route::post('addInfoCart', 'api\CartController@saveCarts');
        // Route::post('addInfoCart', 'api\InfoCartController@store');
        // Route::get('viewCart', 'api\CartController@show');
        Route::get('viewCarts/{idcustomer}&&{status}', 'api\CartController@showListCart');
        Route::get('cancelCart/{id}', 'api\CartController@cancelCart');
        //comment product
        Route::post('commentPro', 'api\ctrlCommentPro@store');
    });
});


Route::group([
    'prefix' => 'authAdmin'
], function () {
    Route::post('login', 'AuthAdminCtrl@login');
    // Route::post('signup', 'AuthAdminCtrl@signup');

    Route::group([
        'middleware' => 'auth:tbladmins-api'
    ], function () {
        //myaccount
        Route::get('logout', 'AuthAdminCtrl@logout');

        Route::get('user', 'AuthAdminCtrl@getDetails');
        Route::put('update', 'AuthAdminCtrl@update');
        Route::post('changePass', 'AuthAdminCtrl@changePass');
        //roles
        Route::get('v1/role', 'api\RolesController@getAll');

        Route::post('v1/role/getAll', 'api\RolesController@index');
        Route::post('v1/role', 'api\RolesController@store');
        Route::put('v1/role/{post}', 'api\RolesController@update');
        Route::delete('v1/role/{post}', 'api\RolesController@destroy'); //Xóa;
        //admin
        Route::post('v1/admin/getAll', 'api\AccountController@index');
        Route::put('v1/admin/changeRoles/{id}', 'api\AccountController@changeRoles'); //changeRoles;
        Route::put('v1/admin/resetPassword/{id}', 'api\AccountController@resetPassword'); //resetpassword;
        //categories
        Route::get('v1/categoriesBig', 'api\CategoryController@getCategoryBig');
        Route::post('v1/categoriesBig', 'api\CategoryController@store');
        Route::delete('v1/categoriesBig/{post}', 'api\CategoryController@destroy'); //Xóa;
        Route::post('v1/categoriesBig/getAll', 'api\CategoryController@postGetCategoryBig');
        Route::put('v1/categoriesBig/{post}', 'api\CategoryController@update');
        //categories Tow
        Route::get('v1/categoriesTwo', 'api\CategoryController@getCategoryTwo');
        Route::post('v1/categoriesTwo', 'api\CategoryController@storeTwo');
        Route::delete('v1/categoriesTwo/{post}', 'api\CategoryController@destroy'); //Xóa;
        Route::post('v1/categoriesTwo/getAll', 'api\CategoryController@postGetCategoryTwo');
        Route::put('v1/categoriesTwo/{post}', 'api\CategoryController@update');
        //categories end
        Route::get('v1/categoriesSmall', 'api\CategoryController@getCategorySmall');
        Route::post('v1/categoriesSmall', 'api\CategoryController@storeSmall');
        Route::delete('v1/categoriesSmall/{post}', 'api\CategoryController@destroy'); //Xóa;
        Route::post('v1/categoriesSmall/getAll', 'api\CategoryController@postGetCategorySmall');
        Route::put('v1/categoriesSmall/{post}', 'api\CategoryController@updateSmall');
        //bill import
        Route::get('v1/billImport', 'api\ControllerBill_imports@getAll');
        Route::post('v1/billImport/getAll', 'api\ControllerBill_imports@index');
        Route::post('v1/billImport', 'api\ControllerBill_imports@store');
        Route::post('v1/billImport/products', 'api\ProductController@store');
        Route::put('v1/billImport/{post}', 'api\ControllerBill_imports@update');
        Route::delete('v1/billImport/{post}', 'api\ControllerBill_imports@destroy'); //Xóa;
        //cart
        Route::post('v1/cart/getAll', 'api\CartController@index');
        Route::get('v1/cart/getCartId/{id}', 'api\CartController@getCartId');
        Route::post('v1/cart/getCartWait', 'api\CartController@getCartWait');
        Route::post('v1/cart/getCartCancel', 'api\CartController@getCartCancel');
        Route::post('v1/cart/getCartDelivery', 'api\CartController@getCartDelivery');
        Route::post('v1/cart/getCartSuccess', 'api\CartController@getCartSuccess');
        Route::delete('v1/cart/{id}', 'api\CartController@delete');
        Route::put('v1/cart/changeStatus/{id}', 'api\CartController@changeStatus');
        //product
        Route::post('v1/productAll/getAll', 'api\ProductController@getAll');
        //promotion
        Route::get('v1/promotion', 'api\PromotionController@getAll');
        Route::post('v1/promotion/getAll', 'api\PromotionController@index');
        Route::post('v1/promotion', 'api\PromotionController@store');
        Route::post('v1/promotion/products', 'api\ProductController@store');
        Route::put('v1/promotion/{post}', 'api\PromotionController@update');
        Route::delete('v1/promotion/{post}', 'api\PromotionController@destroy');
        //promotion type
        Route::get('v1/promotionType', 'api\PromotionTypeController@getAll');
        Route::post('v1/promotionType/getAll', 'api\PromotionTypeController@index');
        Route::post('v1/promotionType', 'api\PromotionTypeController@store');
        Route::post('v1/promotionType/products', 'api\ProductController@store');
        Route::put('v1/promotionType/{post}', 'api\PromotionTypeController@update');
        Route::delete('v1/promotionType/{post}', 'api\PromotionTypeController@destroy');
        //product promotion
        Route::post('v1/addPromotion', 'api\InfoProductSaleController@store');
        //customer
        Route::get('v1/customer', 'api\CustomerController@getAll');
        Route::post('v1/customer/getAll', 'api\CustomerController@index');
        Route::post('v1/customer', 'api\CustomerController@store');
        Route::post('v1/customer/products', 'api\ProductController@store');
        Route::put('v1/customer/{post}', 'api\CustomerController@update');
        Route::delete('v1/customer/{post}', 'api\CustomerController@destroy');
        Route::put('v1/customer/resetPassword/{id}', 'api\CustomerController@resetPassword'); //resetpassword;
        //news
        Route::get('v1/news', 'api\NewsController@getAll');
        Route::post('v1/news/getAll', 'api\NewsController@index');
        Route::post('v1/news', 'api\NewsController@store');
        Route::post('v1/news/products', 'api\ProductController@store');
        Route::put('v1/news/{post}', 'api\NewsController@update');
        Route::delete('v1/news/{post}', 'api\NewsController@destroy');
        //upload image
        Route::post('v1/uploadImage', 'api\uploadImage@uploadImg');
        //dashboard
        Route::post('v1/getCountCart', 'api\DashboardController@getCountCart');
        Route::post('v1/profit', 'api\DashboardController@profit');
        Route::post('v1/getTotalCart', 'api\DashboardController@getTotalCart');
        Route::post('v1/getExpiredProduct', 'api\DashboardController@getExpiredProduct');
        Route::post('v1/getLostMoney', 'api\DashboardController@getLostMoney');
        Route::post('v1/getSoldMoney', 'api\DashboardController@getSoldMoney');


        //Xóa;
        // Route::get('v1/promotion', 'api\PromotionController@index');
        // Route::post('v1/promotion', 'api\ControllerBill_imports@store');
        // Route::delete('v1/billImport/{post}', 'api\ControllerBill_imports@destroy'); //Xóa;
        // Route::post('v1/billImport/getAll', 'api\ControllerBill_imports@postGetCategorySmall');
        // Route::put('v1/billImport/{post}', 'api\ControllerBill_imports@updateSmall');
        // Route::delete('v1/role/{post}', 'api\RolesController@destroy'); //Xóa;
        // Route::post('v1/admin', 'api\AccountController@store');
        // Route::put('v1/admin/{post}', 'api\AccountController@update');
        Route::delete('v1/admin/{post}', 'api\AccountController@destroy'); //Xóa;
        Route::post('v1/admin', 'AuthAdminCtrl@signup');
        Route::put('v1/admin/{post}', 'AuthAdminCtrl@update');


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
Route::prefix('comment')->name('products.')->group(function () {
    Route::get('commentPro/{id}', 'api\ctrlCommentPro@show');
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
Route::prefix('news')->name('news.')->group(function () {
    Route::post('paginate', 'api\NewsController@panigation')->name('panigationNews');
    Route::get('{post}', 'api\NewsController@show')->name('show');
});
Route::prefix('infoproductsale')->name('infoproductsale.')->group(function () {
    Route::get('', 'api\InfoProductSaleController@index')->name('index'); //Danh sách;
    Route::post('', 'api\InfoProductSaleController@store')->name('store'); //Lưu;
    Route::get('{post}', 'api\InfoProductSaleController@show')->name('show'); //Chi tiết;
    Route::put('{post}', 'api\InfoProductSaleController@update')->name('update'); //Cập nhập;
    Route::delete('delete/{post}', 'api\InfoProductSaleController@destroy')->name('delete'); //Xóa;
});

Route::fallback(function () {
    return response()->json([
        'message' => 'Api Not Found',
        'success' => false
    ], 200);
});