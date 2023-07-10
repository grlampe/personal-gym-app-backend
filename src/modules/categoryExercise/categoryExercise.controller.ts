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
import { CategoryExercise } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateCategoryExerciseService } from './services/createCategoryExercise.service';
import { FindCategoryExerciseByIdService } from './services/findCategoryExerciseById.service';
import { ListAllCategoryExerciseService } from './services/listAllCategoryExercise.service';
import { CreateCategoryExerciseDTO } from './dtos/createCategoryExerciseDTO';
import { UpdateCategoryExerciseDTO } from './dtos/updateCategoryExerciseDTO';
import { UpdateCategoryExerciseService } from './services/updateCategoryExercise.service';
import { DeleteCategoryExerciseService } from './services/deleteCategoryExercise.service';

@Controller('categoryExercise')
export class CategoryExerciseController {
  constructor(
    private readonly createCategoryExerciseService: CreateCategoryExerciseService,
    private readonly updateCategoryExerciseService: UpdateCategoryExerciseService,
    private readonly listAllCategoryExerciseService: ListAllCategoryExerciseService,
    private readonly findCategoryExerciseByIdService: FindCategoryExerciseByIdService,
    private readonly deleteCategoryExerciseService: DeleteCategoryExerciseService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addUser(@Body() categoryExerciseDto: CreateCategoryExerciseDTO) {
    await this.createCategoryExerciseService.execute(categoryExerciseDto);
    return { message: `CategoryExercise ${categoryExerciseDto.name} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(@Body() categoryExerciseDto: UpdateCategoryExerciseDTO) {
    await this.updateCategoryExerciseService.execute(categoryExerciseDto);
    return { message: `CategoryExercise ${categoryExerciseDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(): Promise<CategoryExercise[]> {
    return await this.listAllCategoryExerciseService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<CategoryExercise> {
    return await this.findCategoryExerciseByIdService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteBodyMeasurementById(@Param('id') id: string): Promise<void> {
    await this.deleteCategoryExerciseService.execute(id);
  }
}
