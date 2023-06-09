import { CreateBodyMeasurementDTO } from '../dtos/createBodyMeasurementDTO';
import { BodyMeasurement } from '@prisma/client';

export abstract class BodyMeasurementRepository {
  abstract create(bodyMeasurementDto: CreateBodyMeasurementDTO): Promise<void>;
  abstract findAllUser(): Promise<any[]>;
  abstract findAllByUserId(userId: string): Promise<BodyMeasurement[]>;
  abstract findAllById(id: string): Promise<BodyMeasurement>;
}
