import { Injectable, Logger } from '@nestjs/common';
import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';
import { UpdateCategoryExerciseDTO } from '../dtos/updateCategoryExerciseDTO';

@Injectable()
export class UpdateCategoryExerciseService {
  private readonly logger = new Logger(UpdateCategoryExerciseService.name);
  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(
    updateCategoryExerciseDto: UpdateCategoryExerciseDTO,
  ): Promise<void> {
    this.logger.log(
      `Execute Update CategoryExercise ${JSON.stringify(
        updateCategoryExerciseDto,
      )}`,
    );
    await this.categoryExerciseRepository.update(updateCategoryExerciseDto);
  }
}
