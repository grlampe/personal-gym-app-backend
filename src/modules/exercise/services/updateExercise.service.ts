import { Injectable, Logger } from '@nestjs/common';
import { ExerciseRepository } from '../repositories/exercise.repository';
import { UpdateExerciseDTO } from '../dtos/updateExerciseDTO';

@Injectable()
export class UpdateExerciseService {
  private readonly logger = new Logger(UpdateExerciseService.name);
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(updateExerciseDto: UpdateExerciseDTO): Promise<void> {
    this.logger.log(
      `Execute Update Exercise ${JSON.stringify(updateExerciseDto)}`,
    );
    await this.exerciseRepository.update(updateExerciseDto);
  }
}
