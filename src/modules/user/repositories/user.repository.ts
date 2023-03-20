import { User } from '@prisma/client';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
}
