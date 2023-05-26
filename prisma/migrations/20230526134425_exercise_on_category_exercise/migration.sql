-- CreateTable
CREATE TABLE "tb_exercise_category_exercise" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "categoryExerciseId" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_exercise_category_exercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_exercise_category_exercise_exerciseId_categoryExerciseId_key" ON "tb_exercise_category_exercise"("exerciseId", "categoryExerciseId");

-- AddForeignKey
ALTER TABLE "tb_exercise_category_exercise" ADD CONSTRAINT "tb_exercise_category_exercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercise_category_exercise" ADD CONSTRAINT "tb_exercise_category_exercise_categoryExerciseId_fkey" FOREIGN KEY ("categoryExerciseId") REFERENCES "tb_category_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
