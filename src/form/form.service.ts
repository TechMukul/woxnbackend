import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './scehma/form.schema';
import { CreateDataDto } from './dto/createform';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class FormService {
  constructor(
    @InjectModel(Form.name)
    private readonly formModel: Model<Form>,
  ) {}

  async findAll(): Promise<Form[]> {
    return await this.formModel.find().exec();
  }

  async create(data: CreateDataDto): Promise<Form> {
    const createdForm = new this.formModel(data);
    await createdForm.save();
    await this.sendEmail(data);
    return createdForm;
  }

  private async sendEmail(data: CreateDataDto): Promise<void> {
    const msg = {
      to: 'mukulchauhan8586@gmail.com',
      from: 'techmukul00@gmail.com', // Use any trial email address here
      subject: 'New Query Submission',
      text: `You have a new query submissions:
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Query: ${data.query}`,
    };
  
    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  
}
