import { Injectable } from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { ExerciseRepository } from '../../../modules/exercise/repositories/exercise.repository';
import { CreateExerciseDTO } from '../../../modules/exercise/dtos/createExerciseDTO';
import { UpdateExerciseDTO } from '../../../modules/exercise/dtos/updateExerciseDTO';

@Injectable()
export class PrismaExerciseRepository implements ExerciseRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(exerciseDto: CreateExerciseDTO) {
    const Exercise = { ...exerciseDto };

    await this.prismaService.exercise.create({
      data: {
        ...Exercise,
      },
    });
  }

  public async update(exerciseDto: UpdateExerciseDTO) {
    const exercise = { ...exerciseDto };

    await this.prismaService.exercise.update({
      where: {
        id: exercise.id,
      },
      data: {
        ...exercise,
      },
    });
  }

  async findByName(name: string): Promise<Exercise> {
    return this.prismaService.exercise.findFirst({
      where: { name },
    });
  }

  async findById(id: string): Promise<Exercise> {
    return this.prismaService.exercise.findFirst({
      where: { id },
    });
  }

  async findAll(): Promise<Exercise[]> {
    return await this.prismaService.exercise.findMany({
      include: {
        ExerciseOnCategoryExercise: true,
      },
      orderBy: {
        name: 'asc',
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.exercise.delete({
      where: {
        id,
      },
    });
  }
}
