import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
import { ReceivingBillsRepository } from '../../../modules/receivingBills/repositories/receivingBills.repository';
import { ReceivingBills } from '@prisma/client';
import {
  CreateReceivingBillsDTO,
  UpdateReceivingBillsDTO,
} from '../../../modules/receivingBills/dtos/receivingBills.dto';

@Injectable()
export class PrismaReceivingBillsRepository
  implements ReceivingBillsRepository
{
  constructor(private prismaService: PrismaService) {}

  async create(receivingBillsDto: CreateReceivingBillsDTO): Promise<void> {
    const receivingBills = { ...receivingBillsDto };

    await this.prismaService.receivingBills.create({
      data: {
        ...receivingBills,
      },
    });
  }

  async update(receivingBillsDto: UpdateReceivingBillsDTO): Promise<void> {
    const receivingBills = { ...receivingBillsDto };

    await this.prismaService.receivingBills.update({
      where: {
        id: receivingBills.id,
      },
      data: {
        ...receivingBills,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.receivingBills.delete({
      where: {
        id,
      },
    });
  }

  async findAll(): Promise<ReceivingBills[]> {
    return await this.prismaService.receivingBills.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findById(id: string): Promise<ReceivingBills> {
    return await this.prismaService.receivingBills.findFirst({
      where: {
        id,
      },
    });
  }
}
