import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, SaveOptions } from "typeorm";
import { UserEntity } from "./user.entity";
import { ProyectoEntity } from "./global.entity";

@Entity({name:"Administradores"})
export class AdministradorEntity extends BaseEntity{
    @PrimaryColumn()
    id:string;
    
    @Column({type: 'varchar', length: 50, nullable: false})
    nombre:String;

    @Column({type: 'varchar', length: 9, nullable: false})
    rut:string;

    @Column({type: 'varchar', length: 50, nullable: true})
    apellidoPaterno:String;    
    
    @Column({type: 'varchar', length: 50, nullable: true})
    apellidoMaterno:String;

    @Column({type: 'varchar', length: 50, nullable: false})
    contacto:String;

    @OneToMany(()=>ProyectoEntity, (proyecto)=>proyecto.administrador)
    proyecto:ProyectoEntity[];

    @OneToOne(()=>UserEntity, {
        cascade:true, 
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinColumn()
    userEntity:UserEntity;
}
