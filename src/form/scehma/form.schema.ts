import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Form extends Document {
  @Prop({ required: true }) // Ensure this property is required
  name: string;

  @Prop() // Ensure this property is required
  email: string;

  @Prop({ required: true }) // Ensure this property is required
  phone: string;

  @Prop({ required: true }) // Ensure this property is required
  query: string;
}

export const FormSchema = SchemaFactory.createForClass(Form);
