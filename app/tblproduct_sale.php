<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblproduct_sale extends Model
{
    protected $fillable = [
        'id', 'datePromotion', 'created_at', 'updated_at', 'title'
    ];
}
