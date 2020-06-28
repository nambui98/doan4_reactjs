<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });
Auth::routes();
Route::get('/admin', 'RenderAdmin');
Route::get('/admin/{path}', 'RenderAdmin');
Route::get('{path?}', 'RenderSpaView');

Route::get('{path?}/{id}', 'RenderSpaView');
// Route::get('/', 'RenderView');


Route::get('/home', 'HomeController@index')->name('home');
