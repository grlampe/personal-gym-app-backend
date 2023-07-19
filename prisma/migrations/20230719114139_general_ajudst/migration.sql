/*
  Warnings:

  - You are about to drop the `tb_pre-workout-exercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "tb_pre-workout-exercise" DROP CONSTRAINT "tb_pre-workout-exercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "tb_pre-workout-exercise" DROP CONSTRAINT "tb_pre-workout-exercise_preWorkoutId_fkey";

-- DropTable
DROP TABLE "tb_pre-workout-exercise";

-- CreateTable
CREATE TABLE "tb_pre-workout_exercise" (
    "id" TEXT NOT NULL,
    "preWorkoutId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "restTime" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "observation" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_pre-workout_exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_pre-workout_exercise" ADD CONSTRAINT "tb_pre-workout_exercise_preWorkoutId_fkey" FOREIGN KEY ("preWorkoutId") REFERENCES "tb_pre-workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_pre-workout_exercise" ADD CONSTRAINT "tb_pre-workout_exercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
