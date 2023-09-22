import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class ReceivingBillsReportDto {
  @IsNumberString()
  @IsNotEmpty()
  isPaidFilter: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
