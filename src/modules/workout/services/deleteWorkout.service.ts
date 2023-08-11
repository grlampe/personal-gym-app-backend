import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { WorkoutRepository } from '../repositories/workout.repository';

@Injectable()
export class DeleteWorkoutService {
  private readonly logger = new Logger(DeleteWorkoutService.name);

  constructor(private readonly workoutRepository: WorkoutRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Workout ${id}`);

    try {
      await this.workoutRepository.delete(id);
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
