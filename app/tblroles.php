<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblroles extends Model
{
    protected $fillable = [
        'rolename', 'address', 'status'
    ];
}
