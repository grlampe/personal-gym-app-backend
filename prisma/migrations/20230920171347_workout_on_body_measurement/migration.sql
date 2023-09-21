-- AlterTable
ALTER TABLE "tb_body_measurement" ADD COLUMN     "workoutId" TEXT;

-- AddForeignKey
ALTER TABLE "tb_body_measurement" ADD CONSTRAINT "tb_body_measurement_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "tb_workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
