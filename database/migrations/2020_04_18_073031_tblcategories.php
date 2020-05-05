<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Tblcategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tblcategories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('idadmin')->unsigned();
            $table->string('name');
            $table->integer('idparent')->nullable();
            $table->string('images')->nullable();
            $table->longText('content')->nullable();
            $table->string('description')->nullable();
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
        Schema::dropIfExists('tblcategories');
    }
}
