import { CreateWorkoutDTO } from './../dtos/createWorkoutDTO';
import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';

@Injectable()
export class CreateWorkoutService {
  private readonly logger = new Logger(CreateWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(createWorkoutDTO: CreateWorkoutDTO): Promise<void> {
    this.logger.log(
      `Execute Create Workout ${JSON.stringify(createWorkoutDTO)}`,
    );

    await this.workoutRepository.create(createWorkoutDTO);
  }
}
