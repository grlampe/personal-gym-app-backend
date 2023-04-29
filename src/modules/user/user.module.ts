import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CreateUserService } from './services/createUser.service';
import { FindUserByIdService } from './services/findUserById.service';
import { ListAllUserService } from './services/listAllUser.service';
import { UpdatePasswordService } from './services/updatepassword.service';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    CreateUserService,
    UpdatePasswordService,
    ListAllUserService,
    FindUserByIdService,
  ],
})
export class UserModule {}
