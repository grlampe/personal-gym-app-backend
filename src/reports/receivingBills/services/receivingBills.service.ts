import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { getReceivingBillsSQL } from '../sql/receivingBills.sql';
import { Excel4NodeLib } from '../../../libs/excel4node/excel4node';
import { ReceivingBillsReportType } from '../types/receivingBills.types';

@Injectable()
export class ReceivingBillsReportService {
  constructor(
    private prismaService: PrismaService,
    private excel4node: Excel4NodeLib,
  ) {}

  async getReceivingBillsData(filters: ReceivingBillsReportType) {
    const receivingBills = await this.prismaService.$queryRawUnsafe(
      getReceivingBillsSQL(filters),
    );

    return receivingBills;
  }

  async execute(data: any): Promise<any> {
    let rowIndex = 1;
    const receivingBillsData = data;

    const displayColumns: string[] = [
      'name',
      'description',
      'amount',
      'expirationAt',
      'paidAt',
      'isPaid',
    ];

    const headingColumnNames: string[] = [
      'Nome',
      'Descrição',
      'Valor',
      'Data Vencimento',
      'Data Pagamento',
      'Pago',
    ];

    this.excel4node.setUpWorkSheet('Rel. Recebimentos');
    this.excel4node.buildHeader(headingColumnNames, 1, rowIndex, {
      font: { bold: true },
    });

    rowIndex++;

    receivingBillsData.forEach((bodyMeasurement: any) => {
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
