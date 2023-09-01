import { IsEmail, IsString, IsNumberString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePermissionDto {

    @IsString()
    @ApiProperty()   
    name: string;

    @IsString()
    @ApiProperty()   
    description: string;


    @IsBoolean()
    @ApiProperty()    
    isActive: boolean;


    
}
