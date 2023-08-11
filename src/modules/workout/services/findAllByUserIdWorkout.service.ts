import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';
import { Workout } from '@prisma/client';

@Injectable()
export class FindAllByUserIdWorkoutService {
  private readonly logger = new Logger(FindAllByUserIdWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(userId: string): Promise<Workout[]> {
    return await this.workoutRepository.findAllByUserId(userId);
  }
}
