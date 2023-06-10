import { ReceivingBills } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class FindAllReceivingBillsService {
  private readonly logger = new Logger(FindAllReceivingBillsService.name);

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(): Promise<ReceivingBills[]> {
    this.logger.log(`List All Receiving Bills`);

    return await this.receivingBillsRepository.findAll();
  }
}
