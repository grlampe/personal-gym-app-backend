import {
  CreateReceivingBillsDTO,
  UpdateReceivingBillsDTO,
} from './../dtos/receivingBills.dto';
import { ReceivingBills } from '@prisma/client';

export abstract class ReceivingBillsRepository {
  abstract create(receivingBillsDto: CreateReceivingBillsDTO): Promise<void>;
  abstract update(receivingBillsDto: UpdateReceivingBillsDTO): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract findAll(): Promise<ReceivingBills[]>;
  abstract findById(id: string): Promise<ReceivingBills>;
}
