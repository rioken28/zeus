import moment from "moment";
import { AlimentacionEntity } from "../../database/entities/servicios/alimentacion.entity";
import { AlimentacionRepo } from "../../repositories/servicios/alimentacion.repo";
import { NotFoundException } from "../../utils/exceptions/http.exceptions";
import { promedios } from "../../utils/promedios.utils";


export class AlimentacionService{

    alimentacionRepo:AlimentacionRepo;
    constructor(alimentacionRepo:AlimentacionRepo){
        this.alimentacionRepo = alimentacionRepo;
    }

    async create(alimentacion:AlimentacionEntity, id?:string){

   
        if(!alimentacion.create_at){
            alimentacion.create_at = new Date(moment().format());     
        }

        if(id || id?.length != 0){
            const uid = parseInt(id!);
            return await this.alimentacionRepo.update(uid!, alimentacion);               
        }
     
        return await this.alimentacionRepo.create(alimentacion);
        //return true;
    }   


    async findCusttom(cantidad:number ,fechaIni?:string, fechaFin?:string, servicio?:string, campamento?:string, empresa?:string){

        let  query:string  = `
        SELECT
        id_alimentacion,
        a.create_at,
        a.cantidad,
        e.nombre as nombre_empresa,
        e.id_empresa, 
        p.nombre as nombre_proyecto,
        p.id_proyecto,
        d.nombre as nombre_servicio,
        d.id_detalle
        FROM "Alimentacion" as a
        join "Proyecto" as p on a."proyectoId" = p.id_proyecto
        join "Empresa" as e on a."empresaId" = e.id_empresa 
        join "Detalle_alimentacion" as d on a."detalleId" = d.id_detalle WHERE 1=1
        `;
    

        if(fechaIni && !fechaFin) query = query + ` AND a.create_at >= '${fechaIni}'`
        if(!fechaIni && fechaFin) query = query + ` AND a.create_at <= '${fechaFin}'`
        if(fechaIni && fechaFin){
            query = query + ` AND a.create_at >= ${fechaIni} AND a.create_at <= ${fechaFin}`
        };
        
        if(servicio !== 'undefined' && servicio !== '' && servicio) query = query + ` AND d.nombre = '${servicio}'`;
        if(campamento !== 'undefined' && campamento !== '' && campamento) query = query + ` AND p.nombre = '${campamento}'`;
        if(empresa !== 'undefined' && empresa !== '' && empresa) query = query + ` AND e.nombre = '${empresa}'`;

        query = query + ` ORDER BY id_alimentacion desc LIMIT ${cantidad};`;


     

        const data = await AlimentacionRepo.findCustom(query);  
  
      
        if(!data){
            throw new NotFoundException("Sin data en alimentacion");
        }

        const sumasYpromedios = {
            
            cena:promedios(data, "cena"), 
            colacion :promedios(data, "colacion"), 
            cenaTn :promedios(data, "cenaTN"), 
            almuerzo :promedios(data, "almuerzo"),
            desayuno: promedios(data, "desayuno"), 
            totales :promedios(data, undefined, true)
        }
       const resData = {
        data, 
        sumasYpromedios
       }
        return resData;
    }


    async delete(id:number){
        return await this.alimentacionRepo.delte(id);
    }
}