<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TblbillImport extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblbill_imports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idadmin')->unsigned();
            $table->string('images');
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
