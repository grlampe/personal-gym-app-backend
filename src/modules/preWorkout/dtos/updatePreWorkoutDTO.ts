import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdatePreWorkoutDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
