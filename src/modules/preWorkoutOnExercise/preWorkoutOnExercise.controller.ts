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
import { CreatePreWorkoutOnExerciseService } from './services/createPreWorkoutOnExercise.service';
import { UpdatePreWorkoutOnExerciseService } from './services/updatePreWorkoutOnExercise.service';
import { DeletePreWorkoutOnExerciseService } from './services/deletePreWorkoutOnExercise.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreatePreWorkoutOnExerciseDTO } from './dtos/createPreWorkoutOnExerciseDTO';
import { ListAllPreWorkoutOnExerciseByPreWorkoutIdService } from './services/listAllPreWorkoutOnExerciseByPreWorkoutId.service';
import { UpdatePreWorkoutOnExerciseDTO } from './dtos/updatePreWorkoutOnExerciseDTO';

@Controller('preWorkoutOnExercise')
export class PreWorkoutOnExerciseController {
  constructor(
    private readonly createPreWorkoutOnExerciseService: CreatePreWorkoutOnExerciseService,
    private readonly updatePreWorkoutOnExerciseService: UpdatePreWorkoutOnExerciseService,
    private readonly deletePreWorkoutOnExerciseService: DeletePreWorkoutOnExerciseService,
    private readonly listAllPreWorkoutOnExerciseByPreWorkoutIdService: ListAllPreWorkoutOnExerciseByPreWorkoutIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addPreWorkoutOnExercise(
    @Body() createPreWorkoutOnExerciseDTO: CreatePreWorkoutOnExerciseDTO,
  ) {
    await this.createPreWorkoutOnExerciseService.execute(
      createPreWorkoutOnExerciseDTO,
    );
    return {
      message: `Exercise ${createPreWorkoutOnExerciseDTO.exerciseId} created on PreWorkoutOnExercise`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updatePreWorkoutOnExercise(
    @Body() preWorkoutOnExerciseDto: UpdatePreWorkoutOnExerciseDTO[],
  ) {
    await this.updatePreWorkoutOnExerciseService.execute(
      preWorkoutOnExerciseDto,
    );
    return {
      message: `Body Measurement ${preWorkoutOnExerciseDto[0].id} updated`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('preWorkoutId/:id')
  async getPreWorkoutOnExerciseByPreWorkoutId(@Param('id') id: string) {
    return await this.listAllPreWorkoutOnExerciseByPreWorkoutIdService.execute(
      id,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removePreWorkoutOnExercise(@Param('id') id: string) {
    await this.deletePreWorkoutOnExerciseService.execute(id);
    return {
      message: `PreWorkoutOnExercise ${id} deleted`,
    };
  }
}
