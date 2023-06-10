import { PrismaReceivingBillsRepository } from './prisma/repositories/prisma-receivingBills.repository';
import { PrismaBodyMeasurementRepository } from './prisma/repositories/prisma-bodyMeasurement.repository';
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
import { BodyMeasurementRepository } from '../modules/bodyMeasurement/repositories/bodyMeasurement.repository';
import { ReceivingBillsRepository } from '../modules/receivingBills/repositories/receivingBills.repository';

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
    {
      provide: BodyMeasurementRepository,
      useClass: PrismaBodyMeasurementRepository,
    },
    {
      provide: ReceivingBillsRepository,
      useClass: PrismaReceivingBillsRepository,
    },
  ],
  exports: [
    UserRepository,
    CategoryExerciseRepository,
    ExerciseRepository,
    ExerciseOnCategoryExerciseRepository,
    BodyMeasurementRepository,
    ReceivingBillsRepository,
  ],
})
export class DatabaseModule {}
