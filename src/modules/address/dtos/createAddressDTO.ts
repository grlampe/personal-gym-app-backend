import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAddressDTO {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  @IsNumber()
  number: number;

  @IsNotEmpty()
  zipCode: string;

  complement: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  city: string;
}
