import { IsNotEmpty, IsString } from 'class-validator';

export class CreatecategoryDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly photo: string;

  @IsNotEmpty()
  @IsString()
  readonly permaLink: string;
}
