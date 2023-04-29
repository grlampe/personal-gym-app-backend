import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    return await this.userRepository.findById(id);
  }
}
