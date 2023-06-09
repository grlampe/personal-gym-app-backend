import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CreateCategoryExerciseService } from './services/createCategoryExercise.service';
import { FindCategoryExerciseByIdService } from './services/findCategoryExerciseById.service';
import { ListAllCategoryExerciseService } from './services/listAllCategoryExercise.service';
import { CategoryExerciseController } from './categoryExercise.controller';
import { UpdateCategoryExerciseService } from './services/updateCategoryExercise.service';
import { DeleteCategoryExerciseService } from './services/deleteCategoryExercise.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryExerciseController],
  providers: [
    CreateCategoryExerciseService,
    UpdateCategoryExerciseService,
    ListAllCategoryExerciseService,
    FindCategoryExerciseByIdService,
    DeleteCategoryExerciseService,
  ],
})
export class CategoryExerciseModule {}
