import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './scehma/categoryschema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { CreatecategoryDto } from './dto/createcategorydto.dto';
// import { Query } from 'express-serve-static-core';


@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>
  ) {}

  async findAll(): Promise<Category[]> {
    const info = await this.categoryModel.find();
    return info;
  }

  async create(category: CreatecategoryDto, user: User): Promise<Category> {
    const info = Object.assign(category, { user: user._id });
    const res = await this.categoryModel.create(info);
    return res;
  }

  async findByPermalink(permalink: string): Promise<Category> {
    const category = await this.categoryModel.findOne({ permaLink: permalink }).exec();
    if (!category) {
      throw new NotFoundException('Data not found');
    }
    return category;
  }

  async update(_id: string, updateCategoryDto: CreatecategoryDto): Promise<Category> {
    const existingData = await this.categoryModel.findById(_id).exec()
    if (!existingData) {
      throw new NotFoundException('Data not found');
    }
    // Update the fields
    existingData.name = updateCategoryDto.name;
    existingData.permaLink = updateCategoryDto.permaLink;

    return existingData.save(); // Save the updated document
  }
  async delete(_id: string): Promise<void> {
    const result = await this.categoryModel.deleteOne({ _id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Category not found');
    }
  }
}