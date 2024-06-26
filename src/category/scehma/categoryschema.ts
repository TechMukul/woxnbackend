import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Category extends Document {

  @Prop({ required: true }) // Ensure these properties are required
  name: string;
  @Prop({ required: true }) // Ensure these properties are required
  photo: string;

  @Prop({ required: true }) // Ensure these properties are required
  permaLink: string;
}

export const CatorgorySchema = SchemaFactory.createForClass(Category);
