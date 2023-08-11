import { ReceivingBills } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class FindAllReceivingBillsService {
  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(): Promise<ReceivingBills[]> {
    return await this.receivingBillsRepository.findAll();
  }
}
