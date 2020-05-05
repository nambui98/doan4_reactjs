<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblinfo_products_sale extends Model
{
    protected $fillable = [
        'id', 'idproduct_sale', 'idproduct', 'idsale', 'created_at', 'updated_at'
    ];
}
