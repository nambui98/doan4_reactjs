<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblbillExport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblbill_exports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idadmin')->unsigned();
            $table->integer('amount');
            $table->float('totalmoney');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idadmin')->references('id')->on('tbladmins');
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
