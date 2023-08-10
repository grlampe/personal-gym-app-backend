import { Injectable, Logger } from '@nestjs/common';
import { WorkoutOnExerciseRepository } from '../repositories/workoutOnExercise.repository';
import { CreateWorkoutOnExerciseDTO } from '../dtos/createWorkoutOnExerciseDTO';

@Injectable()
export class CreateWorkoutOnExerciseService {
  private readonly logger = new Logger(CreateWorkoutOnExerciseService.name);

  constructor(
    private readonly workoutOnExerciseRepository: WorkoutOnExerciseRepository,
  ) {}

  async execute(
    workoutOnExerciseDto: CreateWorkoutOnExerciseDTO,
  ): Promise<void> {
    this.logger.log(
      `Execute Create WorkoutOnExercise ${JSON.stringify(
        workoutOnExerciseDto,
      )}`,
    );

    await this.workoutOnExerciseRepository.create(workoutOnExerciseDto);
  }
}
