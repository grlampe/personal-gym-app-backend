-- CreateTable
CREATE TABLE "tb_workout_category" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tb_workout_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_workout_exercise" (
    "id" TEXT NOT NULL,
    "workoutOnCategoryId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "restTime" TEXT NOT NULL,
    "series" INTEGER NOT NULL,
    "repetitions" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "observation" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_workout_exercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_workout_category" ADD CONSTRAINT "tb_workout_category_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "tb_workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_workout_exercise" ADD CONSTRAINT "tb_workout_exercise_workoutOnCategoryId_fkey" FOREIGN KEY ("workoutOnCategoryId") REFERENCES "tb_workout_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_workout_exercise" ADD CONSTRAINT "tb_workout_exercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
