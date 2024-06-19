import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DetalleAlimentacionEntity, EmpresaEntity, ProyectoEntity } from "../global.entity";
import { Alimentacion } from "../../../models/enums/global.enum";



@Entity({name: 'Alimentacion'})
export class AlimentacionEntity extends BaseEntity{

    @PrimaryGeneratedColumn({name: "id_alimentacion"})
    id:number;

    @Column({type: "int"})
    cantidad:number;
    
    @Column({type: 'boolean', default: true})
    status:boolean;

    @Column({type: 'varchar'})
    create_at:Date;

    @ManyToOne(()=>DetalleAlimentacionEntity, (detalle)=>detalle.alimentacion,{
        cascade:true,
        eager:true,
    })
    detalle:DetalleAlimentacionEntity;

    @ManyToOne(()=>ProyectoEntity, (proyecto)=>proyecto.alimentacion,{
        cascade:true,
        eager:true,
    })
    proyecto:ProyectoEntity;

    @ManyToOne(()=>EmpresaEntity, (empresa)=>empresa.alimentacion,{
        cascade:true,
        eager:true,
    })
    empresa:EmpresaEntity;
}

