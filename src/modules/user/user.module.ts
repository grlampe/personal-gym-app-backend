import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CreateUserService } from './services/createUser.service';
import { FindUserByIdService } from './services/findUserById.service';
import { ListAllUserService } from './services/listAllUser.service';
import { UserController } from './user.controller';
import { UpdateUserService } from './services/updateUser.service';
import { DeleteUserService } from './services/deleteUser.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserService,
    UpdateUserService,
    ListAllUserService,
    FindUserByIdService,
    DeleteUserService,
  ],
})
export class UserModule {}
