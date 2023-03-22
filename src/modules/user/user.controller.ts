import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUserDTO';
import { CreateUserService } from './services/createUser.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { name, email, password, document, birthDate } = body;

    return await this.createUserService.execute({
      name,
      email,
      password,
      document,
      birthDate,
    });
  }
}
