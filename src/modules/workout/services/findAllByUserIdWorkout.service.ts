import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';
import { Workout } from '@prisma/client';

@Injectable()
export class FindAllByUserIdWorkoutService {
  private readonly logger = new Logger(FindAllByUserIdWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(userId: string): Promise<Workout[]> {
    this.logger.log(`Execute List All By User Id: ${userId}`);

    return await this.workoutRepository.findAllByUserId(userId);
  }
}
