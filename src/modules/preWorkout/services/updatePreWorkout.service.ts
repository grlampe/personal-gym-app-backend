import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
import { UpdatePreWorkoutDTO } from '../dtos/updatePreWorkoutDTO';

@Injectable()
export class UpdatePreWorkoutService {
  private readonly logger = new Logger(UpdatePreWorkoutService.name);
  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(updatePreWorkoutDto: UpdatePreWorkoutDTO): Promise<void> {
    this.logger.log(
      `Execute Update PreWorkout ${JSON.stringify(updatePreWorkoutDto)}`,
    );
    await this.preWorkoutRepository.update(updatePreWorkoutDto);
  }
}
