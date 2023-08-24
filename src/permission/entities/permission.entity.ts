import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Permission {

    @PrimaryGeneratedColumn('increment')
    id: number;

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

    // Acciones para realizar antes de un evento
    // @BeforeInsert()
    // private beforeInsert(){
    //     this.id = tihs.name;
    // }

  

}


