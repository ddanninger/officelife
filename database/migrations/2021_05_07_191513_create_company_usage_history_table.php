<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanyUsageHistoryTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        // necessary for SQLlite
        Schema::enableForeignKeyConstraints();

        Schema::create('company_usage_history', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->integer('number_of_active_employees');
            $table->timestamps();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
        });

        Schema::create('company_usage_history_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_usage_history_id');
            $table->string('employee_name');
            $table->string('employee_email');
            $table->timestamps();
            $table->foreign('company_usage_history_id')->references('id')->on('company_usage_history')->onDelete('cascade');
        });

        Schema::create('company_invoices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('company_usage_history_id');
            $table->boolean('sent_to_payment_processor')->default(false);
            $table->boolean('receipt_sent_to_customer')->default(false);
            $table->string('email_address_invoice_sent_to')->nullable();
            $table->timestamps();
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('company_usage_history_id')->references('id')->on('company_usage_history')->onDelete('cascade');
        });
    }
}