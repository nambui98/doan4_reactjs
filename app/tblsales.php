<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblsales extends Model
{
    protected $fillable = [
        'id', 'idadmin', 'numbersale', 'type', 'created_at', 'updated_at'
    ];
}
