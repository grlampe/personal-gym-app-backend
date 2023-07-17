import { PreWorkoutOnExercise } from '@prisma/client';
import { CreatePreWorkoutOnExerciseDTO } from '../dtos/createPreWorkoutOnExerciseDTO';

export abstract class PreWorkoutOnExerciseRepository {
  abstract create(
    preWorkoutOnExerciseDto: CreatePreWorkoutOnExerciseDTO,
  ): Promise<void>;
  // abstract findByName(description: string): Promise<PreWorkout>;
  // abstract findById(id: string): Promise<PreWorkout>;
  // abstract update(preWorkoutDto: UpdatePreWorkoutDTO): Promise<void>;
  abstract findAll(): Promise<PreWorkoutOnExercise[]>;
  abstract delete(id: string): Promise<void>;
}
