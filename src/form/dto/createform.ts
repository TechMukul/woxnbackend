import { IsNotEmpty, IsString, IsEmail, IsArray, IsPhoneNumber } from 'class-validator';

export class CreateDataDto {
 
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsPhoneNumber(null) // Use null to accept phone numbers in any region
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly query: string;
}
