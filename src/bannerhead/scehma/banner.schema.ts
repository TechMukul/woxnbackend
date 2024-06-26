import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Banner extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  photo: Array<string>;

  @Prop({ required: true })
  permaLink: string;
}

export const BannerSchema = SchemaFactory.createForClass(Banner);
