import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CatorgoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
// Corrected import path
import { PassportModule } from '@nestjs/passport';
import { CatorgorySchema } from './scehma/categoryschema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: CatorgorySchema }]), // Removed unnecessary comma
    PassportModule,
  ],
  providers: [CategoryService],
  controllers: [CatorgoryController]
})
export class CategoryModule {}
