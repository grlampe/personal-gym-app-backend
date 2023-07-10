import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';
import { CreateUserDTO } from '../../../modules/user/dtos/createUserDTO';
import { hashSync } from 'bcryptjs';
import { UpdateUserDTO } from '../../../modules/user/dtos/updateUserDTO';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  public async create(userDto: CreateUserDTO) {
    const user = { ...userDto };

    user.password = hashSync(user.password);
    user.birthDate = new Date(user.birthDate);
    await this.prismaService.user.create({
      data: {
        ...user,
      },
    });
  }

  public async update(userDto: UpdateUserDTO) {
    const user = { ...userDto };

    if (user.password) {
      user.password = hashSync(user.password);
    } else {
      delete user.password;
    }

    user.birthDate = new Date(user.birthDate);

    await this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        ...user,
        updatedAt: new Date().toISOString(),
      },
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { email },
    });
  }

  async findByDocument(cpf: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { cpf },
    });
  }
  async findById(id: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
