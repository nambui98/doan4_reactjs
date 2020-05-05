<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblinfoproductsSale extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblinfo_products_sales', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproduct_sale')->unsigned();
            $table->bigInteger('idproduct')->unsigned();
            $table->bigInteger('idsale')->unsigned();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idproduct_sale')->references('id')->on('tblproduct_sale');
            $table->foreign('idproduct')->references('id')->on('tblproducts');
            $table->foreign('idsale')->references('id')->on('tblsales');
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
