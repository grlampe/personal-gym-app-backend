import { Exercise } from '@prisma/client';
import { CreateExerciseDTO } from '../dtos/createExerciseDTO';
import { UpdateExerciseDTO } from '../dtos/updateExerciseDTO';

export abstract class ExerciseRepository {
  abstract create(exerciseDto: CreateExerciseDTO): Promise<void>;
  abstract findByName(name: string): Promise<Exercise>;
  abstract findById(id: string): Promise<Exercise>;
  abstract update(exerciseDto: UpdateExerciseDTO): Promise<void>;
  abstract findAll(): Promise<Exercise[]>;
}
