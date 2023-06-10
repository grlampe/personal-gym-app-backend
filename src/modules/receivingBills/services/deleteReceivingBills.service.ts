import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class DeleteReceivingBillsService {
  private readonly logger = new Logger(DeleteReceivingBillsService.name);

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Delete Receiving Bills ${JSON.stringify(id)}`);

    await this.receivingBillsRepository.delete(id);
  }
}
