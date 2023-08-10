import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateCategoryExerciseDTO } from '../dtos/createCategoryExerciseDTO';
import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';

@Injectable()
export class CreateCategoryExerciseService {
  private readonly logger = new Logger(CreateCategoryExerciseService.name);

  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(
    createCategoryExerciseDto: CreateCategoryExerciseDTO,
  ): Promise<void> {
    this.logger.log(
      `Execute Create CategoryExercise ${JSON.stringify(
        createCategoryExerciseDto,
      )}`,
    );

    const findCategoryExercise =
      await this.categoryExerciseRepository.findByName(
        createCategoryExerciseDto.name,
      );

    if (findCategoryExercise) {
      throw new BadRequestException('Categoria já existe.');
    }

    await this.categoryExerciseRepository.create(createCategoryExerciseDto);
  }
}
