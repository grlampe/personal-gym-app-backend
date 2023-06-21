import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly cpf: string;

  @IsNotEmpty()
  @IsDateString()
  readonly birthDate: Date;

  @IsNotEmpty()
  @IsString()
  readonly addressStreet: string;

  @IsNotEmpty()
  @IsString()
  readonly addressNumber: string;

  @IsNotEmpty()
  @IsString()
  readonly addressZipCode: string;

  @IsNotEmpty()
  @IsString()
  readonly addressDistrict: string;

  @IsNotEmpty()
  @IsString()
  readonly addressCity: string;

  @IsNotEmpty()
  @IsString()
  readonly addressState: string;

  @IsOptional()
  @IsString()
  readonly addressComplement: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
