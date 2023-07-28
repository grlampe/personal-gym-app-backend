import { Injectable } from '@nestjs/common';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';
import { WorkoutOnCategory } from '@prisma/client';

@Injectable()
export class FindAllByWorkoutIdWorkoutOnCategoryService {
  constructor(
    private readonly workoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(workoutId: string): Promise<WorkoutOnCategory[]> {
    return this.workoutOnCategoryRepository.findAllByWorkoutId(workoutId);
  }
}
