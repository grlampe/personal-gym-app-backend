import { WorkoutReportService } from './services/workout.service';
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
import { WorkoutReportDto } from './dtos/workout.dto';

@Controller('workout')
export class WorkoutReportController {
  private logger = new Logger(WorkoutReportController.name);

  constructor(private workoutReportService: WorkoutReportService) {}

  @Post('/xlsx')
  @HttpCode(200)
  async getWorkoutDataXlsx(
    @Body() body: WorkoutReportDto,
    @Res() res: Response,
  ) {
    this.logger.log(
      `request workout-xlsx rel by filters ${JSON.stringify(body)}`,
    );

    const filters = { ...body };

    try {
      const data = await this.workoutReportService.getWorkoutData(filters);

      const file = await this.workoutReportService.execute(data);

      res.type('blob');

      return res.send(file);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
