import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Data extends Document {

  @Prop({ required: true }) // Ensure these properties are required
  title: string;

  @Prop({ required: true }) // Ensure these properties are required
  content: string;

  @Prop({ required: true }) // Ensure these properties are required
  photo: Array<string>; // Changed to accept an array of strings
   
  @Prop({ required: true }) // Ensure these properties are required
  category: string;
  
  @Prop({ required: true }) // Ensure these properties are required
  permaLink: string;
}

export const DataSchema = SchemaFactory.createForClass(Data);
