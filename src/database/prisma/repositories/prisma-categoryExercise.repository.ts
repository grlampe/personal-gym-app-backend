import { Injectable } from '@nestjs/common';
import { CategoryExercise } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CategoryExerciseRepository } from '../../../modules/categoryExercise/repositories/categoryExercise.repository';
import { CreateCategoryExerciseDTO } from '../../../modules/categoryExercise/dtos/createCategoryExerciseDTO';
import { UpdateCategoryExerciseDTO } from '../../../modules/categoryExercise/dtos/updateCategoryExerciseDTO';

@Injectable()
export class PrismaCategoryExerciseRepository
  implements CategoryExerciseRepository
{
  constructor(private prismaService: PrismaService) {}

  public async create(categoryExerciseDto: CreateCategoryExerciseDTO) {
    const categoryExercise = { ...categoryExerciseDto };

    await this.prismaService.categoryExercise.create({
      data: {
        ...categoryExercise,
      },
    });
  }

  public async update(categoryExerciseDto: UpdateCategoryExerciseDTO) {
    const categoryExercise = { ...categoryExerciseDto };

    await this.prismaService.categoryExercise.update({
      where: {
        id: categoryExercise.id,
      },
      data: {
        ...categoryExercise,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  async findByName(name: string): Promise<CategoryExercise> {
    return this.prismaService.categoryExercise.findFirst({
      where: { name },
    });
  }

  async findById(id: string): Promise<CategoryExercise> {
    return this.prismaService.categoryExercise.findFirst({
      where: { id },
    });
  }

  async findAll(): Promise<CategoryExercise[]> {
    return await this.prismaService.categoryExercise.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.categoryExercise.delete({
      where: {
        id,
      },
    });
  }
}
