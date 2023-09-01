import { IsEmail, IsString, IsNumberString, IsOptional, IsNumber } from 'class-validator';
import { User } from '../entity/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import {  USER_ROLE } from "src/interfaces/user.interface";
import { Permission } from 'src/permission/entities/permission.entity';


export class CreateUserPermissionDto {

  @IsString()
  @ApiProperty()
  accessLevel: string;

  @IsNumber()
  @ApiProperty()
  user: User;

  @IsNumber()
  @ApiProperty()
  permission: Permission;
 
}
