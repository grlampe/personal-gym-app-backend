import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateUserDTO } from './dtos/createUserDTO';
import { CreateUserService } from './services/createUser.service';
import { UpdatePasswordService } from './services/updatepassword.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updatePasswordService: UpdatePasswordService,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDTO): Promise<User> {
    const { name, email, password, document, birthDate } = body;

    return await this.createUserService.execute({
      name,
      email,
      password,
      document,
      birthDate,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Put('changePassword')
  async updatePassword(@Body() body, @Req() req): Promise<void> {
    const { password } = body;
    const { userID } = req.user;
    return await this.updatePasswordService.execute(userID, password);
  }
}
