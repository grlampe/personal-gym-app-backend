import { CreateReceivingBillsDTO } from './../dtos/receivingBills.dto';
import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class CreateReceivingBillsService {
  private readonly logger = new Logger(CreateReceivingBillsService.name);

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(receivingBillsDto: CreateReceivingBillsDTO): Promise<void> {
    this.logger.log(
      `Execute Receiving Bills ${JSON.stringify(receivingBillsDto)}`,
    );

    await this.receivingBillsRepository.create(receivingBillsDto);
  }
}
