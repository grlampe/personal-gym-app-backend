import { CreateReceivingBillsService } from './services/createReceivingBills.service';
import { DeleteReceivingBillsService } from './services/deleteReceivingBills.service';
import { FindAllReceivingBillsService } from './services/findAllReceivingBills.service';
import { FindByIdReceivingBillsService } from './services/findByIdReceivingBills.service';
import { UpdateReceivingBillsService } from './services/updateReceivingBills.service';
import { DatabaseModule } from './../../database/database.module';
import { ReceivingBillsController } from './receivingBills.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [ReceivingBillsController],
  providers: [
    UpdateReceivingBillsService,
    FindByIdReceivingBillsService,
    FindAllReceivingBillsService,
    DeleteReceivingBillsService,
    CreateReceivingBillsService,
  ],
})
export class ReceivingBillsModule {}
