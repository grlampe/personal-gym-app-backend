import { Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { AddressRepository } from 'src/modules/address/repositories/address.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prismaService: PrismaService) {}

  async create(address: Address): Promise<Address> {
    return this.prismaService.address.create({
      data: address,
    });
  }

  async findByUserID(userID: string): Promise<Address> {
    return this.prismaService.address.findFirst({
      where: { userID },
    });
  }

  async updateAddress(id: string, updatedAddress: Address): Promise<void> {
    await this.prismaService.address.update({
      where: { id },
      data: updatedAddress,
    });
  }
}
