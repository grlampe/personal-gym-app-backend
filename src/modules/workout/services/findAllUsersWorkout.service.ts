import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';

@Injectable()
export class FindAllUsersWorkoutService {
  private readonly logger = new Logger(FindAllUsersWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(): Promise<any[]> {
    this.logger.log(`Execute List All Users Workout`);

    return await this.workoutRepository.findAllUsers();
  }
}
