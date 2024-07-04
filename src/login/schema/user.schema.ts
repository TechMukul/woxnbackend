// user.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop([
    {
      loginTime: { type: Date, default: null },
      logoutTime: { type: Date, default: null },
      duration: { type: Number, default: null },
      durationHours: { type: Number, default: null },
      durationMinutes: { type: Number, default: null },
      durationSeconds: { type: Number, default: null },
    },
  ])
  loginSessions: {
    loginTime: Date;
    logoutTime: Date;
    duration: number;
    durationHours: number;
    durationMinutes: number;
    durationSeconds: number;
  }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
