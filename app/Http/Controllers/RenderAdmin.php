<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RenderAdmin extends Controller
{
    public function __invoke()
    {
        return view('admin-view');
    }
}
