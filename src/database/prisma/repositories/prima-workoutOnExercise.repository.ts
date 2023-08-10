import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WorkoutOnExercise } from '@prisma/client';
import { WorkoutOnExerciseRepository } from '../../../modules/workoutOnExercise/repositories/workoutOnExercise.repository';
import { CreateWorkoutOnExerciseDTO } from '../../../modules/workoutOnExercise/dtos/createWorkoutOnExerciseDTO';
import { UpdateWorkoutOnExerciseDTO } from '../../../modules/workoutOnExercise/dtos/updateWorkoutOnExerciseDTO';

@Injectable()
export class PrismaWorkoutOnExerciseRepository
  implements WorkoutOnExerciseRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(
    workoutOnExerciseDto: CreateWorkoutOnExerciseDTO,
  ): Promise<void> {
    const workoutOnExercise = { ...workoutOnExerciseDto };

    await this.prismaService.workoutOnExercise.create({
      data: workoutOnExercise,
    });
  }

  async update(
    workoutOnExerciseDto: UpdateWorkoutOnExerciseDTO[],
  ): Promise<void> {
    for (const element of workoutOnExerciseDto) {
      await this.prismaService.workoutOnExercise.update({
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
    await this.prismaService.workoutOnExercise.delete({
      where: { id: id },
    });
  }

  async findAllByWorkoutCategoryId(
    workoutCategoryId: string,
  ): Promise<WorkoutOnExercise[]> {
    return await this.prismaService.workoutOnExercise.findMany({
      where: {
        workoutOnCategoryId: workoutCategoryId,
      },
      orderBy: {
        order: 'asc',
      },
      include: {
        exercise: true,
      },
    });
  }
}
