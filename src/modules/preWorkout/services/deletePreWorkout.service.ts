import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
@Injectable()
export class DeletePreWorkoutService {
  private readonly logger = new Logger(DeletePreWorkoutService.name);

  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete PreWorkout ${id}`);
    await this.preWorkoutRepository.delete(id);
  }
}
