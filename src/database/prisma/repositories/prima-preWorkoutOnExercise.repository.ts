import { Injectable } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../../../modules/preWorkoutOnExercise/repositories/preWorkoutOnExercise.repository';
import { PrismaService } from '../prisma.service';
import { PreWorkoutOnExercise } from '@prisma/client';
import { CreatePreWorkoutOnExerciseDTO } from '../../../modules/preWorkoutOnExercise/dtos/createPreWorkoutOnExerciseDTO';

@Injectable()
export class PrismaPreWorkoutOnExerciseRepository
  implements PreWorkoutOnExerciseRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(
    preWorkoutOnExerciseDto: CreatePreWorkoutOnExerciseDTO,
  ): Promise<void> {
    const preWorkoutOnExercise = { ...preWorkoutOnExerciseDto };

    await this.prismaService.preWorkoutOnExercise.create({
      data: preWorkoutOnExercise,
    });
  }

  async findAll(): Promise<PreWorkoutOnExercise[]> {
    return await this.prismaService.preWorkoutOnExercise.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.preWorkoutOnExercise.delete({
      where: { id: id },
    });
  }
}
