import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { BodyMeasurementReportController } from './bodyMeasurement.controller';
import { BodyMeasurementReportService } from './services/bodyMeasurement.service';
import { Excel4NodeModule } from '../../libs/excel4node/excel4node.module';

@Module({
  imports: [DatabaseModule, Excel4NodeModule],
  providers: [BodyMeasurementReportService],
  controllers: [BodyMeasurementReportController],
})
export class BodyMeasurementReportModule {}
