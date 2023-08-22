import { IsEmail, IsString, IsNumberString, IsOptional } from 'class-validator';
import { User, USER_ROLE } from '../entity/user.entity';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumberString()
  phone: number;

  @IsString()
  @IsOptional()
  role: USER_ROLE;
}
