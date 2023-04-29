import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateUserDTO } from './dtos/createUserDTO';
import { CreateUserService } from './services/createUser.service';
import { FindUserByIdService } from './services/findUserById.service';
import { ListAllUserService } from './services/listAllUser.service';
import { UpdatePasswordService } from './services/updatepassword.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updatePasswordService: UpdatePasswordService,
    private readonly listAllUserService: ListAllUserService,
    private readonly findUserByIdService: FindUserByIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(): Promise<User[]> {
    return await this.listAllUserService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<User> {
    return await this.findUserByIdService.execute(id);
  }
}
