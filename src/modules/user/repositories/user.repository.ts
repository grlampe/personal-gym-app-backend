import { User } from '@prisma/client';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UpdateUserDTO } from '../dtos/updateUserDTO';

export abstract class UserRepository {
  abstract create(userDto: CreateUserDTO): Promise<void>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findByDocument(document: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract update(userDto: UpdateUserDTO): Promise<void>;
  abstract findAll(): Promise<User[]>;
  abstract delete(id: string): Promise<void>;
}
