import { Injectable, NotFoundException } from '@nestjs/common';
import { Carousel } from './scehma/carouselschema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { CreatecarouselDto } from './dto/createcarousel.dto';

@Injectable()
export class CarouselService {
  constructor(
    @InjectModel(Carousel.name)
    private carouselModel: mongoose.Model<Carousel>,
  ) {}

  async findAll(): Promise<Carousel[]> {
    const info = await this.carouselModel.find();
    return info;
  }

  async create(carousel: Carousel, user: User): Promise<Carousel> {
    const info = Object.assign(carousel, { user: user._id });
    const res = await this.carouselModel.create(info);
    return res;
  }

  async findByPermalink(permalink: string): Promise<Carousel> {
    const carousel = await this.carouselModel.findOne({ permaLink: permalink }).exec();
    if (!carousel) {
      throw new NotFoundException('Data not found');
    }
    return carousel;
  }

  async update(permalink: string, updateCarousel: CreatecarouselDto): Promise<Carousel> {
    const existingData = await this.carouselModel.findOne({ permaLink: permalink }).exec();
    if (!existingData) {
      throw new NotFoundException('Data not found');
    }
    existingData.image = updateCarousel.image;
    return existingData.save();
  }

  async deleteById(id: string): Promise<Carousel> {
    const carousel = await this.carouselModel.findByIdAndDelete(id).exec();
    if (!carousel) {
      throw new NotFoundException('Data not found');
    }
    return carousel;
  }
}
