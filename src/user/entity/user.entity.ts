import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
    nullable: true,
    
  })
  phone: string;

  @Column({
    nullable: false,
    
  })
  role: USER_ROLE;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}





// Explicacion de un TYPE, para agregar tipos de datos basicos
// export type data = {
//     type: string
// }

// Hacemos uso del tipo de data
// const myData: data = {
//     type: 'sdsdsds'
// }

// Para acceder seria desde, myData
//myData.type;

// La interface de la entidad
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone: number;
//   role: USER_ROLE;
// }
