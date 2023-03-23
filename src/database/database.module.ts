import { Module } from '@nestjs/common';
import { AddressRepository } from 'src/modules/address/repositories/address.repository';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaAddressRepository } from './prisma/repositories/prisma-address.repository';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
  ],
  exports: [UserRepository, AddressRepository],
})
export class DatabaseModule {}
