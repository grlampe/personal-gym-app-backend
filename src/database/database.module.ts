import { Module } from '@nestjs/common';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { CategoryExerciseRepository } from '../modules/categoryExercise/repositories/categoryExercise.repository';
import { ExerciseRepository } from '../modules/exercise/repositories/exercise.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaCategoryExerciseRepository } from './prisma/repositories/prisma-categoryExercise.repository';
import { PrismaExerciseRepository } from './prisma/repositories/prisma-exercise.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';
import { ExerciseOnCategoryExerciseRepository } from '../modules/exerciseOnCategoryExercise/repositories/exerciseOnCategoryExercise.repository';
import { PrismaExerciseOnCategoryExerciseRepository } from './prisma/repositories/prisma-exerciseOnCategoryExercise.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: CategoryExerciseRepository,
      useClass: PrismaCategoryExerciseRepository,
    },
    {
      provide: ExerciseRepository,
      useClass: PrismaExerciseRepository,
    },
    {
      provide: ExerciseOnCategoryExerciseRepository,
      useClass: PrismaExerciseOnCategoryExerciseRepository,
    },
  ],
  exports: [
    UserRepository,
    CategoryExerciseRepository,
    ExerciseRepository,
    ExerciseOnCategoryExerciseRepository,
  ],
})
export class DatabaseModule {}
