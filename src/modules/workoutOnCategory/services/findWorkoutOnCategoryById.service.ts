import { Injectable } from '@nestjs/common';
import { WorkoutOnCategory } from '@prisma/client';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';

@Injectable()
export class FindWorkoutOnCategoryByIdService {
  constructor(
    private readonly workoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(id: string): Promise<WorkoutOnCategory> {
    return this.workoutOnCategoryRepository.findById(id);
  }
}
