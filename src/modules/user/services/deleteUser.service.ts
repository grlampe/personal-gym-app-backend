import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class DeleteUserService {
  private readonly logger = new Logger(DeleteUserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete User ${id}`);

    await this.userRepository.delete(id);
  }
}
