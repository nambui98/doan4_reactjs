<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblcommentanswers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblcomment_answers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idcomment')->unsigned();
            $table->bigInteger('idcustomer')->unsigned();
            $table->text('content');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idcomment')->references('id')->on('tblcomments');
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
