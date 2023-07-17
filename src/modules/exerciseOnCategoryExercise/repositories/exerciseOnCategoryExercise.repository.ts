import { CreateExerciseOnCategoryExerciseDTO } from '../dtos/exerciseOnCategoryExercise.dto';

export abstract class ExerciseOnCategoryExerciseRepository {
  abstract create(
    exerciseOnCategoryExerciseDto: CreateExerciseOnCategoryExerciseDTO,
  ): Promise<void>;

  abstract delete(id: string): Promise<void>;

  abstract findAllByExerciseId(exerciseId: string): Promise<any[]>;

  abstract findAllByCategoryExerciseId(
    categoryExerciseId: string,
  ): Promise<any[]>;
}
