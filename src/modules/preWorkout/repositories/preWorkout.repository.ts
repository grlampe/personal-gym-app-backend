import { PreWorkout } from '@prisma/client';
import { CreatePreWorkoutDTO } from '../dtos/createPreWorkoutDTO';
import { UpdatePreWorkoutDTO } from '../dtos/updatePreWorkoutDTO';

export abstract class PreWorkoutRepository {
  abstract create(preWorkoutDto: CreatePreWorkoutDTO): Promise<void>;
  abstract findByName(description: string): Promise<PreWorkout>;
  abstract findById(id: string): Promise<PreWorkout>;
  abstract update(preWorkoutDto: UpdatePreWorkoutDTO): Promise<void>;
  abstract findAll(): Promise<PreWorkout[]>;
}
