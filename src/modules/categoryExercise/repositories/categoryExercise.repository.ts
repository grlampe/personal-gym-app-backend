import { CategoryExercise } from '@prisma/client';
import { CreateCategoryExerciseDTO } from '../dtos/createCategoryExerciseDTO';
import { UpdateCategoryExerciseDTO } from '../dtos/updateCategoryExerciseDTO';

export abstract class CategoryExerciseRepository {
  abstract create(
    categoryExerciseDto: CreateCategoryExerciseDTO,
  ): Promise<void>;
  abstract findByName(name: string): Promise<CategoryExercise>;
  abstract findById(id: string): Promise<CategoryExercise>;
  abstract update(
    categoryExerciseDto: UpdateCategoryExerciseDTO,
  ): Promise<void>;
  abstract findAll(): Promise<CategoryExercise[]>;
}
