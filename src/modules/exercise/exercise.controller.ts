import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Exercise } from '@prisma/client';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateExerciseDTO } from './dtos/createExerciseDTO';
import { UpdateExerciseDTO } from './dtos/updateExerciseDTO';
import { CreateExerciseService } from './services/createExercise.service';
import { FindExerciseByIdService } from './services/findExerciseById.service';
import { ListAllExerciseService } from './services/listAllExercise.service';
import { UpdateExerciseService } from './services/updateExercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(
    private readonly createExerciseService: CreateExerciseService,
    private readonly updateExerciseService: UpdateExerciseService,
    private readonly listAllExerciseService: ListAllExerciseService,
    private readonly findExerciseByIdService: FindExerciseByIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addUser(@Body() ExerciseDto: CreateExerciseDTO) {
    await this.createExerciseService.execute(ExerciseDto);
    return { message: `Exercise ${ExerciseDto.name} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateUser(@Body() ExerciseDto: UpdateExerciseDTO) {
    await this.updateExerciseService.execute(ExerciseDto);
    return { message: `Exercise ${ExerciseDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(): Promise<Exercise[]> {
    return await this.listAllExerciseService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Exercise> {
    return await this.findExerciseByIdService.execute(id);
  }
}
