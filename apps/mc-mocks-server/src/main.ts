import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true, logger: true});
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.port || 4545;
  await app.listen(port, () => {
      Logger.log(`Listening at http://localhost: ${port}/${globalPrefix}`);
  });
}

bootstrap();
