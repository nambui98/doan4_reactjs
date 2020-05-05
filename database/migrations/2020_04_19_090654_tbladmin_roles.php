<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TbladminRoles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbladmin_roles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idadmin')->unsigned();
            $table->bigInteger('idrole')->unsigned();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idadmin')->references('id')->on('tbladmins');
            $table->foreign('idrole')->references('id')->on('tblroles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
