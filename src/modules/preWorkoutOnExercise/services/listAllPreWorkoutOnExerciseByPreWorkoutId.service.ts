import { Injectable } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../repositories/preWorkoutOnExercise.repository';
import { PreWorkoutOnExercise } from '@prisma/client';

@Injectable()
export class ListAllPreWorkoutOnExerciseByPreWorkoutIdService {
  constructor(
    private readonly preWorkoutOnExerciseRepository: PreWorkoutOnExerciseRepository,
  ) {}

  async execute(preWorkoutId: string): Promise<PreWorkoutOnExercise[]> {
    return await this.preWorkoutOnExerciseRepository.findAllByPreWorkoutId(
      preWorkoutId,
    );
  }
}
