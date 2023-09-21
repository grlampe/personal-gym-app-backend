import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BodyMeasurementReportModule } from './bodyMeasurement/bodyMeasurement.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'reports',
        children: [BodyMeasurementReportModule],
      },
    ]),
    BodyMeasurementReportModule,
  ],
})
export class ReportsModule {}
