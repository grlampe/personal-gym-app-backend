/*
  Warnings:

  - Added the required column `description` to the `tb_body_measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_body_measurement" ADD COLUMN     "description" TEXT NOT NULL;
