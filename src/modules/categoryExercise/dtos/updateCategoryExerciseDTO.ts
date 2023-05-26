import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCategoryExerciseDTO {
  @IsNotEmpty()
  @IsString()
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsBoolean()
  readonly active: boolean;
}
