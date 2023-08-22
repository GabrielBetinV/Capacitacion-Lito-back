import { Injectable } from '@nestjs/common';
import { User, USER_ROLE } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as idGenerator } from 'uuid';

@Injectable()
export class UserService {
  // Haciendo uso de la entity creada
  // user: User = {
  //     id:'23432423',
  //     name: 'Gabriel Betin Valdes',
  //     email: 'gbetin@litoplas.com',
  //     phone: 99873434343,
  //     role: USER_ROLE.ADMIN
  //   }

  // Array para tener almacenado los usuarios
  users: User[] = [
    {
      id: '23432423',
      name: 'Gabriel Betin Valdes',
      email: 'gbetin@litoplas.com',
      phone: 99873434343,
      role: USER_ROLE.ADMIN,
    },
  ];

  // Metodo para consultar un usuario
  getUserById(id: string): User | null {
    return this.users.find((user) => user.id === id);
  }

  // Funciones para las peticiones
  getUsers(): User[] {
    return this.users;
  }

  // Instalar uuid, para los ID npm i uuid
  createUser(data: CreateUserDto): User {
    const tempUser = {
      ...data,
      id: idGenerator(),
    };
    console.log(tempUser);
    this.users.push(tempUser);
    return tempUser;
  }

  updateUser(id: string, data: CreateUserDto): User {
    // Obtenemos el objeto si existe
    const user = this.users.find((user) => user.id === id);

    // Obtendremos  el indice del usuario
    const userIndex = this.users.findIndex((user) => user.id === id);

    //Con este metodo reemplazamos las propiedades que  hagan  match ebtre entre los objetos
    const userTemp = Object.assign(user, data);
    this.users[userIndex] = userTemp;

    return userTemp;
  }

  deleteUser(id: string): void {
    const tempUsers = this.users.filter((user) => user.id !== id);
    this.users = tempUsers;
  }
}
