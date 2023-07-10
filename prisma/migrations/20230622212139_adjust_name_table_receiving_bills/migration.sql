/*
  Warnings:

  - You are about to drop the `ReceivingBills` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReceivingBills" DROP CONSTRAINT "ReceivingBills_userId_fkey";

-- DropTable
DROP TABLE "ReceivingBills";

-- CreateTable
CREATE TABLE "tb_receiving_bills" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "expiration_at" TIMESTAMPTZ NOT NULL,
    "paid_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_receiving_bills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_receiving_bills" ADD CONSTRAINT "tb_receiving_bills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
