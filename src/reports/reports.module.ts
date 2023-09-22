import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BodyMeasurementReportModule } from './bodyMeasurement/bodyMeasurement.module';
import { ReceivingBillsReportModule } from './receivingBills/receivingBills.module';
import { SimpleUserReportModule } from './simpleUser/simpleUser.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'reports',
        children: [
          BodyMeasurementReportModule,
          ReceivingBillsReportModule,
          SimpleUserReportModule,
        ],
      },
    ]),
    BodyMeasurementReportModule,
    ReceivingBillsReportModule,
    SimpleUserReportModule,
  ],
})
export class ReportsModule {}
