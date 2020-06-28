<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;


class tblinfocarts extends Authenticatable
{
    protected $fillable = [
        'idproduct', 'idcart', 'mass',
        'price', 'typeCategory', 'totalMoney'
    ];
}
