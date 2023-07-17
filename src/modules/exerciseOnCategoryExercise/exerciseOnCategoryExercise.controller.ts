import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateExerciseOnCategoryExerciseService } from './services/createExerciseOnCategoryExercise.service';
import { DeleteExerciseOnCategoryExerciseService } from './services/deleteExerciseOnCategoryExercise.service';
import { CreateExerciseOnCategoryExerciseDTO } from './dtos/exerciseOnCategoryExercise.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { FindAllByExerciseIdExerciseOnCategoryExerciseService } from './services/findAllByExerciseIdExerciseOnCategoryExercise.service';
import { FindAllByCategoryExerciseIdExerciseOnCategoryExerciseService } from './services/findAllByCategoryExerciseIdExerciseOnCategoryExercise.service';

@Controller('exerciseOnCategoryExercise')
export class ExerciseOnCategoryExerciseController {
  constructor(
    private readonly createExerciseOnCategoryExerciseService: CreateExerciseOnCategoryExerciseService,
    private readonly deleteExerciseOnCategoryExerciseService: DeleteExerciseOnCategoryExerciseService,
    private readonly findAllByExerciseIdExerciseOnCategoryExerciseService: FindAllByExerciseIdExerciseOnCategoryExerciseService,
    private readonly findAllByCategoryExerciseIdExerciseOnCategoryExerciseService: FindAllByCategoryExerciseIdExerciseOnCategoryExerciseService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addExerciseOnCategoryExercise(
    @Body() exerciseOnCategoryExerciseDto: CreateExerciseOnCategoryExerciseDTO,
  ) {
    await this.createExerciseOnCategoryExerciseService.execute(
      exerciseOnCategoryExerciseDto,
    );
    return {
      message: `Exercise ${exerciseOnCategoryExerciseDto.exerciseId} CategoryExercise ${exerciseOnCategoryExerciseDto.categoryExerciseId} created on ExerciseOnCategoryExercise`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('exercideId/:id')
  async listExerciseOnCategoryExerciseId(@Param('id') id: string) {
    return await this.findAllByExerciseIdExerciseOnCategoryExerciseService.execute(
      id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get('categoryExercideId/:id')
  async listExerciseOnCategoryByCategoryExerciseId(@Param('id') id: string) {
    return await this.findAllByCategoryExerciseIdExerciseOnCategoryExerciseService.execute(
      id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete('exercideId/:id')
  async removeExerciseOnCategoryExercise(@Param('id') id: string) {
    await this.deleteExerciseOnCategoryExerciseService.execute(id);
    return {
      message: `ExerciseOnCategoryExercise ${id} deleted`,
    };
  }
}
