import { Injectable, NotFoundException } from '@nestjs/common';
import { User} from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as idGenerator } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

constructor(

  @InjectRepository(User) 
  private readonly userRepository: Repository<User>,

  ){}


  
  async getUsers(): Promise<User[]> {        
    return await this.userRepository.find({

      // Para mostrar los permisos en el GET
      relations:['permissions']
    });
  }


 async getUserById(id: number): Promise<User> {  
  const user: User = await this.userRepository.findOneBy({id}); 
  if(!user) throw new NotFoundException('Resource not found');  
  return user;
}


  async createUser(data: CreateUserDto): Promise<User> {

    //Crea el objeto en memoria
    const user: User = this.userRepository.create(data);


    // Guardar en la bse de datos  
    return  await this.userRepository.save(user);
  }


  async  updateUser(id: number, data: CreateUserDto): Promise<User> {

   // Buscar el objeto por el ID
   const existUser = await this.getUserById(id);
 
   if(!existUser) throw new NotFoundException('Resource not found'); 

    // Obtenemos el objeto si existe, mapea la data
    // que mandamos
    const user = await this.userRepository.preload({
      id,
      ...data
    })

    return user;
  }


 async deleteUser(id: number): Promise<void> {

   // Buscar el objeto por el ID
   const user = await this.getUserById(id);
 
   if(!user) throw new NotFoundException('Resource not found'); 

    this.userRepository.remove(user);
  }


  //-------------------------------------------------------------------------------
  // Haciendo uso de la entity creada
  // user: User = {
  //     id:'23432423',
  //     name: 'Gabriel Betin Valdes',
  //     email: 'gbetin@litoplas.com',
  //     phone: 99873434343,
  //     role: USER_ROLE.ADMIN
  //   }

  // // Array para tener almacenado los usuarios
  // users: User[] = [
  //   {
  //     id: 98797,
  //     name: 'Gabriel Betin Valdes',
  //     email: 'gbetin@litoplas.com',
  //     phone: 99873434343,
  //     role: USER_ROLE.ADMIN,
  //   },
  // ];

  // // Metodo para consultar un usuario
  // getUserById(id: number): User | null {
  //   return this.users.find((user) => user.id === id);
  // }

  // // Funciones para las peticiones
  // getUsers(): User[] {
  //   return this.users;
  // }

  // // Instalar uuid, para los ID npm i uuid
  // createUser(data: CreateUserDto): User {
  //   const tempUser = {
  //     ...data,
  //     id: idGenerator(),
  //   };
  //   console.log(tempUser);
  //   this.users.push(tempUser);
  //   return tempUser;
  // }

  // updateUser(id: number, data: CreateUserDto): User {
  //   // Obtenemos el objeto si existe
  //   const user = this.users.find((user) => user.id === id);

  //   // Obtendremos  el indice del usuario
  //   const userIndex = this.users.findIndex((user) => user.id === id);

  //   //Con este metodo reemplazamos las propiedades que  hagan  match ebtre entre los objetos
  //   const userTemp = Object.assign(user, data);
  //   this.users[userIndex] = userTemp;

  //   return userTemp;
  // }

  // deleteUser(id: number): void {
  //   const tempUsers = this.users.filter((user) => user.id !== id);
  //   this.users = tempUsers;
  // }
}
