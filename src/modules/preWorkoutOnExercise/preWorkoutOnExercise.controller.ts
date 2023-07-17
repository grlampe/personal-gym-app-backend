import { Controller } from '@nestjs/common';
import { CreatePreWorkoutOnExerciseService } from './services/createPreWorkoutOnExercise.service';
import { ListAllPreWorkoutOnExerciseService } from './services/listAllPreWorkoutOnExercise.service';
import { DeletePreWorkoutOnExerciseService } from './services/deletePreWorkoutOnExercise.service';

@Controller('preWorkoutOnExercise')
export class PreWorkoutOnExerciseController {
  constructor(
    private readonly createPreWorkoutOnExerciseService: CreatePreWorkoutOnExerciseService,
    private readonly listAllPreWorkoutOnExerciseService: ListAllPreWorkoutOnExerciseService,
    private readonly deletePreWorkoutOnExerciseService: DeletePreWorkoutOnExerciseService,
  ) {}
}
