import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class DeleteUserService {
  private readonly logger = new Logger(DeleteUserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<void> {
    this.logger.log(`Execute Delete User ${id}`);

    try {
      await this.userRepository.delete(id);
    } catch (err) {
      if (err.message.includes('Foreign key constraint failed on the field')) {
        throw new BadRequestException(
          'Existem registros vinculádos e este cadastro!',
        );
      }
      throw new InternalServerErrorException(err);
    }
  }
}
