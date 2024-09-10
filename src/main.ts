import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  const configuration = app.get(ConfigService);
  const logger = new Logger('App');

  const port = configuration.get<number>('port');

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(port);

  logger.debug(`Service started at port: ${port}`);
}
bootstrap();
