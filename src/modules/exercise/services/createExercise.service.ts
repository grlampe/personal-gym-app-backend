import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateExerciseDTO } from '../dtos/createExerciseDTO';
import { ExerciseRepository } from '../repositories/exercise.repository';

@Injectable()
export class CreateExerciseService {
  private readonly logger = new Logger(CreateExerciseService.name);

  constructor(private readonly exerciseRepository: ExerciseRepository) {}

  async execute(createExerciseDto: CreateExerciseDTO): Promise<void> {
    this.logger.log(
      `Execute Create Exercise ${JSON.stringify(createExerciseDto)}`,
    );

    const findExerciseEmail = await this.exerciseRepository.findByName(
      createExerciseDto.name,
    );

    if (findExerciseEmail) {
      throw new BadRequestException('Exercise already exists');
    }

    await this.exerciseRepository.create(createExerciseDto);
  }
}
