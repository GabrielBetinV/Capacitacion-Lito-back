import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Las peticiones viene con 2 objeto

  //1. req => Todo lo que vienen dentro de la peticion
  //2. res => la respuesta para el cliente (est.status(200).json("Hola mundo")

  @Get('/users')
  getHello(): any {
    return {
      name: 'Gabriel Betin',
      emai: 'gbetin@litoplas.com',
      phone: '34323234324',
      password: 'qwerty',
    };
  }

  @Get('/userList')
  userList(): string {
    return 'Hola Mundo';
  }

  // Recibiendo post con Body
  @Post()
  createUser(@Body() body): any {
    return body;
  }

  // Recibiendo post con parametros
  @Post('/admin/:id')
  createUserP(@Body() body: any, @Param() params: any) {
    console.log(params);
    return body;
  }

  // Recibiendo post con parametros especificos
  @Post('/admin/:id/:cityId')
  createUserPa(@Body() body: any, @Param('cityId') params: any) {
    console.log(params);
    return body;
  }

  // Recibiendo post con Query Params
  @Post('/admin2/:id/')
  createUserQ(@Body() body: any, @Param() params: any, @Query() query: any) {
    console.log({ params, query });
    return body;
  }
}
