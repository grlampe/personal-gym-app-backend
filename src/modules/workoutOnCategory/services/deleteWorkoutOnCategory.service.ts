import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { WorkoutOnCategoryRepository } from '../repositories/workoutOnCategory.repository';

@Injectable()
export class DeleteWorkoutOnCategoryService {
  private readonly logger = new Logger(DeleteWorkoutOnCategoryService.name);

  constructor(
    private readonly workoutOnCategoryRepository: WorkoutOnCategoryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete WorkoutOnCategory ${id}`);

    try {
      await this.workoutOnCategoryRepository.delete(id);
    } catch (error) {
      if (
        error.message.includes('Foreign key constraint failed on the field')
      ) {
        throw new BadRequestException(
          'Existem registros vinculados e este cadastro!',
        );
      }
      throw new InternalServerErrorException(error);
    }
  }
}
