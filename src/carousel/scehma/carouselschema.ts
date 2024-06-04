import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Carousel extends Document {

  @Prop({ required: true, type: String }) // Ensure these properties are required and of type String
  image: string; // Store base64 encoded image as a string
}

export const CarouselSchema = SchemaFactory.createForClass(Carousel);
