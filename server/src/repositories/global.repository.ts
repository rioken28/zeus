import { DetalleAlimentacionEntity, EmpresaEntity, ProyectoEntity } from "../database/entities/global.entity";

export class GlobalRepository{

    async createProyecto(proyecto:ProyectoEntity){
        const  createProyecto= ProyectoEntity.create(proyecto);
        return await ProyectoEntity.save(createProyecto);
    }
    async createEmpresa(empresa:EmpresaEntity){
        const createEmpresa = EmpresaEntity.create(empresa);
        return await EmpresaEntity.save(createEmpresa);
    }
    async findProyecto(){
        return await ProyectoEntity.find({
            select: ["id", "nombre"]
        });
    }
    async findEmpresas(){
        return await EmpresaEntity.find({
            select: ["id", "nombre"]
        });
    }

    async detalleAlimentacion(){
        return await DetalleAlimentacionEntity.find({
            select: ["id", "nombre"]
        });
    }

}