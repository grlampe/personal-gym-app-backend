import { Injectable, Logger } from '@nestjs/common';
import { ExerciseOnCategoryExerciseRepository } from '../repositories/exerciseOnCategoryExercise.repository';
import { CreateExerciseOnCategoryExerciseDTO } from '../dtos/exerciseOnCategoryExercise.dto';

@Injectable()
export class CreateExerciseOnCategoryExerciseService {
  private readonly logger = new Logger(
    CreateExerciseOnCategoryExerciseService.name,
  );

  constructor(
    private readonly exerciseOnCategoryExerciseRepository: ExerciseOnCategoryExerciseRepository,
  ) {}

  async execute(
    exerciseOnCategoryExerciseDto: CreateExerciseOnCategoryExerciseDTO,
  ): Promise<void> {
    this.logger.log(
      `Execute Create ExerciseOnCategoryExercise ${JSON.stringify(
        exerciseOnCategoryExerciseDto,
      )}`,
    );

    await this.exerciseOnCategoryExerciseRepository.create(
      exerciseOnCategoryExerciseDto,
    );
  }
}
