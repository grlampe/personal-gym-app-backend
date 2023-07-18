import { Injectable, Logger } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';
import { PreWorkoutOnExercise } from '@prisma/client';

@Injectable()
export class ListAllPreWorkoutOnExerciseByPreWorkoutIdService {
  private readonly logger = new Logger(
    ListAllPreWorkoutOnExerciseByPreWorkoutIdService.name,
  );

  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(preWorkoutId: string): Promise<PreWorkoutOnExercise[]> {
    this.logger.log(
      `Execute List All PreWorkoutOnExercise By Workout Id: ${preWorkoutId}`,
    );

    return await this.preWorkoutOnExerciseRepository.findAllByPreWorkoutId(
      preWorkoutId,
    );
  }
}
