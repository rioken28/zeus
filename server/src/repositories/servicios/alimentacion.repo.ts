import { AlimentacionEntity } from "../../database/entities/servicios/alimentacion.entity";


export class AlimentacionRepo{
    async create(alimentacion:AlimentacionEntity){
        const createAlimentacion = AlimentacionEntity.create(alimentacion);
        return await AlimentacionEntity.save(createAlimentacion);
    }
    async find(){
        return await AlimentacionEntity.find();
    }

    static async findCustom(query:string){
        return await AlimentacionEntity.query(query);
    }

    async update(id:number, alimentacion:AlimentacionEntity){
        return await AlimentacionEntity.update(id, alimentacion);
    }
    async delte(id:number){
        return await AlimentacionEntity.delete(id);
    }
}