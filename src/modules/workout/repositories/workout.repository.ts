import { CreateWorkoutDTO } from '../dtos/createWorkoutDTO';
import { UpdateWorkoutDTO } from '../dtos/updateWorkoutDTO';
import { Workout } from '@prisma/client';

export abstract class WorkoutRepository {
  abstract create(workoutDto: CreateWorkoutDTO): Promise<void>;
  abstract update(workoutDto: UpdateWorkoutDTO): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findById(id: string): Promise<Workout>;
  abstract findAllUsers(): Promise<any[]>;
  abstract findAllByUserId(userId: string): Promise<Workout[]>;
}
