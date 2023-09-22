import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ReceivingBillsReportController } from './receivingBills.controller';
import { ReceivingBillsReportService } from './services/receivingBills.service';
import { Excel4NodeModule } from '../../libs/excel4node/excel4node.module';

@Module({
  imports: [DatabaseModule, Excel4NodeModule],
  providers: [ReceivingBillsReportService],
  controllers: [ReceivingBillsReportController],
})
export class ReceivingBillsReportModule {}
