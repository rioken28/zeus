import { classToPlain, plainToClass } from "class-transformer";
import { AdministradorEntity } from "../database/entities/administrador.entity";
import { adminDto } from "../models/class/dto/admin/create-admin.dto";
import userDto from "../models/class/dto/user/create-user.dto";
import { AdminRepository } from "../repositories/administrador.repository";
import {v4 as uuidv4} from "uuid";
import { hashPassword } from "../libs/bcrypt";
import { NotFoundException } from "../utils/exceptions/http.exceptions";

export class AdminService{

    adminRepository:AdminRepository

    constructor(adminRepo:AdminRepository){
        this.adminRepository = adminRepo;
    }

    public async create(adminData:adminDto){

        adminData.id = uuidv4();

        const {username, password, ...rest} = adminData;

        const hashPass = await hashPassword(password);
        const userData:userDto = {
            username, 
            password:hashPass
        }

        const resAdmin = plainToClass(AdministradorEntity, rest);
        const admin = await this.adminRepository.create(resAdmin, userData);        
        return admin;
    }


    public async findAll(){

        const administradores = await this.adminRepository.findAll();
        console.log(administradores);
        if(administradores.length === 0){
            throw new NotFoundException("no se ha encontrado datos de administrador");
        }
        return administradores;
    
    }
    public async findOne(id:string){
   
        const data = await this.adminRepository.findOne(id);
        console.log(data);
        if(!data){
            throw new NotFoundException("no se ha encontrado datos de administrador");
        }
        return data;
    }
    public async delete(id:string){
        
        const resFind = await this.findOne(id);
        const data = await this.adminRepository.delete(resFind.id);
        return data;
    }
}