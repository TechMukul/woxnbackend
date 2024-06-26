import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { DataService } from './data.service';
import { Data } from './scehma/data.schema';
// import { AuthGuard } from '@nestjs/passport';
import { CreateDataDto } from './dto/createdatadto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('data')
export class DataController {
    constructor(private dataservice:DataService ) {}
    @Get('all')
    async getAllBooks(): Promise<Data[]> {
      return this.dataservice.findAll();
    }
    @Post('machine')
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() data: CreateDataDto, @Req() req): Promise<Data> {
    // Assuming data.photo is an array of image strings
    return this.dataservice.create(data, req.user);
  }
  
  @Get('permalink/:permalink')
  async getByPermalink(@Param('permalink') permalink: string): Promise<Data> {
    try {
      return await this.dataservice.findByPermalink(permalink);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Get('category/:categoryName')
  async getByCategory(@Param('categoryName') categoryName: string): Promise<Data[]> {
    try {
      return await this.dataservice.findAllByCategory(categoryName);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
    @Put('machine/:id')
  @UseGuards(AuthGuard('jwt'))
  async updateByid(
    @Param(':id') id: string, 
    @Body() updateData: CreateDataDto, 
    @Req() req
  ): Promise<Data> {
    return this.dataservice.updateById(id, updateData); // Removed user parameter
  }
  @Delete('delete/Machine/:id') // Change the parameter to :id
  @UseGuards(AuthGuard('jwt'))
  async deleteById(
    @Param('id') id: string, // Change the parameter to id
    @Req() req
  ): Promise<void> {
    return this.dataservice.delete(id); // Use id to delete by ID
  }
}