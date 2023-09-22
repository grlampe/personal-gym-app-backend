import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { getWorkoutSQL } from '../sql/workout.sql';
import { WorkoutReportType } from '../types/workout.types';
import { Excel4NodeLib } from '../../../libs/excel4node/excel4node';

@Injectable()
export class WorkoutReportService {
  constructor(
    private prismaService: PrismaService,
    private excel4node: Excel4NodeLib,
  ) {}

  async getWorkoutData(filters: WorkoutReportType) {
    const workouts = await this.prismaService.$queryRawUnsafe(
      getWorkoutSQL(filters),
    );

    return workouts;
  }

  async execute(data: any): Promise<any> {
    let rowIndex = 1;
    const workoutData = data;

    const displayColumns: string[] = [
      'name',
      'workout',
      'exercise',
      'weight',
      'createdAt',
    ];

    const headingColumnNames: string[] = [
      'Nome',
      'Treino',
      'Exercício',
      'Peso',
      'Data Alteração',
    ];

    this.excel4node.setUpWorkSheet('Consulta Treinos');
    this.excel4node.buildHeader(headingColumnNames, 1, rowIndex, {
      font: { bold: true },
    });

    rowIndex++;

    workoutData.forEach((bodyMeasurement: any) => {
      this.excel4node.buildDetails(
        [bodyMeasurement],
        1,
        rowIndex++,
        displayColumns,
      );
    });

    return await this.excel4node.writeFile('seee');
  }
}
