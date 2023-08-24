import { IsEmail, IsString, IsNumberString, IsOptional, IsBoolean } from 'class-validator';

export class CreatePermissionDto {

    @IsString()
    name: string;

    @IsString()
    description: string;


    @IsBoolean()
    isActive: boolean;


    
}
