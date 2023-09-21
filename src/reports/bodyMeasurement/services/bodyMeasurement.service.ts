import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { getBodyMeasurementSQL } from '../sql/bodyMeasurement.sql';
import { BodyMeasurementReport } from '../types/bodyMeasurement.types';
import { Excel4NodeLib } from '../../../libs/excel4node/excel4node';

@Injectable()
export class BodyMeasurementReportService {
  constructor(
    private prismaService: PrismaService,
    private excel4node: Excel4NodeLib,
  ) {}

  async getBodyMeasurementData(filters: BodyMeasurementReport) {
    const bodyMeasurements = await this.prismaService.$queryRawUnsafe(
      getBodyMeasurementSQL(filters),
    );

    return bodyMeasurements;
  }

  async execute(data: any): Promise<any> {
    let rowIndex = 1;
    const bodyMeasurementData = data;

    const displayColumns: string[] = [
      'description',
      'height',
      'weight',
      'workoutDescription',
      'chestBust',
      'leftArm',
      'rightArm',
      'abdomen',
      'waist',
      'hips',
      'leftThigh',
      'rightThigh',
      'createdAt',
    ];

    const headingColumnNames: string[] = [
      'Descrição',
      'Altura',
      'Peso',
      'Treino',
      'Busto',
      'Braço Esquerdo',
      'Braço Direito',
      'Abdômen',
      'Cintura',
      'Quadril',
      'Coxa Esquerda',
      'Coxa Direita',
      'Data Medição',
    ];

    this.excel4node.setUpWorkSheet('Consulta de Medidas');
    this.excel4node.buildHeader(headingColumnNames, 1, rowIndex, {
      font: { bold: true },
    });

    rowIndex++;

    bodyMeasurementData.forEach((bodyMeasurement: any) => {
      this.excel4node.buildDetails(
        [bodyMeasurement],
        1,
        rowIndex++,
        displayColumns,
      );
    });

    return await this.excel4node.writeToBuffer();
  }
}
