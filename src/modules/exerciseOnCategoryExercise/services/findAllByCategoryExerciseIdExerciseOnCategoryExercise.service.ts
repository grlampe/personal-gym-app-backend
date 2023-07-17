import { Injectable, Logger } from '@nestjs/common';
import { ExerciseOnCategoryExerciseRepository } from '../repositories/exerciseOnCategoryExercise.repository';

@Injectable()
export class FindAllByCategoryExerciseIdExerciseOnCategoryExerciseService {
  private readonly logger = new Logger(
    FindAllByCategoryExerciseIdExerciseOnCategoryExerciseService.name,
  );

  constructor(
    private readonly exerciseOnCategoryExerciseRepository: ExerciseOnCategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<any[]> {
    this.logger.log(
      `Find All ExerciseOnCategoryExercise Using CategoryExercise ID ${JSON.stringify(
        id,
      )}`,
    );

    return await this.exerciseOnCategoryExerciseRepository.findAllByCategoryExerciseId(
      id,
    );
  }
}
