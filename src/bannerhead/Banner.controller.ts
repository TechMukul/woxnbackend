import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { BannerService } from './Banner.service';
import { Banner } from './scehma/banner.schema';
import { CreateBannerDto } from './dto/createbanner.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('data/head')
export class BannerController {
  constructor(private bannerservice: BannerService) {}

  @Get('all')
  async getAllBanners(): Promise<Banner[]> {
    return this.bannerservice.findAll();
  }

  @Post('post')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() data: CreateBannerDto, @Req() req): Promise<Banner> {
    return this.bannerservice.create(data, req.user);
  }

  @Get('permalink/:permalink')
  async getByPermalink(@Param('permalink') permalink: string): Promise<Banner> {
    try {
      return await this.bannerservice.findByPermalink(permalink);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get('category/:categoryName')
  async getByCategory(@Param('categoryName') categoryName: string): Promise<Banner[]> {
    try {
      return await this.bannerservice.findAllByCategory(categoryName);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put(':permalink')
  @UseGuards(AuthGuard('jwt'))
  async updateByPermalink(
    @Param('permalink') permalink: string,
    @Body() updateData: CreateBannerDto
  ): Promise<Banner> {
    return this.bannerservice.update(permalink, updateData);
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteById(@Param('id') id: string): Promise<void> {
    return this.bannerservice.delete(id);
  }
}
