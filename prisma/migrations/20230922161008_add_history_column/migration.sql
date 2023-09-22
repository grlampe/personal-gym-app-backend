/*
  Warnings:

  - Added the required column `workoutId` to the `tb_exercise_weight_history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_exercise_weight_history" ADD COLUMN     "workoutId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "tb_exercise_weight_history" ADD CONSTRAINT "tb_exercise_weight_history_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "tb_workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
