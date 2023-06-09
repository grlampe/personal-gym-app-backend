import { UpdateBodyMeasurementDTO } from './../dtos/updateBodyMeasurement.dto';
import { Injectable, Logger } from '@nestjs/common';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';

@Injectable()
export class UpdateBodyMeasurementService {
  private readonly logger = new Logger(UpdateBodyMeasurementService.name);
  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(bodyMeasurementDto: UpdateBodyMeasurementDTO): Promise<void> {
    this.logger.log(
      `Execute Update Body Measurement ${JSON.stringify(bodyMeasurementDto)}`,
    );
    await this.bodyMeasurementRepository.update(bodyMeasurementDto);
  }
}
