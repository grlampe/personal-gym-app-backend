import { UpdateWorkoutOnCategoryService } from './services/updateWorkoutOnCategory.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { WorkoutOnCategoryController } from './workoutOnCategory.controller';
import { DeleteWorkoutOnCategoryService } from './services/deleteWorkoutOnCategory.service';
import { CreateWorkoutOnCategoryService } from './services/createWorkoutOnCategory.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkoutOnCategoryController],
  providers: [
    CreateWorkoutOnCategoryService,
    DeleteWorkoutOnCategoryService,
    UpdateWorkoutOnCategoryService,
  ],
})
export class WorkoutOnCategoryModule {}