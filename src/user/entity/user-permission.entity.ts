import { BaseEntity } from "../../config/base.entity"
import { User } from "./user.entity";
import { Permission } from "../../permission/entities/permission.entity";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class UserPermissionEntity  extends  BaseEntity{

    @Column()
    accessLevel: string;

    @ManyToOne( () => User, (user) => user.userToPermissions)
    user:User;
    
    @ManyToOne( () => Permission, (permission) => permission.userToPermissions)
    permission: Permission;

}