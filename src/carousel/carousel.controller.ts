import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { Carousel } from './scehma/carouselschema';
// import { AuthGuard } from '@nestjs/passport';
import { CreatecarouselDto } from './dto/createcarousel.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('carousels')
export class CarouselController {
  constructor(private carouselservice: CarouselService) {}
  @Get('all-carousel')
  async getAllBooks(): Promise<Carousel[]> {
    return this.carouselservice.findAll();
  }
  @Post('new-carousel')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() data, @Req() req): Promise<Carousel> {
    // console.log(req.user)
    return this.carouselservice.create(data, req.user);
  }
  @Put('')
  @UseGuards(AuthGuard('jwt'))
  async updateByPermalink(
    @Param(':permalink') permalink: string,
    @Body() updateData: CreatecarouselDto,
    @Req() req,
  ): Promise<Carousel> {
    return this.carouselservice.update(permalink, updateData); // Removed user parameter
  }

  @Delete(':id')
  async deleteCarousel(@Param('id') id: string) {
    return await this.carouselservice.deleteById(id);
  }
}
