<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblproducts extends Model
{
    protected $fillable = [
        'id', 'idcategories', 'idadmin', 'mass', 'inputprice', 'outputprice', 'dateUse', 'idbill_im', 'intomoney', 'created_at', 'updated_at'
    ];
}
