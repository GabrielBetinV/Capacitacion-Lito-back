import { Injectable, NotFoundException } from '@nestjs/common';
import { User} from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { v4 as idGenerator } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPermissionEntity } from './entity/user-permission.entity';
import { CreateUserPermissionDto } from './dto/create-user-permission.dto';
import { randomPasswordGenerations } from 'src/utils/helper';
import * as bcrypt from 'bcrypt';
import { Iuser } from 'src/interfaces/user.interface';


@Injectable()
export class UserService {

constructor(

  @InjectRepository(User) 
  private readonly userRepository: Repository<User>,
  
  @InjectRepository(UserPermissionEntity) 
  private readonly userPermissionRepository: Repository<UserPermissionEntity>,

  ){

    process.env
  }


  
  async getUsers(): Promise<User[]> {        
    // return await this.userRepository.find({

    //   // Para mostrar los permisos en el GET
    //   relations:['userToPermissions']      
    // });

    const users: User[] = await this.userRepository
    .createQueryBuilder('user')
    .leftJoinAndSelect('user.userToPermissions', 'userToPermissions')
    .leftJoinAndSelect('userToPermissions.permission','permission')
    .getMany();

    return users;

  }


 async getUserById(id: number): Promise<User> {  
  const user: User = await this.userRepository.findOneBy({id}); 
  if(!user) throw new NotFoundException('Resource not found');  
  return user;
}


  async createUser(data: CreateUserDto): Promise<User> {


    const randomPassword = randomPasswordGenerations();
    const hashedPassword = await bcrypt.hash(randomPassword,Number(process.env.HASH_SALT));

    console.log(randomPassword)
    console.log(hashedPassword)

    //Crea el objeto en memoria
    const user: User = this.userRepository.create(data); 
    user.password = hashedPassword;
    


    // Guardar en la bse de datos  
    return  await this.userRepository.save(user);
  }


  async  updateUser(id: number, data: UpdateUserDto): Promise<User> {

   // Buscar el objeto por el ID
   const existUser = await this.getUserById(id);
 
   if(!existUser) throw new NotFoundException('Resource not found'); 

    // Obtenemos el objeto si existe, mapea la data
    // que mandamos
    const user = await this.userRepository.preload({
      id,
      ...data
    })

    //return user;
    return await this.userRepository.save(user);
  }


 async deleteUser(id: number): Promise<void> {

   // Buscar el objeto por el ID
   const user = await this.getUserById(id);
 
   if(!user) throw new NotFoundException('Resource not found'); 

    this.userRepository.remove(user);
  }


async getuserBY({key, value}: {key: keyof CreateUserDto, value: number | string}): Promise<Iuser> {

  const user : Iuser = await this.userRepository.createQueryBuilder('user')
   .where({[key]: value})
   .getOne()

   return user;
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




// User permission section
async createUserPermission(data: CreateUserPermissionDto): Promise<UserPermissionEntity> {
    const userPermission: UserPermissionEntity = this.userPermissionRepository.create(data);
  return  await this.userPermissionRepository.save(userPermission);
}


}
