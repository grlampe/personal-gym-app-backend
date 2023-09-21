import { BodyMeasurementReportService } from './services/bodyMeasurement.service';
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
import { BodyMeasurementReportDto } from './dtos/bodyMeasurement.dto';

@Controller('bodyMeasurement')
export class BodyMeasurementReportController {
  private logger = new Logger(BodyMeasurementReportController.name);

  constructor(
    private bodyMeasurementReportService: BodyMeasurementReportService,
  ) {}

  @Post('/xlsx')
  @HttpCode(200)
  async getBodyMeasurementDataXlsx(
    @Body() body: BodyMeasurementReportDto,
    @Res() res: Response,
  ) {
    this.logger.log(
      `request body-measurement-xlsx rel by filters ${JSON.stringify(body)}`,
    );

    const filters = { ...body };

    try {
      const data =
        await this.bodyMeasurementReportService.getBodyMeasurementData(filters);

      const file = await this.bodyMeasurementReportService.execute(data);

      res.type('blob');

      return res.send(file);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
