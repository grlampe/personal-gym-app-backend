import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';
import { Workout } from '@prisma/client';

@Injectable()
export class FindByIdWorkoutService {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(id: string): Promise<Workout> {
    return await this.workoutRepository.findById(id);
  }
}
