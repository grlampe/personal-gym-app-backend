import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { WorkoutReportController } from './workout.controller';
import { WorkoutReportService } from './services/workout.service';
import { Excel4NodeModule } from '../../libs/excel4node/excel4node.module';

@Module({
  imports: [DatabaseModule, Excel4NodeModule],
  providers: [WorkoutReportService],
  controllers: [WorkoutReportController],
})
export class WorkoutReportModule {}
