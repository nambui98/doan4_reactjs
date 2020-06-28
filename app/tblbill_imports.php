<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblbill_imports extends Model
{
    protected $fillable = [
        'idadmin', 'idBill', 'images', 'amount', 'totalmoney'
    ];
}