import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWorkoutOnCategoryDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly workoutId: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
  readonly active: boolean;
}
