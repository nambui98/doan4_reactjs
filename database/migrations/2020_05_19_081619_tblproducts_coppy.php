<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblproductsCoppy extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblproducts_coppy', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproduct')->unsigned();
            $table->integer('mass');
            $table->foreign('idproduct')->references('id')->on('tblproducts');
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
