/*
  Warnings:

  - You are about to drop the `PreWorkout` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PreWorkoutOnExercise` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PreWorkoutOnExercise" DROP CONSTRAINT "PreWorkoutOnExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "PreWorkoutOnExercise" DROP CONSTRAINT "PreWorkoutOnExercise_preWorkoutId_fkey";

-- DropTable
DROP TABLE "PreWorkout";

-- DropTable
DROP TABLE "PreWorkoutOnExercise";

-- CreateTable
CREATE TABLE "tb_pre-workout" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "tb_pre-workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_pre-workout-exercise" (
    "id" TEXT NOT NULL,
    "preWorkoutId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "exerciseOrder" INTEGER NOT NULL,
    "restTime" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "observation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_pre-workout-exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_pre-workout-exercise" ADD CONSTRAINT "tb_pre-workout-exercise_preWorkoutId_fkey" FOREIGN KEY ("preWorkoutId") REFERENCES "tb_pre-workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_pre-workout-exercise" ADD CONSTRAINT "tb_pre-workout-exercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
