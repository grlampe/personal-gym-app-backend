import { Injectable, Logger } from '@nestjs/common';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';
@Injectable()
export class DeleteBodyMeasurementService {
  private readonly logger = new Logger(DeleteBodyMeasurementService.name);

  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete Body Measurement ${id}`);
    await this.bodyMeasurementRepository.delete(id);
  }
}
