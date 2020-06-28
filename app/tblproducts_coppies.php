<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblproducts_coppies extends Model
{
    protected $fillable = [
        'id', 'idproduct', 'mass'
    ];
}
