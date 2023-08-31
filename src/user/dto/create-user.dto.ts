import { IsEmail, IsString, IsNumberString, IsOptional } from 'class-validator';
import { User } from '../entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {  USER_ROLE } from "src/interfaces/user.interface";


export class CreateUserDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsEmail()
  @ApiProperty()
  email: string;

  @IsNumberString()
  @ApiProperty()
  phone: string;

  @IsString()
  @IsOptional()
  @ApiProperty({enum:[USER_ROLE.ADMIN,USER_ROLE.ROOT,USER_ROLE.USER]})
  role: USER_ROLE;
}
