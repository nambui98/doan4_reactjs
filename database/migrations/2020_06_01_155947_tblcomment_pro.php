<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblcommentPro extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblcomment_pro', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproduct')->unsigned();
            $table->bigInteger('idcustomer')->unsigned();
            $table->string('content');
            $table->integer('rate');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idproduct')->references('id')->on('tblproducts');
            $table->foreign('idcustomer')->references('id')->on('tblcustomers');
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
