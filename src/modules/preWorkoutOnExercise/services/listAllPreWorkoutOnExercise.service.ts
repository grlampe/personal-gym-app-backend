import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';
import { PreWorkoutOnExercise } from '@prisma/client';

@Injectable()
export class ListAllPreWorkoutOnExerciseService {
  private readonly logger = new Logger(ListAllPreWorkoutOnExerciseService.name);

  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(): Promise<PreWorkoutOnExercise[]> {
    this.logger.log(`Execute List All PreWorkoutOnExercise`);

    return await this.preWorkoutOnExerciseRepository.findAll();
  }
}
