import { Injectable, Logger } from '@nestjs/common';
import { ExerciseOnCategoryExerciseRepository } from '../repositories/exerciseOnCategoryExercise.repository';

@Injectable()
export class DeleteExerciseOnCategoryExerciseService {
  private readonly logger = new Logger(
    DeleteExerciseOnCategoryExerciseService.name,
  );

  constructor(
    private readonly exerciseOnCategoryExerciseRepository: ExerciseOnCategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(
      `Execute Delete ExerciseOnCategoryExercise ${JSON.stringify(id)}`,
    );

    await this.exerciseOnCategoryExerciseRepository.delete(id);
  }
}
