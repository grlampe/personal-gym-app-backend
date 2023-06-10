import { ReceivingBills } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class FindByIdReceivingBillsService {
  private readonly logger = new Logger(FindByIdReceivingBillsService.name);

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(id: string): Promise<ReceivingBills> {
    this.logger.log(`List Receiving Bills by ${JSON.stringify(id)}`);

    return await this.receivingBillsRepository.findById(id);
  }
}
