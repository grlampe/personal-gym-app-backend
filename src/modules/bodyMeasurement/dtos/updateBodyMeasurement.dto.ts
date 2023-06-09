import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateBodyMeasurementDTO {
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
  chestBust: number;

  @IsNotEmpty()
  @IsNumber()
  leftArm: number;

  @IsNotEmpty()
  @IsNumber()
  rightArm: number;

  @IsNotEmpty()
  @IsNumber()
  abdomen: number;

  @IsNotEmpty()
  @IsNumber()
  waist: number;

  @IsNotEmpty()
  @IsNumber()
  hips: number;

  @IsNotEmpty()
  @IsNumber()
  leftThigh: number;

  @IsNotEmpty()
  @IsNumber()
  rightThigh: number;
}
