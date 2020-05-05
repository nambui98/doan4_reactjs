<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblcomments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblcomments', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idnew')->unsigned();
            $table->bigInteger('idcustomer')->unsigned();
            $table->text('content');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idnew')->references('id')->on('tblnews');
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
