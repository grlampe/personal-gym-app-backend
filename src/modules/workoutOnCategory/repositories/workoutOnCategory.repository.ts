import { UpdateWorkoutOnCategoryDTO } from '../dtos/updateWorkoutOnCategoryDTO';
import { CreateWorkoutOnCategoryDTO } from '../dtos/createWorkoutOnCategoryDTO';

export abstract class WorkoutOnCategoryRepository {
  abstract create(
    workoutCategoryDto: CreateWorkoutOnCategoryDTO,
  ): Promise<void>;

  abstract delete(id: string): Promise<void>;

  abstract update(
    workoutCategoryDto: UpdateWorkoutOnCategoryDTO,
  ): Promise<void>;
}
