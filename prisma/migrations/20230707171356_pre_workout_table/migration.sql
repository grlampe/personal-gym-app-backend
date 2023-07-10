-- CreateTable
CREATE TABLE "PreWorkout" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "PreWorkout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreWorkoutOnExercise" (
    "id" TEXT NOT NULL,
    "preWorkoutId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "observation" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PreWorkoutOnExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PreWorkoutOnExercise" ADD CONSTRAINT "PreWorkoutOnExercise_preWorkoutId_fkey" FOREIGN KEY ("preWorkoutId") REFERENCES "PreWorkout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PreWorkoutOnExercise" ADD CONSTRAINT "PreWorkoutOnExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
