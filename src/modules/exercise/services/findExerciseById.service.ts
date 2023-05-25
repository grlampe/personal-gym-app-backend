import { ExerciseRepository } from '../repositories/exercise.repository';
import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';

@Injectable()
export class FindExerciseByIdService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(id: string): Promise<Exercise> {
    const resp = await this.exerciseRepository.findById(id);

    return resp;
  }
}
