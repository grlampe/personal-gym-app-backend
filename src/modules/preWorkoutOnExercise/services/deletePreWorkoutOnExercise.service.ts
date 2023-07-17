import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';

@Injectable()
export class DeletePreWorkoutOnExerciseService {
  private readonly logger = new Logger(DeletePreWorkoutOnExerciseService.name);

  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete PreWorkoutOnExercise ${id}`);

    await this.preWorkoutOnExerciseRepository.delete(id);
  }
}
