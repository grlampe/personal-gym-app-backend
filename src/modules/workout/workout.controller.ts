import { FindByIdWorkoutService } from './services/findByIdWorkout.service';
import { FindAllUsersWorkoutService } from './services/findAllUsersWorkout.service';
import { FindAllByUserIdWorkoutService } from './services/findAllByUserIdWorkout.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateWorkoutService } from './services/createworkout.service';
import { UpdateWorkoutService } from './services/updateworkout.service';
import { DeleteWorkoutService } from './services/deleteWorkout.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateWorkoutDTO } from './dtos/createWorkoutDTO';
import { UpdateWorkoutDTO } from './dtos/updateWorkoutDTO';
import { Workout } from '@prisma/client';

@Controller('workout')
export class WorkoutController {
  constructor(
    private readonly createWorkoutService: CreateWorkoutService,
    private readonly updateWorkoutService: UpdateWorkoutService,
    private readonly deleteWorkoutService: DeleteWorkoutService,
    private readonly findAllByUserIdWorkoutService: FindAllByUserIdWorkoutService,
    private readonly findAllUsersWorkoutService: FindAllUsersWorkoutService,
    private readonly findByIdWorkoutService: FindByIdWorkoutService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addWorkout(@Body() createWorkoutDTO: CreateWorkoutDTO) {
    await this.createWorkoutService.execute(createWorkoutDTO);
    return { message: `Workout ${createWorkoutDTO.description} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateWorkout(@Body() updateWorkoutDTO: UpdateWorkoutDTO) {
    await this.updateWorkoutService.execute(updateWorkoutDTO);
    return { message: `Workout ${updateWorkoutDTO.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user/:id')
  async getAllByUserId(@Param('id') id: string): Promise<Workout[]> {
    return await this.findAllByUserIdWorkoutService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user')
  async getAllUsers(): Promise<any[]> {
    return await this.findAllUsersWorkoutService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Workout> {
    return await this.findByIdWorkoutService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteWorkoutById(@Param('id') id: string) {
    await this.deleteWorkoutService.execute(id);
    return { message: `Workout ${id} deleted` };
  }
}
