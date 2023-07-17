import { Injectable } from '@nestjs/common';
import { ExerciseOnCategoryExerciseRepository } from '../../../modules/exerciseOnCategoryExercise/repositories/exerciseOnCategoryExercise.repository';
import { CreateExerciseOnCategoryExerciseDTO } from '../../../modules/exerciseOnCategoryExercise/dtos/exerciseOnCategoryExercise.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaExerciseOnCategoryExerciseRepository
  implements ExerciseOnCategoryExerciseRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(
    exerciseOnCategoryExerciseDto: CreateExerciseOnCategoryExerciseDTO,
  ): Promise<void> {
    const exerciseOnCategoryExercise = { ...exerciseOnCategoryExerciseDto };

    await this.prismaService.exerciseOnCategoryExercise.create({
      data: {
        ...exerciseOnCategoryExercise,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.exerciseOnCategoryExercise.delete({
      where: { id },
    });
  }

  async findAllByExerciseId(exerciseId: string): Promise<any[]> {
    return await this.prismaService.exerciseOnCategoryExercise.findMany({
      where: { exerciseId },
      include: {
        categoryExercise: true,
      },
    });
  }

  async findAllByCategoryExerciseId(
    categoryExerciseId: string,
  ): Promise<any[]> {
    return await this.prismaService.exerciseOnCategoryExercise.findMany({
      where: { categoryExerciseId },
      include: {
        exercise: true,
      },
    });
  }
}
