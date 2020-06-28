<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class tbladmin_roles extends Model
{
    protected $fillable = [
        'id', 'idadmin', 'idrole'
    ];
}
