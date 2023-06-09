-- CreateTable
CREATE TABLE "tb_body_measurement" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "chestBust" DOUBLE PRECISION NOT NULL,
    "leftArm" DOUBLE PRECISION NOT NULL,
    "rightArm" DOUBLE PRECISION NOT NULL,
    "abdomen" DOUBLE PRECISION NOT NULL,
    "waist" DOUBLE PRECISION NOT NULL,
    "hips" DOUBLE PRECISION NOT NULL,
    "leftThigh" DOUBLE PRECISION NOT NULL,
    "rightThigh" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_body_measurement_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_body_measurement" ADD CONSTRAINT "tb_body_measurement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
