import { UpdateWorkoutOnCategoryService } from './services/updateWorkoutOnCategory.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { WorkoutOnCategoryController } from './workoutOnCategory.controller';
import { DeleteWorkoutOnCategoryService } from './services/deleteWorkoutOnCategory.service';
import { CreateWorkoutOnCategoryService } from './services/createWorkoutOnCategory.service';
import { FindAllByWorkoutIdWorkoutOnCategoryService } from './services/findAllByWorkoutIdWorkoutOnCategory.service';
import { FindWorkoutOnCategoryByIdService } from './services/findWorkoutOnCategoryById.service';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkoutOnCategoryController],
  providers: [
    CreateWorkoutOnCategoryService,
    DeleteWorkoutOnCategoryService,
    UpdateWorkoutOnCategoryService,
    FindAllByWorkoutIdWorkoutOnCategoryService,
    FindWorkoutOnCategoryByIdService,
  ],
})
export class WorkoutOnCategoryModule {}
