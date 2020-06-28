<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblcomment_pro extends Model
{
    protected $fillable = [
        'id', 'idproduct', 'idcustomer', 'content', 'rate'
    ];
}
