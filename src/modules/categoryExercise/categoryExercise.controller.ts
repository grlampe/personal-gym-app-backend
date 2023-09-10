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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
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
  async addCategoryExercise(
    @Body() categoryExerciseDto: CreateCategoryExerciseDTO,
  ) {
    await this.createCategoryExerciseService.execute(categoryExerciseDto);
    return { message: `CategoryExercise ${categoryExerciseDto.name} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateCategoryExercise(
    @Body() categoryExerciseDto: UpdateCategoryExerciseDTO,
  ) {
    await this.updateCategoryExerciseService.execute(categoryExerciseDto);
    return { message: `CategoryExercise ${categoryExerciseDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllCategoryExercise(): Promise<CategoryExercise[]> {
    return await this.listAllCategoryExerciseService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findCategoryExerciseById(
    @Param('id') id: string,
  ): Promise<CategoryExercise> {
    return await this.findCategoryExerciseByIdService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteCategoryExerciseById(@Param('id') id: string) {
    await this.deleteCategoryExerciseService.execute(id);
    return { message: `CategoryExercise ${id} deleted` };
  }
}
