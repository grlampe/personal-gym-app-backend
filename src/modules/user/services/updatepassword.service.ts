import { BadRequestException, Injectable } from '@nestjs/common';
import { hash } from 'bcryptjs';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UpdatePasswordService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, newPassword: string): Promise<void> {
    const findUser = await this.userRepository.findById(id);

    if (!findUser) {
      throw new BadRequestException('User not found');
    }

    findUser.password = await hash(newPassword, 8);

    await this.userRepository.updatePassword(id, findUser);
  }
}
