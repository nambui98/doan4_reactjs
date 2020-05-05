<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblproduct_sale extends Model
{
    protected $fillable = [
        'id', 'datePromotion', 'amount', 'created_at', 'updated_at'
    ];
}
