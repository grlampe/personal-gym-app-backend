-- CreateTable
CREATE TABLE "ReceivingBills" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paid_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReceivingBills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReceivingBills" ADD CONSTRAINT "ReceivingBills_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
