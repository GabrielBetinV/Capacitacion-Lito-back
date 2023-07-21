import { Controller, Get, Post, Put, Delete , Body, Param} from '@nestjs/common';
import { UserService } from './user.service';
import { User, USER_ROLE } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {

  // Inyectar el servicio
  constructor(
    private _userService: UserService,
  ) { }


  @Get()
  getUsers(): User[] {
    return this._userService.getUsers();
  }

  @Post()
  adduser(@Body() body: CreateUserDto) {
    return this._userService.createUser(body);

  }


  @Put('/:id')
  updateUser(@Body() body: CreateUserDto, @Param('id') id: string) : User {

    const user = this._userService.getUserById(id);    
    if(user){      
      return this._userService.updateUser(id, body);
    }

  }


  @Delete('/:id')
  deleteUser(@Param('id') id: string) : string{
    const user = this._userService.getUserById(id);    
    if(user){
      this._userService.deleteUser(id);
      return 'Usuario Eliminado';
    }
  }


}
