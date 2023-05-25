import { ExerciseRepository } from '../repositories/exercise.repository';
import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';

@Injectable()
export class ListAllExerciseService {
  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(): Promise<Exercise[]> {
    return await this.exerciseRepository.findAll();
  }
}
