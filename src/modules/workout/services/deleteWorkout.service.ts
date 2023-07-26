import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';

@Injectable()
export class DeleteWorkoutService {
  private readonly logger = new Logger(DeleteWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Workout ${id}`);

    await this.workoutRepository.delete(id);
  }
}
