import { BodyMeasurementModule } from './modules/bodyMeasurement/bodyMeasurement.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryExerciseModule } from './modules/categoryExercise/categoryExercise.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { ExerciseOnCategoryExerciseModule } from './modules/exerciseOnCategoryExercise/exerciseOnCategoryExercise.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    LoginModule,
    CategoryExerciseModule,
    ExerciseModule,
    ExerciseOnCategoryExerciseModule,
    BodyMeasurementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
