<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblnews extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblnews', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idadmin')->unsigned();
            $table->bigInteger('idcategory')->unsigned();
            $table->longText('title');
            $table->string('image');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idadmin')->references('id')->on('tbladmins');
            $table->foreign('idcategory')->references('id')->on('tblcategories');
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
