import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {  AlimentacionEntity } from "./servicios/alimentacion.entity";
import { Alimentacion } from "../../models/enums/global.enum";
import { AdministradorEntity } from "./administrador.entity";



@Entity({name: 'Proyecto'})
export class ProyectoEntity extends BaseEntity{

    @PrimaryGeneratedColumn({name: "id_proyecto"})
    id:number;

    @Column({type: 'varchar'})
    nombre:string;

    @Column({type: 'boolean', default: true})
    status:boolean;

    @Column({type: 'varchar', default:()=>'CURRENT_TIMESTAMP'})
    create_at:Date;

    @ManyToOne(()=>AdministradorEntity, (administrador)=>administrador.proyecto)
    administrador:AdministradorEntity;

    @OneToMany(()=>AlimentacionEntity, (alimentacion)=>alimentacion.proyecto)
    alimentacion:AlimentacionEntity[];
}


@Entity({name: 'Empresa'})
export class EmpresaEntity extends BaseEntity{
    @PrimaryGeneratedColumn({name: "id_empresa"})
    id:number;

    @Column({type: 'varchar'})
    nombre:string;

    @Column({type: 'boolean', default: true})
    status:boolean;

    @Column({type: 'varchar', default:()=>'CURRENT_TIMESTAMP'})
    create_at:Date;

    @OneToMany(()=>AlimentacionEntity, (alimentacion)=>alimentacion.empresa)
    alimentacion:AlimentacionEntity[];
}

@Entity({name: 'Detalle_alimentacion'})
export class DetalleAlimentacionEntity extends BaseEntity{
    @PrimaryGeneratedColumn({name: "id_detalle"})
    id:number;

    @Column({type:"enum", enum:Alimentacion})
    nombre:string;

    @OneToMany(()=>AlimentacionEntity, (alimentacion)=>alimentacion.detalle)
    alimentacion:AlimentacionEntity[];


}
