import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WorkoutRepository } from '../../../modules/workout/repositories/workout.repository';
import { Workout } from '@prisma/client';
import { CreateWorkoutDTO } from '../../../modules/workout/dtos/createWorkoutDTO';
import { UpdateWorkoutDTO } from '../../../modules/workout/dtos/updateWorkoutDTO';

@Injectable()
export class PrismaWorkoutRepository implements WorkoutRepository {
  constructor(private prismaService: PrismaService) {}

  async create(workoutDto: CreateWorkoutDTO): Promise<void> {
    await this.prismaService.workout.create({ data: workoutDto });
  }

  async update(workoutDto: UpdateWorkoutDTO): Promise<void> {
    await this.prismaService.workout.update({
      where: { id: workoutDto.id },
      data: workoutDto,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.workout.delete({
      where: { id },
    });
  }

  async findById(id: string): Promise<Workout> {
    return this.prismaService.workout.findFirst({
      where: { id },
    });
  }

  async findAllUsers(): Promise<any[]> {
    return this.prismaService.workout.findMany({
      distinct: ['userId'],
      select: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        user: {
          name: 'asc',
        },
      },
    });
  }

  async findAllByUserId(userId: string): Promise<Workout[]> {
    return this.prismaService.workout.findMany({
      where: { userId },
    });
  }
}
