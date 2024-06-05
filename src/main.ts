import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3002', 'https://www.woxnpackagingsolution.com','https://frontend-g1ixouq08-mukul-chauhans-projects-3a9b994f.vercel.app'], // Add your production frontend URL here
    credentials: true, // Enable credentials (if needed)
  });
  
  app.useGlobalPipes(new ValidationPipe());
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  
  // Setting a timeout of 5 seconds for incoming requests
  app.use((req, res, next) => {
    res.setTimeout(5000, () => {
      console.error('Server response timeout exceeded. (5 seconds)');
    });
    next();
  });

  await app.listen(process.env.PORT || 3000); // Use process.env.PORT for production or default to 3000
}

bootstrap().then(() => {
  console.log('Nest application is running.');
});
