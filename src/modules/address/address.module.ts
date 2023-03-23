import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AddressController } from './address.controller';
import { CreateAddressService } from './services/createAddress.service';
import { UpdateAddressService } from './services/updateAddress.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AddressController],
  providers: [CreateAddressService, UpdateAddressService],
})
export class AddressModule {}
