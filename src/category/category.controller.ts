import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './scehma/categoryschema';
// import { AuthGuard } from '@nestjs/passport';
import { CreatecategoryDto } from './dto/createcategorydto.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('data')
export class CatorgoryController {
    constructor(private categoryservice:CategoryService ) {}
    @Get('all-category')
    async getAllBooks(): Promise<Category[]> {
      return this.categoryservice.findAll();
    }
    @Post('new-category')
    @UseGuards(AuthGuard('jwt'))
    async create(@Body() data ,@Req() req): Promise<Category> {
      // console.log(req.user)
      return this.categoryservice.create(data,req.user);
    }
    @Put('update/:id') // Change the parameter to :id
  @UseGuards(AuthGuard('jwt'))
  async updateById(
    @Param('id') id: string, // Change the parameter to id
    @Body() updateData: CreatecategoryDto,
    @Req() req
  ): Promise<Category> {
    return this.categoryservice.update(id, updateData); // Use id instead of permalink
  }
  @Delete('delete/:id') // Change the parameter to :id
  @UseGuards(AuthGuard('jwt'))
  async deleteById(
    @Param('id') id: string, // Change the parameter to id
    @Req() req
  ): Promise<void> {
    return this.categoryservice.delete(id); // Use id to delete by ID
  }
}