import { Injectable } from '@nestjs/common';
import { PreWorkoutOnExerciseRepository } from '../../../modules/preWorkoutOnExercise/repositories/preWorkoutOnExercise.repository';
import { PrismaService } from '../prisma.service';
import { PreWorkoutOnExercise } from '@prisma/client';
import { CreatePreWorkoutOnExerciseDTO } from '../../../modules/preWorkoutOnExercise/dtos/createPreWorkoutOnExerciseDTO';
import { UpdatePreWorkoutOnExerciseDTO } from '../../../modules/preWorkoutOnExercise/dtos/updatePreWorkoutOnExerciseDTO';

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

  async update(preWorkoutDto: UpdatePreWorkoutOnExerciseDTO[]): Promise<void> {
    for (const element of preWorkoutDto) {
      await this.prismaService.preWorkoutOnExercise.update({
        where: {
          id: element.id,
        },
        data: {
          ...element,
        },
      });
    }
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.preWorkoutOnExercise.delete({
      where: { id: id },
    });
  }

  async findAllByPreWorkoutId(
    preWorkoutId: string,
  ): Promise<PreWorkoutOnExercise[]> {
    return await this.prismaService.preWorkoutOnExercise.findMany({
      where: {
        preWorkoutId,
      },
      include: {
        exercise: true,
      },
    });
  }
}
