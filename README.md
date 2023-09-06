<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## Instalar Insomnia
https://insomnia.rest/download

## Instalar Nest Js Snippets
Vscode NestJs Snippets


## Peticiones HTTP

https://developer.mozilla.org/es/docs/Web/HTTP/Overview

## Protocolo Web Socket

https://developer.mozilla.org/es/docs/Web/API/WebSocket

## APIs

https://developer.mozilla.org/es/docs/Learn/JavaScript/Client-side_web_APIs/Introduction


## Tareas => Inyeccion de dependencias e inversion de dependencias

https://es.wikipedia.org/wiki/Principio_de_inversi%C3%B3n_de_la_dependencia

https://www.campusmvp.es/recursos/post/que-es-la-inyeccion-de-dependencias-y-como-funciona.aspx



## Repositorio del profe.

https://github.com/patacala/litoplas-api-MVP/tree/main

## Instalar class validator y class transform

npm i --save class-validator class-transformer

https://docs.nestjs.com/techniques/validation

## Agregar el validatorpipe en el main

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();


## Types de validarotor

https://github.com/typestack/class-validator#validation-decorators

## Agregar las validaciones en el DTO

import { IsEmail, IsString ,IsNumberString, IsOptional} from 'class-validator';
import { User, USER_ROLE } from '../entity/user.entity';


export class CreateUserDto{


    @IsString()
    name: string;

    @IsEmail()
    email: string;


    @IsNumberString()
    phone:number;
    
    @IsString()
    @IsOptional()
    role: USER_ROLE;



}


## Instalar Docker
https://docs.docker.com/desktop/install/windows-install/

## Instalar ORM
npm i typeorm pg @nestjs/typeorm => Postgres

<!-- npm i typeorm pg @nestjs/typeorm  - npm install oracledb --save -->

## Kernel WSL
https://docs.microsoft.com/windows/wsl/wsl2-kernel

## Configurar Docker 


version: "3.7"

services:
  db:
    image: postgres:13-alpine
    container_name: database
    restart: always
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: my-weak-password
    volumes:
     - /var/lib/postgresql/data  
    ports:
      - "5432:5432" 


## Levantar el docker
docker-compose up -d

## Consltar la cantidad de  imagenes
docker ps

## Agregar un administrador para pg

version: "3.7"

services:
  db:
    image: postgres:13-alpine
    container_name: database
    restart: always
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: my-weak-password
    volumes:
     - /var/lib/postgresql/data  
    ports:
      - "5432:5432" 
  pgadmin:
    image: dpage/pgadmin4
    container_name: pgAdmin
    restart: always
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@litoplas.com  
      PGADMIN_DEFAULT_PASSWORD: my-weak-password
      PGADMIN_LISTEN: 80
    ports:
     - 8080:80
    volumes:
     - /var/lib/pgadmin 
    depends_on:
     - db 
      


## Ingresar a la base de datos
http://localhost:8080/browser/


## Agregar conexion en el app module

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // imports: [UsersModule],
  // controllers: [AppController],
  // providers: [AppService],

  imports: [
    UserModule,
     PermissionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'my-weak-password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true // NO COLOCAR EN PRODUCCION
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}


## Colocar las entity en las propiedades de la entidades

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// ENUM, para los tipos de roles
export enum USER_ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
  ROOT = 'ROOT',
}


// Agregar el decorador entity para que se entienda en la base de datos
@Entity()
export class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,

  })
  name: string;

  @Column({
    nullable: false,
    
  })
  email: string;

  @Column({
    nullable: false,
    
  })
  phone: number;

  @Column({
    nullable: false,
    
  })
  role: USER_ROLE;
}


## Agregar la entidad en el user module

mport { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([
    User
  ])]
})
export class UserModule {}

## Documentacion de swagger

https://docs.nestjs.com/openapi/introduction



## Instalar swagger
npm install --save @nestjs/swagger



## Instalar nestjs config para las variables de entorno

npm i --save @nestjs/config

## Instalar Morgan, para loggear las request que estan entrando

npm i morgan

## INstalar el tipado para el morgan

npm i --save-dev @types/morgan


## Agregar el morgan en el main

app.use(morgan('dev'))

## Crear las variables de entorno para la configuracion

envFilePath: `.dev.env`

Sedebe colocar asi para que sea dinamcico

 envFilePath: `${process.env.NODE_ENV}.env`

 ## INstaar estrategia de nombrado para las migraciones

 npm i typeorm-naming-strategies



## Passport

https://www.passportjs.org/



npm install --save @nestjs/passport passport passport-local

npm install --save-dev @types/passport-local

npm install --save @nestjs/jwt passport-jwt

npm install --save-dev @types/passport-jwt



 
 