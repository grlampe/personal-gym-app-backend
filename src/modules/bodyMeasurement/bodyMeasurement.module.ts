import { UpdateBodyMeasurementService } from './services/updateBodyMeasurement.service';
import { ListAllBodyMeasurementByIdService } from './services/listAllBodyMeasurementById.service';
import { ListAllBodyMeasurementByUserIdService } from './services/listAllBodyMeasurementByUserId.service';
import { ListAllUsersBodyMeasurementService } from './services/listAllUsersBodyMeasurement.service';
import { CreateBodyMeasurementService } from './services/createBodyMeasurement.service';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BodyMeasurementController } from './bodyMeasurement.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [BodyMeasurementController],
  providers: [
    CreateBodyMeasurementService,
    ListAllUsersBodyMeasurementService,
    ListAllBodyMeasurementByUserIdService,
    ListAllBodyMeasurementByIdService,
    UpdateBodyMeasurementService,
  ],
})
export class BodyMeasurementModule {}
