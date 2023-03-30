import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOrUpdateAddressDTO } from '../dtos/createorUpdateAddressDTO';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class UpdateAddressService {
  constructor(private readonly addressRepository: AddressRepository) {}

  async execute(
    userID: string,
    request: CreateOrUpdateAddressDTO,
  ): Promise<void> {
    const { street, number, zipCode, complement, state, country, city } =
      request;

    const findAddress = await this.addressRepository.findByUserID(userID);

    if (!findAddress) {
      throw new BadRequestException('User not have an address');
    }

    findAddress.street = street;
    findAddress.number = number;
    findAddress.zipCode = zipCode;
    findAddress.complement = complement;
    findAddress.state = state;
    findAddress.country = country;
    findAddress.city = city;
    findAddress.updatedAt = new Date();

    await this.addressRepository.updateAddress(findAddress.id, findAddress);
  }
}
