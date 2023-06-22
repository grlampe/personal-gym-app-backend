/*
  Warnings:

  - Added the required column `expiration_at` to the `ReceivingBills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReceivingBills" ADD COLUMN     "expiration_at" TIMESTAMPTZ NOT NULL;
