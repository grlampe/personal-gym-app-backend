import { UpdateBodyMeasurementDTO } from './dtos/updateBodyMeasurement.dto';
import { UpdateBodyMeasurementService } from './services/updateBodyMeasurement.service';
import { ListAllBodyMeasurementByIdService } from './services/listAllBodyMeasurementById.service';
import { ListAllBodyMeasurementByUserIdService } from './services/listAllBodyMeasurementByUserId.service';
import { BodyMeasurement } from '@prisma/client';
import { CreateBodyMeasurementDTO } from './dtos/createBodyMeasurement.dto';
import { JwtAuthGuard } from './../auth/guards/jwt-auth.guards';
import { ListAllUsersBodyMeasurementService } from './services/listAllUsersBodyMeasurement.service';
import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateBodyMeasurementService } from './services/createBodyMeasurement.service';
import { DeleteBodyMeasurementService } from './services/deleteBodyMeasurement.service';

@Controller('bodyMeasurement')
export class BodyMeasurementController {
  constructor(
    private readonly createBodyMeasurementService: CreateBodyMeasurementService,
    private readonly listAllUsersBodyMeasurementService: ListAllUsersBodyMeasurementService,
    private readonly listAllBodyMeasurementByUserIdService: ListAllBodyMeasurementByUserIdService,
    private readonly listAllBodyMeasurementByIdService: ListAllBodyMeasurementByIdService,
    private readonly updateBodyMeasurementService: UpdateBodyMeasurementService,
    private readonly deleteBodyMeasurementService: DeleteBodyMeasurementService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addBodyMeasurement(
    @Body() bodyMeasurementDTO: CreateBodyMeasurementDTO,
  ) {
    await this.createBodyMeasurementService.execute(bodyMeasurementDTO);
    return {
      message: `Body Measurement ${bodyMeasurementDTO.description} created`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateBodyMeasurement(
    @Body() bodyMeasurementDto: UpdateBodyMeasurementDTO,
  ) {
    await this.updateBodyMeasurementService.execute(bodyMeasurementDto);
    return { message: `Body Measurement ${bodyMeasurementDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsersBodyMeasurement(): Promise<any[]> {
    return await this.listAllUsersBodyMeasurementService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/userId/:userId')
  async getAllBodyMeasurementByUserId(
    @Param('userId') userId: string,
  ): Promise<BodyMeasurement[]> {
    return await this.listAllBodyMeasurementByUserIdService.execute(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/id/:id')
  async getAllBodyMeasurementById(
    @Param('id') id: string,
  ): Promise<BodyMeasurement> {
    return await this.listAllBodyMeasurementByIdService.execute(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteBodyMeasurementById(@Param('id') id: string): Promise<void> {
    await this.deleteBodyMeasurementService.execute(id);
  }
}
