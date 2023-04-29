import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserRepository } from 'src/modules/user/repositories/user.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: User): Promise<User> {
    return this.prismaService.user.create({
      data: user,
    });
  }

  async findByEmail(email: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { email },
    });
  }

  async findByDocument(document: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { document },
    });
  }
  async findById(id: string): Promise<User> {
    return this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async updatePassword(id: string, updatedUser: User): Promise<void> {
    await this.prismaService.user.update({
      where: { id },
      data: updatedUser,
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany();
  }
}
