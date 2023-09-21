-- CreateTable
CREATE TABLE "tb_exercise_weight_history" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tb_exercise_weight_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_exercise_weight_history" ADD CONSTRAINT "tb_exercise_weight_history_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "tb_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercise_weight_history" ADD CONSTRAINT "tb_exercise_weight_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
