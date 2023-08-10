import { WorkoutOnExercise } from '@prisma/client';
import { CreateWorkoutOnExerciseDTO } from '../dtos/createWorkoutOnExerciseDTO';
import { UpdateWorkoutOnExerciseDTO } from '../dtos/updateWorkoutOnExerciseDTO';

export abstract class WorkoutOnExerciseRepository {
  abstract create(
    workoutOnExerciseDto: CreateWorkoutOnExerciseDTO,
  ): Promise<void>;
  abstract update(
    workoutOnExerciseDto: UpdateWorkoutOnExerciseDTO[],
  ): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findAllByWorkoutCategoryId(
    workoutCategoryId: string,
  ): Promise<WorkoutOnExercise[]>;
}
