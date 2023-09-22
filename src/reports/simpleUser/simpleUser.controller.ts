import { SimpleUserReportService } from './services/simpleUser.service';
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
import { SimpleUserReportDto } from './dtos/simpleUser';

@Controller('simpleUser')
export class SimpleUserReportController {
  private logger = new Logger(SimpleUserReportController.name);

  constructor(private simpleUserReportService: SimpleUserReportService) {}

  @Post('/xlsx')
  @HttpCode(200)
  async getSimpleUserDataXlsx(
    @Body() body: SimpleUserReportDto,
    @Res() res: Response,
  ) {
    this.logger.log(
      `request simple-user-xlsx rel by filters ${JSON.stringify(body)}`,
    );

    const filters = { ...body };

    try {
      const data = await this.simpleUserReportService.getSimpleUserData(
        filters,
      );

      const file = await this.simpleUserReportService.execute(data);

      res.type('blob');

      return res.send(file);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
