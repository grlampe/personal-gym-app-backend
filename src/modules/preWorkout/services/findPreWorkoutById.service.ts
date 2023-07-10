import { Injectable } from '@nestjs/common';
import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
import { PreWorkout } from '@prisma/client';

@Injectable()
export class FindPreWorkoutByIdService {
  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(id: string): Promise<PreWorkout> {
    const resp = await this.preWorkoutRepository.findById(id);

    return resp;
  }
}
