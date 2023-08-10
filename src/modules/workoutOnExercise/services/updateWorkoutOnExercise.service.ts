import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnExerciseRepository } from '../repositories/workoutOnExercise.repository';
import { UpdateWorkoutOnExerciseDTO } from '../dtos/updateWorkoutOnExerciseDTO';

@Injectable()
export class UpdateWorkoutOnExerciseService {
  private readonly logger = new Logger(UpdateWorkoutOnExerciseService.name);

  constructor(
    private readonly workoutOnExerciseRepository: WorkoutOnExerciseRepository,
  ) {}

  async execute(
    workoutOnExerciseDto: UpdateWorkoutOnExerciseDTO[],
  ): Promise<void> {
    this.logger.log(`Update PreWorkoutOnExercise`);

    await this.workoutOnExerciseRepository.update(workoutOnExerciseDto);
  }
}
