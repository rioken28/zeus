import { plainToClass, plainToInstance } from "class-transformer";
import { AdministradorEntity } from "../database/entities/administrador.entity";
import userDto from "../models/class/dto/user/create-user.dto";
import { UserEntity } from "../database/entities/user.entity";
import { ProyectoEntity } from "../database/entities/global.entity";

export class AdminRepository{
    
  
    async create(administrador:AdministradorEntity, user:userDto){


        const dataUser = plainToClass(UserEntity, user);

        const createUser = UserEntity.create(dataUser);
        const createData = AdministradorEntity.create(administrador);
        createData.userEntity = createUser;
        return AdministradorEntity.save(createData);
    }

    async findAll(){
        return await AdministradorEntity.find({
            relations:["userEntity"],
            order:{
                id: 'ASC'
            }
        });
    };
    async findOne(id:string){
        return await AdministradorEntity.findOne({
            where: {
                id
            },
            relations: ['userEntity']
        });
    };
    async delete(id:string){
        return await AdministradorEntity.delete(id);
    }

}