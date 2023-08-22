import { IsEmail, IsString, IsNumberString, IsOptional } from 'class-validator';

export class CreatePermissionDto {

    @IsString()
    name: string;

    @IsString()
    description: string;


    @IsString()
    isActive: string;

}
