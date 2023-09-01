import { BaseEntity } from "../../config/base.entity";
import { IPermission } from "../../interfaces/permission.interface";
import { UserPermissionEntity } from "../../user/entity/user-permission.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Permission extends BaseEntity  implements IPermission{

    // @PrimaryGeneratedColumn('increment')
    // id: number;

    @Column({
        nullable: false,

    })
    name: string;

    @Column({
        nullable: false,

    })
    description: string;

    @Column({
        nullable: false,

    })
    isActive: boolean;


    @OneToMany( () => UserPermissionEntity, (userPermissionEntity) => userPermissionEntity.permission)
    userToPermissions: UserPermissionEntity[];




    // Acciones para realizar antes de un evento
    // @BeforeInsert()
    // private beforeInsert(){
    //     this.id = tihs.name;
    // }

    // @CreateDateColumn()
    // createdAt: Date;

    // @UpdateDateColumn()
    // updateAt: Date;

}


