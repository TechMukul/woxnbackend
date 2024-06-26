import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { Form } from './scehma/form.schema';
import { CreateDataDto } from './dto/createform';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Get('all')
  async getAllForms(): Promise<Form[]> {
    return this.formService.findAll();
  }

  @Post('query')
  async create(@Body() data: CreateDataDto): Promise<Form> {
    const createdForm = await this.formService.create(data);
    return createdForm;
  }
}
