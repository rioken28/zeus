import { Role } from "../enums/role.enum";

export interface Payload{
    
    id:number;
    username:string;
    role:Role
}


export interface ResAlimentacion{
    create_at:Date;
   cantidad:number;
   nombre_empresa:string;
   nombre_proyecto:string;
   nombre_servicio:string;
}