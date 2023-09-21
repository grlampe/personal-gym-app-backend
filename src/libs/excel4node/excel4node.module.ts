import { Module } from '@nestjs/common';
import { Excel4NodeLib } from './excel4node';

@Module({
  imports: [],
  providers: [Excel4NodeLib],
  exports: [Excel4NodeLib],
})
export class Excel4NodeModule {}
