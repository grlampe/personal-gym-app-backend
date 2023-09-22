import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class WorkoutReportDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  workoutId: string;

  @IsString()
  @IsNotEmpty()
  exerciseId: string;
}
