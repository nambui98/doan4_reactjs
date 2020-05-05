<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TbldetailBillExport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbldetail_bill_export', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idproduct_off')->unsigned();
            $table->integer('amount');
            $table->float('totalmoney');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idproduct_off')->references('id')->on('tblproducts_offline');
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
