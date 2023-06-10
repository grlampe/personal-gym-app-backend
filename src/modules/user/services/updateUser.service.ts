import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UpdateUserDTO } from '../dtos/updateUserDTO';

@Injectable()
export class UpdateUserService {
  private readonly logger = new Logger(UpdateUserService.name);
  constructor(private readonly userRepository: UserRepository) {}

  async execute(updateUserDto: UpdateUserDTO): Promise<void> {
    this.logger.log(`Execute Update User ${JSON.stringify(updateUserDto)}`);
    await this.userRepository.update(updateUserDto);
  }
}
