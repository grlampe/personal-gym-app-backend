import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';
import { Injectable } from '@nestjs/common';
import { CategoryExercise } from '@prisma/client';

@Injectable()
export class ListAllCategoryExerciseService {
  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(): Promise<CategoryExercise[]> {
    return await this.categoryExerciseRepository.findAll();
  }
}
