import { Injectable, Logger } from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';
import { UpdateWorkoutDTO } from '../dtos/updateWorkoutDTO';

@Injectable()
export class UpdateWorkoutService {
  private readonly logger = new Logger(UpdateWorkoutService.name);
  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(updateWorkoutDTO: UpdateWorkoutDTO): Promise<void> {
    this.logger.log(
      `Execute Update Workout ${JSON.stringify(updateWorkoutDTO)}`,
    );
    await this.workoutRepository.update(updateWorkoutDTO);
  }
}
