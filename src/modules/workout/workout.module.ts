import { Module } from '@nestjs/common';
import { CreateWorkoutService } from './services/createworkout.service';
import { UpdateWorkoutService } from './services/updateworkout.service';
import { DeleteWorkoutService } from './services/deleteWorkout.service';
import { FindAllByUserIdWorkoutService } from './services/findAllByUserIdWorkout.service';
import { FindAllUsersWorkoutService } from './services/findAllUsersWorkout.service';
import { FindByIdWorkoutService } from './services/findByIdWorkout.service';
import { WorkoutController } from './workout.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkoutController],
  providers: [
    CreateWorkoutService,
    UpdateWorkoutService,
    DeleteWorkoutService,
    FindAllByUserIdWorkoutService,
    FindAllUsersWorkoutService,
    FindByIdWorkoutService,
  ],
})
export class WorkoutModule {}
