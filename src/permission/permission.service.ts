import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionService {



  // Array para tener almacenado los usuarios
  permissions: Permission[] = [
    {
      id: 11,
      name: 'user',
      description: 'user acces',
      isActive: true 
    
    },
  ];



  getPermissions(): Permission[] {
    return this.permissions;
  }



  // create(createPermissionDto: CreatePermissionDto) {
  //   return 'This action adds a new permission';
  // }

  // findAll() {
  //   return `This action returns all permission`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} permission`;
  // }

  // update(id: number, updatePermissionDto: UpdatePermissionDto) {
  //   return `This action updates a #${id} permission`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} permission`;
  // }
}
