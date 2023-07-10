import { Injectable, Logger } from '@nestjs/common';
import { ExerciseRepository } from '../repositories/exercise.repository';
@Injectable()
export class DeleteExerciseService {
  private readonly logger = new Logger(DeleteExerciseService.name);

  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Exercise ${id}`);
    await this.exerciseRepository.delete(id);
  }
}
