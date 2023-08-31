import { Iuser, USER_ROLE } from "../../interfaces/user.interface";
import { BaseEntity } from "../../config/base.entity";
import { Permission } from "../../permission/entities/permission.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserPermissionEntity } from "./userPermission.entity";



// Agregar el decorador entity para que se entienda en la base de datos
@Entity()
export class User extends BaseEntity implements Iuser {

  // @PrimaryGeneratedColumn('increment')
  // id: number;

  @Column({
    nullable: false,

  })
  name: string;

  @Column({
    nullable: false,
    type: 'varchar',
    length: 150,
    unique: true
  })
  email: string;

  @Column({
    nullable: false,

  })
  phone: string;

  @Column({
    nullable: false,

  })
  role: USER_ROLE;


  @OneToMany( () => UserPermissionEntity, (userPermissionEntity) => userPermissionEntity.user)
  userToPermissions: UserPermissionEntity[];




  // @CreateDateColumn()
  // createdAt: Date;

  // @UpdateDateColumn()
  // updateAt: Date;





  // // RELACION DE LAS TABLAS
  // @ManyToMany(type => Permission)
  
  // // CREA UNA TABLA QUE UNIRA LAS TABLAS RELACIONADA
  // @JoinTable({
  //   name: 'user_permission',
  //   joinColumn: {
  //     name: 'user',
  //     referencedColumnName: 'id'
  //   },
  //   inverseJoinColumn: {
  //     name: 'permissoin',
  //     referencedColumnName: 'id'
  //   }
  // })
  // permissions: Permission[];

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
