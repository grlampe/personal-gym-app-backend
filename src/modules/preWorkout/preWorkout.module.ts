import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PreWorkoutController } from './preWorkout.controller';
import { CreatePreWorkoutService } from './services/createPreWorkout.service';
import { UpdatePreWorkoutService } from './services/updatePreWorkout.service';
import { ListAllPreWorkoutService } from './services/listAllPreWorkout.service';
import { FindPreWorkoutByIdService } from './services/findPreWorkoutById.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PreWorkoutController],
  providers: [
    CreatePreWorkoutService,
    UpdatePreWorkoutService,
    ListAllPreWorkoutService,
    FindPreWorkoutByIdService,
  ],
})
export class PreWorkoutModule {}
