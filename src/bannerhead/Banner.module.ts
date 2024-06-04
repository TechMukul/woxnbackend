import { Module } from '@nestjs/common';
import { BannerService } from './Banner.service';
import { BannerController } from './Banner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { Banner, BannerSchema } from './scehma/banner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Banner.name, schema: BannerSchema }]),
    PassportModule,
  ],
  providers: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
