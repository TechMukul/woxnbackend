import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './login/user.module';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UserModule,
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: 'http://localhost:3000',
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3001', // Corrected CORS origin
        },
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}