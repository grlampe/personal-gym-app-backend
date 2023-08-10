import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnExerciseRepository } from '../repositories/workoutOnExercise.repository';
import { WorkoutOnExercise } from '@prisma/client';

@Injectable()
export class ListAllWorkoutOnExerciseByWorkoutCategoryIdService {
  private readonly logger = new Logger(
    ListAllWorkoutOnExerciseByWorkoutCategoryIdService.name,
  );

  constructor(
    private readonly workoutOnExerciseRepository: WorkoutOnExerciseRepository,
  ) {}

  async execute(workoutCategoryId: string): Promise<WorkoutOnExercise[]> {
    this.logger.log(
      `Execute List All WorkoutOnExercise By Workout Id: ${workoutCategoryId}`,
    );

    return await this.workoutOnExerciseRepository.findAllByWorkoutCategoryId(
      workoutCategoryId,
    );
  }
}
