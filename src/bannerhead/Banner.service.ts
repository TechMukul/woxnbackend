import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Banner } from './scehma/banner.schema';
import { CreateBannerDto } from './dto/createbanner.dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel(Banner.name) private bannerModel: Model<Banner>,
  ) {}

  async findAll(): Promise<Banner[]> {
    return this.bannerModel.find().exec();
  }

  async create(data: CreateBannerDto, user: any): Promise<Banner> {
    const info = Object.assign(data, { user: user._id });
    const res = await this.bannerModel.create(info);
    return res;
  }

  async findByPermalink(permalink: string): Promise<Banner> {
    const data = await this.bannerModel.findOne({ permaLink: permalink }).exec();
    if (!data) {
      throw new NotFoundException('Data not found');
    }
    return data;
  }

  async findAllByCategory(categoryName: string): Promise<Banner[]> {
    const data = await this.bannerModel.find({ category: categoryName }).exec();
    if (data.length === 0) {
      throw new NotFoundException('No data found for this category');
    }
    return data;
  }

  async update(permalink: string, updateData: CreateBannerDto): Promise<Banner> {
    const existingData = await this.bannerModel.findOne({ permaLink: permalink }).exec();
    if (!existingData) {
      throw new NotFoundException('Data not found');
    }
    existingData.title = updateData.title;
    existingData.content = updateData.content;
    existingData.photo = updateData.photo;
    existingData.permaLink = updateData.permaLink;

    return existingData.save();
  }

  async delete(_id: string): Promise<void> {
    const result = await this.bannerModel.deleteOne({ _id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Category not found');
    }
  }
}
