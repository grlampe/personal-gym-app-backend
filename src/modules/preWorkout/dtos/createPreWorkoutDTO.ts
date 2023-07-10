import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePreWorkoutDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
  readonly active: boolean;
}
