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
import { CreateWorkoutOnExerciseService } from './services/createWorkoutOnExercise.service';
import { UpdateWorkoutOnExerciseService } from './services/updateWorkoutOnExercise.service';
import { DeleteWorkoutOnExerciseService } from './services/deleteWorkoutOnExercise.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateWorkoutOnExerciseDTO } from './dtos/createWorkoutOnExerciseDTO';
import { ListAllWorkoutOnExerciseByWorkoutCategoryIdService } from './services/listAllWorkoutOnExerciseByWorkoutCategoryId.service';
import { UpdateWorkoutOnExerciseDTO } from './dtos/updateWorkoutOnExerciseDTO';

@Controller('workoutOnExercise')
export class WorkoutOnExerciseController {
  constructor(
    private readonly createWorkoutOnExerciseService: CreateWorkoutOnExerciseService,
    private readonly updateWorkoutOnExerciseService: UpdateWorkoutOnExerciseService,
    private readonly deleteWorkoutOnExerciseService: DeleteWorkoutOnExerciseService,
    private readonly listAllWorkoutOnExerciseByWorkoutCategoryIdService: ListAllWorkoutOnExerciseByWorkoutCategoryIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addWorkoutOnExercise(
    @Body() workoutOnExerciseDto: CreateWorkoutOnExerciseDTO,
  ) {
    await this.createWorkoutOnExerciseService.execute(workoutOnExerciseDto);
    return {
      message: `Exercise ${workoutOnExerciseDto.exerciseId} created on WorkoutOnExercise`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateWorkoutOnExercise(
    @Body() workoutOnExerciseDto: UpdateWorkoutOnExerciseDTO[],
  ) {
    await this.updateWorkoutOnExerciseService.execute(workoutOnExerciseDto);
    return {
      message: `WorkoutOnExercise ${workoutOnExerciseDto[0].id} updated`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('workoutCategory/:id')
  async getWorkoutOnExerciseByWorkoutCategoryId(@Param('id') id: string) {
    return await this.listAllWorkoutOnExerciseByWorkoutCategoryIdService.execute(
      id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeWorkoutOnExercise(@Param('id') id: string) {
    await this.deleteWorkoutOnExerciseService.execute(id);
    return {
      message: `WorkoutOnExercise ${id} deleted`,
    };
  }
}
