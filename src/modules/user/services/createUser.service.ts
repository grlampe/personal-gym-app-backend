import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { hash } from 'bcryptjs';
import { randomUUID } from 'crypto';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CreateUserDTO): Promise<User> {
    const { name, email, password, document, birthDate } = request;

    const findUserEmail = await this.userRepository.findByEmail(email);

    if (findUserEmail) {
      throw new BadRequestException('User already exists');
    }

    const findUserDocument = await this.userRepository.findByDocument(document);

    if (findUserDocument) {
      throw new BadRequestException('User already exists');
    }

    const newUser = {
      id: randomUUID(),
      name,
      email,
      password: await hash(password, 8),
      document,
      birthDate: new Date(birthDate),
      active: true,
      createdAt: new Date(),
    };

    const user = await this.userRepository.create(newUser);

    return user;
  }
}
