import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, BadRequestException, HttpStatus, Put } from '@nestjs/common';
import { PermissionService } from '../services/permission.service';
import { CreatePermissionDto } from '../dto/create-permission.dto';
import { UpdatePermissionDto } from '../dto/update-permission.dto';
import { Permission } from '../entities/permission.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Permission')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}


  @Get()
  getPermissions():  Promise<Permission[]> {
    return this.permissionService.getPermissions();
  }

  @Post()
  addPermission(@Body() body: CreatePermissionDto): Promise<Permission>  {
    return this.permissionService.createPermission(body);
  }

  @Put('/:id')
  //@HttpCode(HttpStatus.NO_CONTENT) // Enviar un codigo de respuesta especifico , en este caso 204
  updatePermission(@Body() body: UpdatePermissionDto, @Param('id') id: number):  Promise<Permission> {
    const Permission = this.permissionService.getPermissionById(id);
    if (!Permission) throw new BadRequestException('Permission not found'); // Lanzamos un error

    return this.permissionService.updatePermission(id, body);
  }

  @Delete('/:id')
  async deletePermission(@Param('id') id: number): Promise<string> {
   await  this.permissionService.deletePermission(id);
   return 'Permiso Eliminado';
  }




  // @Get()
  // getPermissions(): Permission[] {
  //   return this.permissionService.getPermissions();
  // }


  



//   @Post()
//   create(@Body() createPermissionDto: CreatePermissionDto) {
//     return this.permissionService.create(createPermissionDto);
//   }

//   @Get()
//   findAll() {
//     return this.permissionService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.permissionService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updatePermissionDto: UpdatePermissionDto) {
//     return this.permissionService.update(+id, updatePermissionDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.permissionService.remove(+id);
//   }
}
