import { IsNotEmpty, IsEmail, IsDate } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  document: string;

  @IsNotEmpty()
  @IsDate()
  birthDate: Date;
}
