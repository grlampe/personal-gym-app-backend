import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';
import { CreateWorkoutOnCategoryDTO } from '../dtos/createWorkoutOnCategoryDTO';

@Injectable()
export class UpdateWorkoutOnCategoryService {
  private readonly logger = new Logger(UpdateWorkoutOnCategoryService.name);

  constructor(
    private readonly workoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(workoutCategoryDto: CreateWorkoutOnCategoryDTO): Promise<void> {
    this.logger.log(
      `Execute Update WorkoutOnCategory ${JSON.stringify(workoutCategoryDto)}`,
    );

    await this.workoutOnCategoryRepository.update(workoutCategoryDto);
  }
}
