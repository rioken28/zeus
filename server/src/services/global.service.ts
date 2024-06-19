import { EmpresaEntity, ProyectoEntity } from "../database/entities/global.entity";
import { GlobalRepository } from "../repositories/global.repository";

export class GlobalService{
    private globalRepo:GlobalRepository;
    constructor(globalRepo:GlobalRepository){
        this.globalRepo = globalRepo;
    }
    
    async createProyecto(proyecto:ProyectoEntity){
        this.globalRepo.createProyecto(proyecto);
    }   
    async createEmpresa(empresa:EmpresaEntity){
        this.globalRepo.createEmpresa(empresa);
    }
    async findGlobal(){
        const proyectos = await this.globalRepo.findProyecto();
        const empresas = await this.globalRepo.findEmpresas();
        const servicios = await this.globalRepo.detalleAlimentacion();

        return {
            proyectos, 
            empresas, 
            servicios
        }

    }

}