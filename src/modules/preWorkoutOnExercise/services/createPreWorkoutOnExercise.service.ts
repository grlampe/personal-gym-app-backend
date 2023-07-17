import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';
import { CreatePreWorkoutOnExerciseDTO } from '../dtos/createPreWorkoutOnExerciseDTO';

@Injectable()
export class CreatePreWorkoutOnExerciseService {
  private readonly logger = new Logger(CreatePreWorkoutOnExerciseService.name);

  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(
    preWorkoutOnExerciseDto: CreatePreWorkoutOnExerciseDTO,
  ): Promise<void> {
    this.logger.log(
      `Execute Create PreWorkoutOnExercise ${JSON.stringify(
        preWorkoutOnExerciseDto,
      )}`,
    );

    await this.preWorkoutOnExerciseRepository.create(preWorkoutOnExerciseDto);
  }
}
