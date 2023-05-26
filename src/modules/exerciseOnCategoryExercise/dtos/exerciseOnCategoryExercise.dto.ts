import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseOnCategoryExerciseDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly exerciseId: string;

  @IsNotEmpty()
  @IsString()
  readonly categoryExerciseId: string;
}
