import { UserRepository } from '../repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class FindUserByIdService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User> {
    const resp = await this.userRepository.findById(id);

    if (resp.password) {
      delete resp.password;
    }

    return resp;
  }
}
