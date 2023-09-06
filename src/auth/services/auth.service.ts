import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../dto/create-auth.dto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Iuser } from 'src/interfaces/user.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly  _userService: UserService,
    private readonly  _jwtService: JwtService , 

    ) {}


  public async validateUSer (userName: string, password: string){

    console.log(password)

    const user = await this._userService.getuserBY({
      key: 'email',
      value: userName
    });

    if (!user) throw new BadRequestException('User not found')

    const match = await bcrypt.compare(password, user.password);
    if (match) return user;

    return null;
  }

  generateJWT(user){
    
    const payload = {...user}
    return {
      accesToken: this._jwtService.sign(payload)
    }

  }



  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth';
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
