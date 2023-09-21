import { IsDateString, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class BodyMeasurementReportDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  workoutId: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;
}
