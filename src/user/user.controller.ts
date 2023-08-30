import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, USER_ROLE } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('users')
export class UserController {
  // Inyectar el servicio
  constructor(private _userService: UserService) {}


  @Get()
  getUsers():  Promise<User[]> {
    return this._userService.getUsers();
  }

  @Post()
  //@ApiBody([{name: 'role', enum: USER_ROLE}])
  @ApiResponse({status: 200, description: 'User created'})
  adduser(@Body() body: CreateUserDto): Promise<User>  {
    return this._userService.createUser(body);
  }

  @Put('/:id')
  @ApiResponse({status: 200, description: 'User updated'})
  @ApiResponse({status: 400, description: 'Resource not found'})
  @HttpCode(HttpStatus.NO_CONTENT) // Enviar un codigo de respuesta especifico , en este caso 204
  updateUser(@Body() body: CreateUserDto, @Param('id') id: number):  Promise<User> {
    const user = this._userService.getUserById(id);
    if (!user) throw new BadRequestException('User not found'); // Lanzamos un error

    return this._userService.updateUser(id, body);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number): Promise<string> {
   await  this._userService.deleteUser(id);
   return 'Usuario Eliminado';
  }





  //---------------------------------------------------------------

  // @Get()
  // getUsers(): User[] {
  //   return this._userService.getUsers();
  // }

  // @Post()
  // adduser(@Body() body: CreateUserDto) {
  //   return this._userService.createUser(body);
  // }

  // @Put('/:id')
  // @HttpCode(HttpStatus.NO_CONTENT) // Enviar un codigo de respuesta especifico , en este caso 204
  // updateUser(@Body() body: CreateUserDto, @Param('id') id: number): User {
  //   const user = this._userService.getUserById(id);
  //   if (!user) throw new BadRequestException('User not found'); // Lanzamos un error

  //   return this._userService.updateUser(id, body);
  // }

  // @Delete('/:id')
  // deleteUser(@Param('id') id: number): string {
  //   const user = this._userService.getUserById(id);
  //   if (!user) throw new BadRequestException('User not found'); // Lanzamos un error

  //   this._userService.deleteUser(id);
  //   return 'Usuario Eliminado';
  // }
}
