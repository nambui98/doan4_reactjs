<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class tblcarts extends Authenticatable
{
    protected $fillable = [
        'idcustomer', 'address', 'phone',
        'totalmoney', 'status', 'reason',
        'name', 'paytype', 'payTypeOfType'
    ];
}
