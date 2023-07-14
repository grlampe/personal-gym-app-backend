/*
  Warnings:

  - You are about to drop the column `exerciseOrder` on the `tb_pre-workout-exercise` table. All the data in the column will be lost.
  - Added the required column `order` to the `tb_pre-workout-exercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_pre-workout-exercise" DROP COLUMN "exerciseOrder",
ADD COLUMN     "order" INTEGER NOT NULL;
