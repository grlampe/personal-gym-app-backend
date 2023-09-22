import { IsNotEmpty, IsNumberString } from 'class-validator';

export class SimpleUserReportDto {
  @IsNumberString()
  @IsNotEmpty()
  activeFilter: string;
}
