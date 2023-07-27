import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';
import { CreateWorkoutOnCategoryDTO } from '../dtos/createWorkoutOnCategoryDTO';

@Injectable()
export class CreateWorkoutOnCategoryService {
  private readonly logger = new Logger(CreateWorkoutOnCategoryService.name);

  constructor(
    private readonly workoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(workoutCategoryDto: CreateWorkoutOnCategoryDTO): Promise<void> {
    this.logger.log(
      `Execute Create Workout ${JSON.stringify(workoutCategoryDto)}`,
    );

    await this.workoutOnCategoryRepository.create(workoutCategoryDto);
  }
}
