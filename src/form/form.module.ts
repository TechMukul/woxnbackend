import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { Form,FormSchema } from './scehma/form.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name:Form.name, schema: FormSchema }]),
  ],
  controllers: [FormController],
  providers: [FormService], // Ensure FormModel is provided here
  exports: [FormService], // If FormService needs to be used in other modules
})
export class FormModule {}
