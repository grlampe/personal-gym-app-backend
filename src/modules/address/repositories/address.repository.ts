import { Address } from '@prisma/client';

export abstract class AddressRepository {
  abstract create(address: Address): Promise<Address>;
  abstract findByUserID(userID: string): Promise<Address>;
}
