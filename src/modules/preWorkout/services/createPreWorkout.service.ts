import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { PreWorkoutRepository } from '../repositories/preWorkout.repository';
import { CreatePreWorkoutDTO } from '../dtos/createPreWorkoutDTO';

@Injectable()
export class CreatePreWorkoutService {
  private readonly logger = new Logger(CreatePreWorkoutService.name);

  constructor(private readonly preWorkoutRepository: PreWorkoutRepository) {}

  async execute(createPreWorkoutDto: CreatePreWorkoutDTO): Promise<void> {
    this.logger.log(
      `Execute Create PreWorkout ${JSON.stringify(createPreWorkoutDto)}`,
    );

    const findPreWorkout = await this.preWorkoutRepository.findByName(
      createPreWorkoutDto.description,
    );

    if (findPreWorkout) {
      throw new BadRequestException('Treino Padrão já existe.');
    }

    await this.preWorkoutRepository.create(createPreWorkoutDto);
  }
}
