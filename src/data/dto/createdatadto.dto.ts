import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateDataDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true }) // Ensure each element in the array is a string
  readonly photo: string[];

  @IsNotEmpty()
  @IsString()
  readonly category: string;

  @IsNotEmpty()
  @IsString()
  readonly permaLink: string;
}
