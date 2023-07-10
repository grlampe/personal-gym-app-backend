import { Injectable } from '@nestjs/common';
import { BodyMeasurement } from '@prisma/client';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';

@Injectable()
export class FindBodyMeasurementByIdService {
  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(id: string): Promise<BodyMeasurement> {
    return await this.bodyMeasurementRepository.findAllById(id);
  }
}
