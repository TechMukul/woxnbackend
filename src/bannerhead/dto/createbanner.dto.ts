import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly photo: string[];

  @IsNotEmpty()
  @IsString()
  readonly permaLink: string;
}
