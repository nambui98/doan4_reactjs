<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tblnews extends Model
{
    protected $fillable = [
        'idadmin', 'idcategory', 'title', 'intro', 'content', 'image', 'status'
    ];
}
