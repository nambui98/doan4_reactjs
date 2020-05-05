<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIdbillImportToProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tblproducts', function (Blueprint $table) {
            $table->bigInteger('idbill_im')->unsigned();
            $table->foreign('idbill_im')->references('id')->on('tblbill_imports');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tblproducts', function (Blueprint $table) {
            //
        });
    }
}
