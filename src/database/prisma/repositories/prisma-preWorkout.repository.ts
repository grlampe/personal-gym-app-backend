import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PreWorkoutRepository } from '../../../modules/preWorkout/repositories/preWorkout.repository';
import { CreatePreWorkoutDTO } from '../../../modules/preWorkout/dtos/createPreWorkoutDTO';
import { UpdatePreWorkoutDTO } from '../../../modules/preWorkout/dtos/updatePreWorkoutDTO';
import { PreWorkout } from '@prisma/client';

@Injectable()
export class PrismaPreWorkoutRepository implements PreWorkoutRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(preWorkoutDto: CreatePreWorkoutDTO) {
    const preWorkout = { ...preWorkoutDto };

    await this.prismaService.preWorkout.create({
      data: {
        ...preWorkout,
      },
    });
  }

  public async update(preWorkoutDto: UpdatePreWorkoutDTO) {
    const preWorkout = { ...preWorkoutDto };

    await this.prismaService.preWorkout.update({
      where: {
        id: preWorkout.id,
      },
      data: preWorkout,
    });
  }

  async findByName(description: string): Promise<PreWorkout> {
    return this.prismaService.preWorkout.findFirst({
      where: { description },
    });
  }

  async findById(id: string): Promise<PreWorkout> {
    return this.prismaService.preWorkout.findFirst({
      where: { id },
    });
  }

  async findAll(): Promise<PreWorkout[]> {
    return await this.prismaService.preWorkout.findMany();
  }
}
