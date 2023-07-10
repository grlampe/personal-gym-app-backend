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
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guards';
import { CreatePreWorkoutService } from './services/createPreWorkout.service';
import { UpdatePreWorkoutService } from './services/updatePreWorkout.service';
import { ListAllPreWorkoutService } from './services/listAllPreWorkout.service';
import { FindPreWorkoutByIdService } from './services/findPreWorkoutById.service';
import { CreatePreWorkoutDTO } from './dtos/createPreWorkoutDTO';
import { UpdatePreWorkoutDTO } from './dtos/updatePreWorkoutDTO';
import { PreWorkout } from '@prisma/client';
import { DeletePreWorkoutService } from './services/deletePreWorkout.service';

@Controller('preWorkout')
export class PreWorkoutController {
  constructor(
    private readonly createPreWorkoutService: CreatePreWorkoutService,
    private readonly updatePreWorkoutService: UpdatePreWorkoutService,
    private readonly listAllPreWorkoutService: ListAllPreWorkoutService,
    private readonly findPreWorkoutByIdService: FindPreWorkoutByIdService,
    private readonly deletePreWorkoutService: DeletePreWorkoutService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addPreWorkout(@Body() preWorkoutDto: CreatePreWorkoutDTO) {
    await this.createPreWorkoutService.execute(preWorkoutDto);
    return { message: `PreWorkout ${preWorkoutDto.description} created` };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updatePreWorkout(@Body() preWorkoutDto: UpdatePreWorkoutDTO) {
    await this.updatePreWorkoutService.execute(preWorkoutDto);
    return { message: `PreWorkout ${preWorkoutDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllPreWorkout(): Promise<PreWorkout[]> {
    return await this.listAllPreWorkoutService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById(@Param('id') id: string): Promise<PreWorkout> {
    return await this.findPreWorkoutByIdService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deletePreWorkoutById(@Param('id') id: string) {
    await this.deletePreWorkoutService.execute(id);
    return { message: `PreWorkout ${id} deleted` };
  }
}
