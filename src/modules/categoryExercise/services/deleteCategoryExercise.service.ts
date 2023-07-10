import { Injectable, Logger } from '@nestjs/common';
import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';
@Injectable()
export class DeleteCategoryExerciseService {
  private readonly logger = new Logger(DeleteCategoryExerciseService.name);

  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Category Exercise ${id}`);
    await this.categoryExerciseRepository.delete(id);
  }
}
