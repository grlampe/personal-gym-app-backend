import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../database/prisma/prisma.service';
import { getSimpleUserSQL } from '../sql/simpleUser.sql';
import { SimpleUserReportType } from '../types/simpleUser.types';
import { Excel4NodeLib } from '../../../libs/excel4node/excel4node';

@Injectable()
export class SimpleUserReportService {
  constructor(
    private prismaService: PrismaService,
    private excel4node: Excel4NodeLib,
  ) {}

  async getSimpleUserData(filters: SimpleUserReportType) {
    const simpleUsers = await this.prismaService.$queryRawUnsafe(
      getSimpleUserSQL(filters),
    );

    return simpleUsers;
  }

  async execute(data: any): Promise<any> {
    let rowIndex = 1;
    const simpleUserData = data;

    const displayColumns: string[] = [
      'name',
      'email',
      'cpf',
      'birthDate',
      'street',
      'number',
      'zipCode',
      'district',
      'city',
      'state',
      'complement',
      'active',
    ];

    const headingColumnNames: string[] = [
      'Nome',
      'Email',
      'C.P.F',
      'Dt. Nascimento',
      'Rua',
      'Número',
      'CEP',
      'Bairro',
      'Cidade',
      'Estado',
      'Complemento',
      'Ativo',
    ];

    this.excel4node.setUpWorkSheet('Rel.de Clientes');
    this.excel4node.buildHeader(headingColumnNames, 1, rowIndex, {
      font: { bold: true },
    });

    rowIndex++;

    simpleUserData.forEach((bodyMeasurement: any) => {
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
