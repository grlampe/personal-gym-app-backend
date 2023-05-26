import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ExerciseOnCategoryExerciseController } from './exerciseOnCategoryExercise.controller';
import { CreateExerciseOnCategoryExerciseService } from './services/createExerciseOnCategoryExercise.service';
import { DeleteExerciseOnCategoryExerciseService } from './services/deleteExerciseOnCategoryExercise.service';
import { FindAllByExerciseIdExerciseOnCategoryExerciseService } from './services/findAllByExerciseIdExerciseOnCategoryExercise.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ExerciseOnCategoryExerciseController],
  providers: [
    CreateExerciseOnCategoryExerciseService,
    DeleteExerciseOnCategoryExerciseService,
    FindAllByExerciseIdExerciseOnCategoryExerciseService,
  ],
})
export class ExerciseOnCategoryExerciseModule {}
