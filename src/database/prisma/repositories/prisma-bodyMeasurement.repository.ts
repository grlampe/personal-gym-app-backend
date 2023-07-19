import { UpdateBodyMeasurementDTO } from './../../../modules/bodyMeasurement/dtos/updateBodyMeasurement.dto';
import { BodyMeasurement } from '@prisma/client';
import { CreateBodyMeasurementDTO } from '../../../modules/bodyMeasurement/dtos/createBodyMeasurement.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BodyMeasurementRepository } from '../../../modules/bodyMeasurement/repositories/bodyMeasurement.repository';

@Injectable()
export class PrismaBodyMeasurementRepository
  implements BodyMeasurementRepository
{
  constructor(private prismaService: PrismaService) {}

  public async create(bodyMeasurementDto: CreateBodyMeasurementDTO) {
    const bodyMeasurement = { ...bodyMeasurementDto };

    await this.prismaService.bodyMeasurement.create({
      data: {
        ...bodyMeasurement,
      },
    });
  }

  public async update(bodyMeasurementDto: UpdateBodyMeasurementDTO) {
    const bodyMeasurement = { ...bodyMeasurementDto };

    await this.prismaService.bodyMeasurement.update({
      where: {
        id: bodyMeasurement.id,
      },
      data: {
        ...bodyMeasurement,
      },
    });
  }

  async findAllUser(): Promise<any[]> {
    return await this.prismaService.bodyMeasurement.findMany({
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

  async findAllByUserId(userId: string): Promise<BodyMeasurement[]> {
    return await this.prismaService.bodyMeasurement.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findAllById(id: string): Promise<BodyMeasurement> {
    return await this.prismaService.bodyMeasurement.findFirst({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.bodyMeasurement.delete({
      where: {
        id,
      },
    });
  }
}
