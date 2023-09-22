import { ReceivingBillsReportService } from './services/receivingBills.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Logger,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ReceivingBillsReportDto } from './dtos/receivingBills.dto';

@Controller('receivingBills')
export class ReceivingBillsReportController {
  private logger = new Logger(ReceivingBillsReportController.name);

  constructor(
    private receivingBillsReportService: ReceivingBillsReportService,
  ) {}

  @Post('/xlsx')
  @HttpCode(200)
  async getReceivingBillsDataXlsx(
    @Body() body: ReceivingBillsReportDto,
    @Res() res: Response,
  ) {
    this.logger.log(
      `request receiving-bills-xlsx rel by filters ${JSON.stringify(body)}`,
    );

    const filters = { ...body };

    try {
      const data = await this.receivingBillsReportService.getReceivingBillsData(
        filters,
      );

      const file = await this.receivingBillsReportService.execute(data);

      res.type('blob');

      return res.send(file);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
