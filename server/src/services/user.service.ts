import { hashPassword } from "../libs/bcrypt";
import CreateUserDto from "../models/class/dto/user/create-user.dto";
import UpdateUserDto from "../models/class/dto/user/update-user.dto";
import { UserRepository } from "../repositories/user.repository";
import { NotFoundException } from "../utils/exceptions/http.exceptions";

export class UserService{

    userRepo:UserRepository;

    constructor(userRepo:UserRepository){
        this.userRepo = userRepo;
    }

    async create(userDto:CreateUserDto){
        userDto.password = await hashPassword(userDto.password);
        return await this.userRepo.create(userDto); 
    }
    async findAll(){
        const datosUsuarios = await this.userRepo.findAll(); 
        if(!datosUsuarios) throw new NotFoundException("No hay usuarios en la base de datos");
        return datosUsuarios;
    }

    async findOne(id:number){
        const usuario = await this.userRepo.findOne(id); 
        if(!usuario) throw new NotFoundException("No hay usuarios en la base de datos");
        return usuario;
    }

    async delete(id:number):Promise<string>{
        await this.findOne(id);
        await this.userRepo.delete(id); 
    
        return "recurso borrado";
    }

    async update(id:number, userDto:UpdateUserDto){
        return await this.userRepo.update(id, userDto);
    }
}