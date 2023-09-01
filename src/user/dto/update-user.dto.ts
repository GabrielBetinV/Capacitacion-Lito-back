import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNumberString, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {  USER_ROLE } from "src/interfaces/user.interface";

export class UpdateUserDto extends PartialType(CreateUserDto) {


    @IsString()
    @ApiProperty()
    @IsOptional()
    name: string;
  
    @IsEmail()
    @ApiProperty()
    @IsOptional()
    email: string;
  
    @IsNumberString()
    @ApiProperty()
    @IsOptional()
    phone: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty({enum:[USER_ROLE.ADMIN,USER_ROLE.ROOT,USER_ROLE.USER]})
    role: USER_ROLE;


}
