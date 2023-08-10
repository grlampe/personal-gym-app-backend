import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateWorkoutOnExerciseDTO {
  readonly id: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly workoutOnCategoryId: string;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  readonly exerciseId: string;

  @IsNotEmpty()
  @IsNumber()
  readonly order: number;

  @IsNotEmpty()
  @IsString()
  readonly restTime: string;

  @IsNotEmpty()
  @IsNumber()
  readonly series: number;

  @IsNotEmpty()
  @IsString()
  readonly repetitions: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsOptional()
  @IsString()
  readonly observation: string;
}
