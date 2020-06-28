<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblcategories extends Model
{
    protected $fillable = [
        'id', 'idadmin', 'name', 'idparent', 'images', 'content', 'description', 'status'
    ];
}
