import { CreateBodyMeasurementDTO } from './../dtos/createBodyMeasurementDTO';
import { Injectable, Logger } from '@nestjs/common';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';

@Injectable()
export class CreateBodyMeasurementService {
  private readonly logger = new Logger(CreateBodyMeasurementService.name);

  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(bodyMeasurementDto: CreateBodyMeasurementDTO): Promise<void> {
    this.logger.log(
      `Execute Create Body Measurement ${JSON.stringify(bodyMeasurementDto)}`,
    );

    await this.bodyMeasurementRepository.create(bodyMeasurementDto);
  }
}
