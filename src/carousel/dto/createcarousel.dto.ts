import { IsNotEmpty, IsString } from 'class-validator';

export class CreatecarouselDto {
  @IsNotEmpty()
  @IsString()
  readonly image: string;


  // @IsNotEmpty()
  // @IsString()
  // readonly permaLink: string;
}
