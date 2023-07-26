import { ReceivingBillsModule } from './modules/receivingBills/receivingBills.module';
import { BodyMeasurementModule } from './modules/bodyMeasurement/bodyMeasurement.module';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { LoginModule } from './modules/login/login.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { CategoryExerciseModule } from './modules/categoryExercise/categoryExercise.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { ExerciseOnCategoryExerciseModule } from './modules/exerciseOnCategoryExercise/exerciseOnCategoryExercise.module';
import { PreWorkoutModule } from './modules/preWorkout/preWorkout.module';
import { PreWorkoutOnExerciseModule } from './modules/preWorkoutOnExercise/preWorkoutOnExercise.module';
import { WorkoutModule } from './modules/workout/workout.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
    LoginModule,
    CategoryExerciseModule,
    ExerciseModule,
    ExerciseOnCategoryExerciseModule,
    BodyMeasurementModule,
    ReceivingBillsModule,
    PreWorkoutModule,
    PreWorkoutOnExerciseModule,
    WorkoutModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
