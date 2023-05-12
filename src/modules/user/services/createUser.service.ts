import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  private readonly logger = new Logger(CreateUserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUserDto: CreateUserDTO): Promise<void> {
    this.logger.log(`Execute Create User ${JSON.stringify(createUserDto)}`);

    const findUserEmail = await this.userRepository.findByEmail(
      createUserDto.email,
    );

    if (findUserEmail) {
      throw new BadRequestException('User already exists');
    }

    const findUserDocument = await this.userRepository.findByDocument(
      createUserDto.cpf,
    );

    if (findUserDocument) {
      throw new BadRequestException('User already exists');
    }

    await this.userRepository.create(createUserDto);
  }
}
