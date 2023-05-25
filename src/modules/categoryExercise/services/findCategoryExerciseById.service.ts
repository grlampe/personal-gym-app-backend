import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';
import { Injectable } from '@nestjs/common';
import { CategoryExercise } from '@prisma/client';

@Injectable()
export class FindCategoryExerciseByIdService {
  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<CategoryExercise> {
    const resp = await this.categoryExerciseRepository.findById(id);

    return resp;
  }
}
