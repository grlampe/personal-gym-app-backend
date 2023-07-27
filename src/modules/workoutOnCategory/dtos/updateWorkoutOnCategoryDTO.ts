import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateWorkoutOnCategoryDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly workoutId: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
