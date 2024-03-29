import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateBodyMeasurementDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  workoutId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  height: number;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

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
