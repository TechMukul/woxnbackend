import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userschema } from './schemas/user.schema';
import passport from 'passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { config } from 'process';
import { Jwtstrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return{
          secret:config.get<string>('JWT_SECRET'),
          signOptions:{expiresIn:config.get<string | number>('JWT_EXPIRE')}
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: userschema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService,Jwtstrategy],
  exports:[Jwtstrategy,PassportModule]
})
export class AuthModule {}
