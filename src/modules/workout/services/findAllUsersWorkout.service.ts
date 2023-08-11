import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';

@Injectable()
export class FindAllUsersWorkoutService {
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(): Promise<any[]> {
    return await this.workoutRepository.findAllUsers();
  }
}
