import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { WorkoutOnExerciseController } from './workoutOnExercise.controller';
import { CreateWorkoutOnExerciseService } from './services/createWorkoutOnExercise.service';
import { UpdateWorkoutOnExerciseService } from './services/updateWorkoutOnExercise.service';
import { DeleteWorkoutOnExerciseService } from './services/deleteWorkoutOnExercise.service';
import { ListAllWorkoutOnExerciseByWorkoutCategoryIdService } from './services/listAllWorkoutOnExerciseByWorkoutCategoryId.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkoutOnExerciseController],
  providers: [
    CreateWorkoutOnExerciseService,
    UpdateWorkoutOnExerciseService,
    DeleteWorkoutOnExerciseService,
    ListAllWorkoutOnExerciseByWorkoutCategoryIdService,
  ],
})
export class WorkoutOnExerciseModule {}
