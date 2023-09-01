import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService {



  constructor(

    @InjectRepository(Permission) 
    private readonly permissionRepository: Repository<Permission>,
  
    ){}


 
    async getPermissions(): Promise<Permission[]> {        
      // return await this.permissionRepository.find({
  
      //   // Para mostrar los permisos en el GET
      //   relations:['userToPermissions']
      // });



      const permission: Permission[] = await this.permissionRepository
      .createQueryBuilder('permission')
      .leftJoinAndSelect('permission.userToPermissions', 'userToPermissions')
      .leftJoinAndSelect('userToPermissions.user','user')
      .getMany();
  
      return permission;
  

    }
  
  
   async getPermissionById(id: number): Promise<Permission> {  
    const permission: Permission = await this.permissionRepository.findOneBy({id}); 
    if(!permission) throw new NotFoundException('Resource not found');  
    return permission;
  }
  
  
    async createPermission(data: CreatePermissionDto): Promise<Permission> {
  
      //Crea el objeto en memoria
      const permission: Permission = this.permissionRepository.create(data);
  
  
      // Guardar en la bse de datos  
      return  await this.permissionRepository.save(permission);
    }
  
  
    async  updatePermission(id: number, data: UpdatePermissionDto): Promise<Permission> {
  
     // Buscar el objeto por el ID
     const existPermission = await this.getPermissionById(id);
   
     if(!existPermission) throw new NotFoundException('Resource not found'); 
  
      // Obtenemos el objeto si existe, mapea la data
      // que mandamos
      const permission = await this.permissionRepository.preload({
        id,
        ...data
      })
  
     // return permission;
      return await this.permissionRepository.save(permission);
    }
  
  
   async deletePermission(id: number): Promise<void> {
  
     // Buscar el objeto por el ID
     const permission = await this.getPermissionById(id);
   
     if(!permission) throw new NotFoundException('Resource not found'); 
  
      this.permissionRepository.remove(permission);
    }



  // Array para tener almacenado los usuarios
  // permissions: Permission[] = [
  //   {
  //     id: 11,
  //     name: 'user',
  //     description: 'user acces',
  //     isActive: true 
    
  //   },
  // ];



  // getPermissions(): Permission[] {
  //   return this.permissions;
  // }



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
