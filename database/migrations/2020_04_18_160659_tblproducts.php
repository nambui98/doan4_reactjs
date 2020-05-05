<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblproducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblproducts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idcategories')->unsigned();
            $table->bigInteger('idadmin')->unsigned();
            $table->integer('mass');
            $table->float('inputprice');
            $table->float('outputprice');
            $table->float('intomoney');
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idcategories')->references('id')->on('tblcategories');
            $table->foreign('idadmin')->references('id')->on('tbladmins');
        });
        // Schema::table('tblproducts', function (Blueprint $table) {
        //     $table->unsignedInteger('idcategories');

        //     $table->foreign('idcategories')->references('id')->on('tblcategories');
        // });
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
