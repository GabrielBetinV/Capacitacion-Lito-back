import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getHello(): any {
    return {
      name: 'Gabriel Betin',
      emai: 'gbetin@litoplas.com',
      phone: '34323234324',
      password:'qwerty'

    }
  }

 @Get('/userList')
 createUser(): string {
  return 'Hola Mundo'
 }

}
