import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';
import { UpdatePreWorkoutOnExerciseDTO } from '../dtos/updatePreWorkoutOnExerciseDTO';

@Injectable()
export class UpdatePreWorkoutOnExerciseService {
  private readonly logger = new Logger(UpdatePreWorkoutOnExerciseService.name);

  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(preWorkoutDto: UpdatePreWorkoutOnExerciseDTO[]): Promise<void> {
    this.logger.log(`Update PreWorkoutOnExercise`);

    await this.preWorkoutOnExerciseRepository.update(preWorkoutDto);
  }
}
