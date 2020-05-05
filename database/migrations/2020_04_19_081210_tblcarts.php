<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblcarts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblcarts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idcustomer')->unsigned();
            $table->string('address');
            $table->string('phone');
            $table->float('totalmoney');
            $table->integer('status');
            $table->string('reason')->nullable();
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('idcustomer')->references('id')->on('tblcustomers');
        });
        // Schema::table('tblcarts', function (Blueprint $table) {
        //     $table->string('reason')->nullable();
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
