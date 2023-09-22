import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { SimpleUserReportController } from './simpleUser.controller';
import { SimpleUserReportService } from './services/simpleUser.service';
import { Excel4NodeModule } from '../../libs/excel4node/excel4node.module';

@Module({
  imports: [DatabaseModule, Excel4NodeModule],
  providers: [SimpleUserReportService],
  controllers: [SimpleUserReportController],
})
export class SimpleUserReportModule {}
