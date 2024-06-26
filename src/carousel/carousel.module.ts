import { Module } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { CarouselController } from './carousel.controller';
import { MongooseModule } from '@nestjs/mongoose';
// Corrected import path
import { PassportModule } from '@nestjs/passport';
import { CarouselSchema } from './scehma/carouselschema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carousel', schema: CarouselSchema }]), // Removed unnecessary comma
    PassportModule,
  ],
  providers: [CarouselService],
  controllers: [CarouselController]
})
export class CarouselModule {}
