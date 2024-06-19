import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Role } from "../../models/enums/role.enum";
import { AdministradorEntity } from "./administrador.entity";

@Entity({name: "User"})
export class UserEntity extends BaseEntity{

    @PrimaryGeneratedColumn({name: "id_user"})
    id:number;

    @Column({type:'varchar', length: 50, nullable: false, unique:true})
    username:string;

    @Column({type:'varchar', length: 80, nullable: false})
    password:string;

    @Column({type: 'enum', enum: Role, default: Role.user})
    role:Role;

    @Column({type: 'varchar', default:()=>'CURRENT_TIMESTAMP'})
    create_at:Date;

    @UpdateDateColumn({type:'varchar'})
    update_at:Date;   
}