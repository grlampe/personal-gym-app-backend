import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnExerciseRepository } from '../repositories/workoutOnExercise.repository';

@Injectable()
export class DeleteWorkoutOnExerciseService {
  private readonly logger = new Logger(DeleteWorkoutOnExerciseService.name);

  constructor(
    private readonly workoutOnExerciseRepository: WorkoutOnExerciseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete WorkoutOnExercise ${id}`);

    await this.workoutOnExerciseRepository.delete(id);
  }
}
