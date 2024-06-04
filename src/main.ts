import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3002'], // Replace with your React frontend URLs
    credentials: true, // Enable credentials (if needed)
  });
  
  // app.useGlobalPipes(new ValidationPipe());
  // app.use(bodyParser.json({ limit: '10mb' }));
  // app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  // await app.listen(3000);
  // Setting a timeout of 5 seconds for incoming requests
  app.use((req, res, next) => {
    res.setTimeout(5000, () => {
      console.error('Server response timeout exceeded. (5 seconds)');
    });
    next();
  });

  await app.listen(3000);
}

bootstrap().then(() => {
  console.log('Nest application is running.');
});
