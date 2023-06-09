import { UpdateBodyMeasurementDTO } from './../dtos/updateBodyMeasurement.dto';
import { CreateBodyMeasurementDTO } from '../dtos/createBodyMeasurement.dto';
import { BodyMeasurement } from '@prisma/client';

export abstract class BodyMeasurementRepository {
  abstract create(bodyMeasurementDto: CreateBodyMeasurementDTO): Promise<void>;
  abstract findAllUser(): Promise<any[]>;
  abstract findAllByUserId(userId: string): Promise<BodyMeasurement[]>;
  abstract findAllById(id: string): Promise<BodyMeasurement>;
  abstract update(bodyMeasurementDto: UpdateBodyMeasurementDTO): Promise<void>;
}
