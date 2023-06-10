import { UpdateReceivingBillsDTO } from './../dtos/receivingBills.dto';
import { Injectable, Logger } from '@nestjs/common';
import { ReceivingBillsRepository } from '../repositories/receivingBills.repository';

@Injectable()
export class UpdateReceivingBillsService {
  private readonly logger = new Logger(UpdateReceivingBillsService.name);

  constructor(
    private readonly receivingBillsRepository: ReceivingBillsRepository,
  ) {}

  async execute(receivingBillsDto: UpdateReceivingBillsDTO): Promise<void> {
    this.logger.log(
      `Update Receiving Bills ${JSON.stringify(receivingBillsDto.id)}`,
    );

    await this.receivingBillsRepository.update(receivingBillsDto);
  }
}
