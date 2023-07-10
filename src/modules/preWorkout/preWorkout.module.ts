import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PreWorkoutController } from './preWorkout.controller';
import { CreatePreWorkoutService } from './services/createPreWorkout.service';
import { UpdatePreWorkoutService } from './services/updatePreWorkout.service';
import { ListAllPreWorkoutService } from './services/listAllPreWorkout.service';
import { FindPreWorkoutByIdService } from './services/findPreWorkoutById.service';
import { DeletePreWorkoutService } from './services/deletePreWorkout.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PreWorkoutController],
  providers: [
    CreatePreWorkoutService,
    UpdatePreWorkoutService,
    ListAllPreWorkoutService,
    FindPreWorkoutByIdService,
    DeletePreWorkoutService,
  ],
})
export class PreWorkoutModule {}
