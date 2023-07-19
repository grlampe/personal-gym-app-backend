/*
  Warnings:

  - You are about to drop the column `updated_at` on the `tb_category_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `tb_exercise` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `tb_user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tb_category_exercise" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "tb_exercise" DROP COLUMN "updated_at";

-- AlterTable
ALTER TABLE "tb_user" DROP COLUMN "updated_at";
