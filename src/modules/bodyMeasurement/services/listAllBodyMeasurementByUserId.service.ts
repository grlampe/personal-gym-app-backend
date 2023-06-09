import { Injectable } from '@nestjs/common';
import { BodyMeasurement } from '@prisma/client';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';

@Injectable()
export class ListAllBodyMeasurementByUserIdService {
  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(userId: string): Promise<BodyMeasurement[]> {
    return await this.bodyMeasurementRepository.findAllByUserId(userId);
  }
}
