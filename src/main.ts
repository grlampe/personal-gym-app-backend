import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as momentTimezone from 'moment-timezone';
import * as dotenv from 'dotenv';

const logger = new Logger('Server Initialization');
dotenv.config();
process.env.TZ = 'America/Sao_Paulo';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get<ConfigService>(ConfigService);
  const PORT = configService.get<number>('PORT');

  app.enableCors({
    credentials: true,
    origin: configService.get<string>('CORS_ALLOWED_URLS'),
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  });

  app.useGlobalPipes(new ValidationPipe());

  Date.prototype.toJSON = function (): any {
    return momentTimezone(this).tz('America/Sao_Paulo').format();
  };

  await app.listen(PORT, () => {
    logger.log(`Server started in port ${PORT}`);
  });
}
bootstrap();
