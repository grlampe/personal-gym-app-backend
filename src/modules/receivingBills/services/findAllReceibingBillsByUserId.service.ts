import { ReceivingBills } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class FindAllReceivingBillsByUserIdService {
  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(userId: string): Promise<ReceivingBills[]> {
    return await this.receivingBillsRepository.findAllByUserId(userId);
  }
}
