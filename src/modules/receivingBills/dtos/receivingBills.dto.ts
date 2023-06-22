import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReceivingBillsDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsDateString()
  @IsNotEmpty()
  expirationAt: Date;

  @IsOptional()
  @IsDateString()
  paidAt: Date;
}

export class UpdateReceivingBillsDTO {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsDateString()
  @IsNotEmpty()
  expirationAt: Date;

  @IsOptional()
  @IsDateString()
  paidAt: Date;
}
