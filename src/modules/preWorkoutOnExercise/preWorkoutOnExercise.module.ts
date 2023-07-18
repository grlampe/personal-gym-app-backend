import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PreWorkoutOnExerciseController } from './preWorkoutOnExercise.controller';
import { CreatePreWorkoutOnExerciseService } from './services/createPreWorkoutOnExercise.service';
import { UpdatePreWorkoutOnExerciseService } from './services/updatePreWorkoutOnExercise.service';
import { DeletePreWorkoutOnExerciseService } from './services/deletePreWorkoutOnExercise.service';
import { ListAllPreWorkoutOnExerciseByPreWorkoutIdService } from './services/listAllPreWorkoutOnExerciseByPreWorkoutId.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PreWorkoutOnExerciseController],
  providers: [
    CreatePreWorkoutOnExerciseService,
    UpdatePreWorkoutOnExerciseService,
    DeletePreWorkoutOnExerciseService,
    ListAllPreWorkoutOnExerciseByPreWorkoutIdService,
  ],
})
export class PreWorkoutOnExerciseModule {}
