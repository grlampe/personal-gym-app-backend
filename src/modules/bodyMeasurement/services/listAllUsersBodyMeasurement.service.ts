import { Injectable } from '@nestjs/common';
import { BodyMeasurement } from '@prisma/client';
import { BodyMeasurementRepository } from '../repositories/bodyMeasurement.repository';

@Injectable()
export class ListAllUsersBodyMeasurementService {
  constructor(
    private readonly bodyMeasurementRepository: BodyMeasurementRepository,
  ) {}

  async execute(): Promise<BodyMeasurement[]> {
    return await this.bodyMeasurementRepository.findAllUser();
  }
}
