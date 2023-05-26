import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExerciseDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly name: string;
  readonly active: boolean;
}
