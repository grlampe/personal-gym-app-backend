import { BadRequestException, Injectable } from '@nestjs/common';
import { Address } from '@prisma/client';
import { randomUUID } from 'crypto';
import { CreateAddressDTO } from '../dtos/createAddressDTO';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class CreateAddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(userID: string, request: CreateAddressDTO): Promise<Address> {
    const { street, number, zipCode, complement, state, country, city } =
      request;

    const findAddress = await this.addressRepository.findByUserID(userID);

    if (findAddress) {
      throw new BadRequestException('User already have an address');
    }

    const address = await this.addressRepository.create({
      id: randomUUID(),
      userID,
      street,
      number,
      zipCode,
      complement: !complement ? undefined : complement,
      state,
      country,
      city,
      createdAt: new Date(),
    });

    return address;
  }
}
