import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
@Injectable()
export class DeletePreWorkoutService {
  private readonly logger = new Logger(DeletePreWorkoutService.name);

  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete PreWorkout ${id}`);
    try {
      await this.preWorkoutRepository.delete(id);
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
