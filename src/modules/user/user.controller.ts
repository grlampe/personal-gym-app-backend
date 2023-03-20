import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserBody } from './dtos/createUserBody.dto';
import { CreateUserService } from './services/createUser.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async create(@Body() body: CreateUserBody) {}
}
