import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
import { Injectable } from '@nestjs/common';
import { PreWorkout } from '@prisma/client';

@Injectable()
export class ListAllPreWorkoutService {
  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(): Promise<PreWorkout[]> {
    return await this.preWorkoutRepository.findAll();
  }
}
