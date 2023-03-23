import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Address } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateAddressDTO } from './dtos/createAddressDTO';
import { CreateAddressService } from './services/createAddress.service';
import { UpdateAddressService } from './services/updateAddress.service';

@Controller('address')
export class AddressController {
  constructor(
    private readonly createAddressService: CreateAddressService,
    private readonly updateAddressService: UpdateAddressService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body: CreateAddressDTO, @Req() req): Promise<Address> {
    const { userID } = req.user;
    const { street, number, zipCode, complement, state, country, city } = body;

    return await this.createAddressService.execute(userID, {
      street,
      number,
      zipCode,
      complement,
      state,
      country,
      city,
    });
  }
}
