import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AddressModule } from './modules/address/address.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, LoginModule, AddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
