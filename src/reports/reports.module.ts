import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { BodyMeasurementReportModule } from './bodyMeasurement/bodyMeasurement.module';
import { ReceivingBillsReportModule } from './receivingBills/receivingBills.module';
import { SimpleUserReportModule } from './simpleUser/simpleUser.module';
import { WorkoutReportModule } from './workout/workout.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'reports',
        children: [
          BodyMeasurementReportModule,
          ReceivingBillsReportModule,
          SimpleUserReportModule,
          WorkoutReportModule,
        ],
      },
    ]),
    BodyMeasurementReportModule,
    ReceivingBillsReportModule,
    SimpleUserReportModule,
    WorkoutReportModule,
  ],
})
export class ReportsModule {}
