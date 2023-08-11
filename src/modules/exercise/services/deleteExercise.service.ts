import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ExerciseRepository } from '../repositories/exercise.repository';
@Injectable()
export class DeleteExerciseService {
  private readonly logger = new Logger(DeleteExerciseService.name);

  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Exercise ${id}`);

    try {
      await this.exerciseRepository.delete(id);
    } catch (error) {
      if (
        error.message.includes('Foreign key constraint failed on the field')
      ) {
        throw new BadRequestException(
          'Existem registros vinculádos e este cadastro!',
        );
      }
      throw new InternalServerErrorException(error);
    }
  }
}
