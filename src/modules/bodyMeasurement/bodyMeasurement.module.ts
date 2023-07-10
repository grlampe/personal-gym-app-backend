import { UpdateBodyMeasurementService } from './services/updateBodyMeasurement.service';
import { FindBodyMeasurementByIdService } from './services/findBodyMeasurementById.service';
import { ListAllBodyMeasurementByUserIdService } from './services/listAllBodyMeasurementByUserId.service';
import { ListAllUsersBodyMeasurementService } from './services/listAllUsersBodyMeasurement.service';
import { CreateBodyMeasurementService } from './services/createBodyMeasurement.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BodyMeasurementController } from './bodyMeasurement.controller';
import { DeleteBodyMeasurementService } from './services/deleteBodyMeasurement.service';

@Module({
  imports: [DatabaseModule],
  controllers: [BodyMeasurementController],
  providers: [
    CreateBodyMeasurementService,
    ListAllUsersBodyMeasurementService,
    ListAllBodyMeasurementByUserIdService,
    FindBodyMeasurementByIdService,
    UpdateBodyMeasurementService,
    DeleteBodyMeasurementService,
  ],
})
export class BodyMeasurementModule {}
