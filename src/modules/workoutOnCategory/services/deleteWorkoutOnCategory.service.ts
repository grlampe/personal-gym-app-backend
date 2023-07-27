import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';

@Injectable()
export class DeleteWorkoutOnCategoryService {
  private readonly logger = new Logger(DeleteWorkoutOnCategoryService.name);

  constructor(
    private readonly WorkoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete WorkoutOnCategory ${id}`);

    await this.WorkoutOnCategoryRepository.delete(id);
  }
}
