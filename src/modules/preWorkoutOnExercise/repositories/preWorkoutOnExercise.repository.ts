import { PreWorkoutOnExercise } from '@prisma/client';
import { CreatePreWorkoutOnExerciseDTO } from '../dtos/createPreWorkoutOnExerciseDTO';
import { UpdatePreWorkoutOnExerciseDTO } from '../dtos/updatePreWorkoutOnExerciseDTO';

export abstract class PreWorkoutOnExerciseRepository {
  abstract create(
    preWorkoutOnExerciseDto: CreatePreWorkoutOnExerciseDTO,
  ): Promise<void>;
  abstract update(
    preWorkoutDto: UpdatePreWorkoutOnExerciseDTO[],
  ): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findAllByPreWorkoutId(
    preWorkoutId: string,
  ): Promise<PreWorkoutOnExercise[]>;
}
