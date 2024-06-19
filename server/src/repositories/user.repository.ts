
import createUserDto from "../models/class/dto/user/create-user.dto";
import { UserEntity } from "../database/entities/user.entity";
import UpdateUserDto from "../models/class/dto/user/update-user.dto";
import { plainToClass } from "class-transformer";

export class UserRepository {

    async create(userDto:createUserDto){
        
        const dataFormat = plainToClass(UserEntity, userDto)
        const create = UserEntity.create(dataFormat);
        return await UserEntity.save(create);
    }

    async findAll(){
        return await UserEntity.find();
    }
    async findOne(id:number){
        return await UserEntity.findOne({
            where: {
                id
            }
        });
    }

    async delete(id:number){
        return await UserEntity.delete(id);
    }

    async update(id:number, userDto:UpdateUserDto){
        return await UserEntity.update(id, userDto);
    }

    //metodos estaticos
    static async findOneUsername(username:string){
        return await UserEntity.findOne({
            where: {
                username
            }
        });
    }
}


