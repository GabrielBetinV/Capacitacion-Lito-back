import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissionDto } from './create-permission.dto';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {


 
    @IsString()
    @IsOptional()
    @ApiProperty()
    description: string;


    @IsBoolean()
    @ApiProperty()
    @IsOptional()
    isActive: boolean;


}
