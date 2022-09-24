import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get<ConfigService>(ConfigService);
  const port = Number(config.get('SERVER_PORT'))

  await app.listen(port || 3000);
  console.log('APP ON PORT:' + port + '!!!')
}

bootstrap();
