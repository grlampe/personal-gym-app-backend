import { Injectable } from '@nestjs/common';
import { AddressRepository } from '../repositories/address.repository';

@Injectable()
export class UpdateAddressService {
  constructor(private readonly addressRepository: AddressRepository) {}
}
