/*
  Warnings:

  - Added the required column `height` to the `tb_body_measurement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `tb_body_measurement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_body_measurement" ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;
