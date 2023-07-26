-- CreateTable
CREATE TABLE "tb_workout" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "tb_workout_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_workout" ADD CONSTRAINT "tb_workout_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
