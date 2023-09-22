import { Injectable } from '@nestjs/common';
import * as xl from 'excel4node';

@Injectable()
export class Excel4NodeLib {
  private wb: any;
  private ws: any;

  notNumberFields = [
    'createdAt',
    'description',
    'birthDate',
    'zipCode',
    'complement',
    'active',
    'paidAt',
  ];

  public setUpWorkSheet(workSheetName?: string): void {
    this.wb = new xl.Workbook();
    this.ws = this.wb.addWorksheet(
      workSheetName ? workSheetName : 'Personal Gym App Reports',
    );
  }

  public buildHeader(
    data: string[],
    startColumn: number,
    rowColumn: number,
    style: any = {},
  ): void {
    data.forEach((heading) => {
      this.ws.cell(rowColumn, startColumn++).string(heading).style(style);
    });
  }

  public buildDetails(
    data: any[],
    startColumn: number,
    rowColumn: number,
    displayColumns: string[],
  ): void {
    const rowIndex = rowColumn ? rowColumn : 1;

    data.forEach((record) => {
      let detailsColumnIndex = startColumn ? startColumn : 1;

      displayColumns.forEach((columnName) => {
        if (Object.keys(record).includes(columnName)) {
          if (
            (!!Number(record[columnName]) ||
              Number(record[columnName]) === 0) &&
            !this.notNumberFields.includes(columnName)
          ) {
            this.ws
              .cell(rowIndex, detailsColumnIndex++)
              .number(parseFloat(record[columnName]));
          } else {
            this.ws
              .cell(rowIndex, detailsColumnIndex++)
              .string(record[columnName]);
          }
        }
      });
    });
  }

  public writeFile(filename: string): void {
    this.wb.write(`${filename}.xlsx`);
  }

  public async writeToBuffer(): Promise<Buffer> {
    const buffer = await this.wb.writeToBuffer();

    return buffer;
  }
}
