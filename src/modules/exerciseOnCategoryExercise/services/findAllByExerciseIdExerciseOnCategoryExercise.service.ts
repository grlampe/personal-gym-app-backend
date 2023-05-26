import { Injectable, Logger } from '@nestjs/common';
import { ExerciseOnCategoryExerciseRepository } from '../repositories/exerciseOnCategoryExercise.repository';

@Injectable()
export class FindAllByExerciseIdExerciseOnCategoryExerciseService {
  private readonly logger = new Logger(
    FindAllByExerciseIdExerciseOnCategoryExerciseService.name,
  );

  constructor(
    private readonly exerciseOnCategoryExerciseRepository: ExerciseOnCategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<any[]> {
    this.logger.log(
      `Find All ExerciseOnCategoryExercise Using Exercise ID ${JSON.stringify(
        id,
      )}`,
    );

    return await this.exerciseOnCategoryExerciseRepository.findAllByExerciseId(
      id,
    );
  }
}
