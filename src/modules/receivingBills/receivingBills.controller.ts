import { FindAllReceivingBillsByUserIdService } from './services/findAllReceibingBillsByUserId.service';
import { ReceivingBills } from '@prisma/client';
import {
  CreateReceivingBillsDTO,
  UpdateReceivingBillsDTO,
} from './dtos/receivingBills.dto';
import { CreateReceivingBillsService } from './services/createReceivingBills.service';
import { DeleteReceivingBillsService } from './services/deleteReceivingBills.service';
import { FindAllReceivingBillsService } from './services/findAllReceivingBills.service';
import { FindByIdReceivingBillsService } from './services/findByIdReceivingBills.service';
import { UpdateReceivingBillsService } from './services/updateReceivingBills.service';
import {
  Controller,
  UseGuards,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('receivingBills')
export class ReceivingBillsController {
  constructor(
    private readonly updateReceivingBillsService: UpdateReceivingBillsService,
    private readonly findByIdReceivingBillsService: FindByIdReceivingBillsService,
    private readonly findAllReceivingBillsService: FindAllReceivingBillsService,
    private readonly deleteReceivingBillsService: DeleteReceivingBillsService,
    private readonly createReceivingBillsService: CreateReceivingBillsService,
    private readonly findAllReceivingBillsByUserIdService: FindAllReceivingBillsByUserIdService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async addReceivingBills(@Body() receivingBillsDto: CreateReceivingBillsDTO) {
    await this.createReceivingBillsService.execute(receivingBillsDto);
    return {
      message: `ReceivingBills ${receivingBillsDto.description} created`,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  async updateReceivingBills(
    @Body() receivingBillsDto: UpdateReceivingBillsDTO,
  ) {
    await this.updateReceivingBillsService.execute(receivingBillsDto);
    return { message: `ReceivingBills ${receivingBillsDto.id} updated` };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async deleteReceivingBills(@Param('id') id: string) {
    await this.deleteReceivingBillsService.execute(id);
    return { message: `ReceivingBills ${id} deleted` };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllReceivingBills(): Promise<ReceivingBills[]> {
    return await this.findAllReceivingBillsService.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/user/:userId')
  async findAllReceivingBillsByUserId(
    @Param('userId') userId: string,
  ): Promise<ReceivingBills[]> {
    return await this.findAllReceivingBillsByUserIdService.execute(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findReceivingBillsById(
    @Param('id') id: string,
  ): Promise<ReceivingBills> {
    return await this.findByIdReceivingBillsService.execute(id);
  }
}
