import { User } from '@prisma/client';

export abstract class UserRepository {
  abstract create(user: User): Promise<User>;
  abstract findByEmail(email: string): Promise<User>;
  abstract findByDocument(document: string): Promise<User>;
  abstract findById(id: string): Promise<User>;
  abstract updatePassword(id: string, updatedUser: User): Promise<void>;
  abstract findAll(): Promise<User[]>;
}
