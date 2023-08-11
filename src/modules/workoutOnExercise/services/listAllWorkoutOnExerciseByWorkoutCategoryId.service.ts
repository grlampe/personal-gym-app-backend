import { Injectable } from '@nestjs/common';
import { WorkoutOnExerciseRepository } from '../repositories/workoutOnExercise.repository';
import { WorkoutOnExercise } from '@prisma/client';

@Injectable()
export class ListAllWorkoutOnExerciseByWorkoutCategoryIdService {
  constructor(
    private readonly workoutOnExerciseRepository: WorkoutOnExerciseRepository,
  ) {}

  async execute(workoutCategoryId: string): Promise<WorkoutOnExercise[]> {
    return await this.workoutOnExerciseRepository.findAllByWorkoutCategoryId(
      workoutCategoryId,
    );
  }
}
