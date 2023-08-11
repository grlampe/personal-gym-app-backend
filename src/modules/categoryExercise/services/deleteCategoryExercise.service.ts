import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CategoryExerciseRepository } from '../repositories/categoryExercise.repository';
@Injectable()
export class DeleteCategoryExerciseService {
  private readonly logger = new Logger(DeleteCategoryExerciseService.name);

  constructor(
    private readonly categoryExerciseRepository: CategoryExerciseRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Category Exercise ${id}`);

    try {
      await this.categoryExerciseRepository.delete(id);
    } catch (error) {
      if (
        error.message.includes('Foreign key constraint failed on the field')
      ) {
        throw new BadRequestException(
          'Existem registros vinculádos e este cadastro!',
        );
      }
      throw new InternalServerErrorException(error);
    }
  }
}
