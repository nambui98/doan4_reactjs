<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblinfocarts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblinfocarts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproduct')->unsigned();
            $table->bigInteger('idcart')->unsigned();
            $table->float('mass');
            $table->float('price');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idproduct')->references('id')->on('tblproducts');
            $table->foreign('idcart')->references('id')->on('tblcarts');
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
