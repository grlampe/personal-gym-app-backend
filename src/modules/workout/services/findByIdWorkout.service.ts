import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';
import { Workout } from '@prisma/client';

@Injectable()
export class FindByIdWorkoutService {
  private readonly logger = new Logger(FindByIdWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(id: string): Promise<Workout> {
    this.logger.log(`Execute List Workout By Id: ${id}`);

    return await this.workoutRepository.findById(id);
  }
}
