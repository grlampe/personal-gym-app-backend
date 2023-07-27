import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { WorkoutOnCategoryRepository } from '../../../modules/workoutOnCategory/repositories/workoutOnCategory.repository';
import { CreateWorkoutOnCategoryDTO } from '../../../modules/workoutOnCategory/dtos/createWorkoutOnCategoryDTO';
import { UpdateWorkoutOnCategoryDTO } from '../../../modules/workoutOnCategory/dtos/updateWorkoutOnCategoryDTO';

@Injectable()
export class PrismaWorkoutOnCategoryRepository
  implements WorkoutOnCategoryRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(workoutCategoryDto: CreateWorkoutOnCategoryDTO): Promise<void> {
    await this.prismaService.workoutOnCategory.create({
      data: workoutCategoryDto,
    });
  }

  async update(workoutCategoryDto: UpdateWorkoutOnCategoryDTO): Promise<void> {
    await this.prismaService.workoutOnCategory.update({
      where: { id: workoutCategoryDto.id },
      data: workoutCategoryDto,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.workoutOnCategory.delete({
      where: { id },
    });
  }
}
