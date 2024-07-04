import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*', // Allow requests from all origins
    credentials: true, // Enable credentials if needed
  });

  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  await app.init(); // Initialize Nest application

  return app.getHttpAdapter().getInstance(); // Return Nest application instance
}

export default async function (req, res) {
  const app = await bootstrap();
  await app(req, res);
}
