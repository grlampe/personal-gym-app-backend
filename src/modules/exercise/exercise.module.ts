import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ExerciseController } from './exercise.controller';
import { CreateExerciseService } from './services/createExercise.service';
import { FindExerciseByIdService } from './services/findExerciseById.service';
import { ListAllExerciseService } from './services/listAllExercise.service';
import { UpdateExerciseService } from './services/updateExercise.service';
import { DeleteExerciseService } from './services/deleteExercise.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ExerciseController],
  providers: [
    CreateExerciseService,
    UpdateExerciseService,
    ListAllExerciseService,
    FindExerciseByIdService,
    DeleteExerciseService,
  ],
})
export class ExerciseModule {}
