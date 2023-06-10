import { ReceivingBills } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class FindAllReceivingBillsByUserIdService {
  private readonly logger = new Logger(
    FindAllReceivingBillsByUserIdService.name,
  );

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(userId: string): Promise<ReceivingBills[]> {
    this.logger.log(
      `List All Receiving Bills By UserId ${JSON.stringify(userId)}`,
    );

    return await this.receivingBillsRepository.findAllByUserId(userId);
  }
}
