import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateUserService } from './services/createUser.service';
import { FindUserByIdService } from './services/findUserById.service';
import { ListAllUserService } from './services/listAllUser.service';
import { CreateUserDTO } from './dtos/createUserDTO';
import { UpdateUserDTO } from './dtos/updateUserDTO';
import { UpdateUserService } from './services/updateUser.service';
import { DeleteUserService } from './services/deleteUser.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly listAllUserService: ListAllUserService,
    private readonly findUserByIdService: FindUserByIdService,
    private readonly deleteUserService: DeleteUserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addUser(@Body() userDto: CreateUserDTO) {
    await this.createUserService.execute(userDto);
    return { message: `User ${userDto.email} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(@Body() userDto: UpdateUserDTO) {
    await this.updateUserService.execute(userDto);
    return { message: `User ${userDto.id} updated` };
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

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async DeleteUserById(@Param('id') id: string) {
    await this.deleteUserService.execute(id);
    return { message: `User ${id} deleted` };
  }
}
