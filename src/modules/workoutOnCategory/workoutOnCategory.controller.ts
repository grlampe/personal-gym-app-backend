import { UpdateWorkoutOnCategoryService } from './services/updateWorkoutOnCategory.service';
import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateWorkoutOnCategoryDTO } from './dtos/createWorkoutOnCategoryDTO';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreateWorkoutOnCategoryService } from './services/createWorkoutOnCategory.service';
import { DeleteWorkoutOnCategoryService } from './services/deleteWorkoutOnCategory.service';
import { UpdateWorkoutOnCategoryDTO } from './dtos/updateWorkoutOnCategoryDTO';

@Controller('workoutOnCategory')
export class WorkoutOnCategoryController {
  constructor(
    private readonly createWorkoutOnCategoryService: CreateWorkoutOnCategoryService,
    private readonly deleteWorkoutOnCategoryService: DeleteWorkoutOnCategoryService,
    private readonly updateWorkoutOnCategoryService: UpdateWorkoutOnCategoryService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addWorkoutOnCategory(
    @Body() workoutCategoryDto: CreateWorkoutOnCategoryDTO,
  ) {
    await this.createWorkoutOnCategoryService.execute(workoutCategoryDto);
    return {
      message: `WorkoutOnCategory ${workoutCategoryDto.description} created`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateWorkoutOnCategory(
    @Body() workoutCategoryDto: UpdateWorkoutOnCategoryDTO,
  ) {
    await this.updateWorkoutOnCategoryService.execute(workoutCategoryDto);

    return {
      message: `WorkoutOnCategory ${workoutCategoryDto.id} updated`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteWorkoutOnCategoryById(@Param('id') id: string) {
    await this.deleteWorkoutOnCategoryService.execute(id);
    return { message: `WorkoutOnCategory ${id} deleted` };
  }
}
