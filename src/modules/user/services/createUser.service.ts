import { Injectable } from '@nestjs/common';
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

    const newUser = {
      id: randomUUID(),
      name,
      email,
      password: await hash(password, 8),
      document,
      birthDate,
      active: true,
      createdAt: new Date(),
    };

    const user = await this.userRepository.create(newUser);

    return user;
  }
}
