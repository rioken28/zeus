import { use } from "passport";
import { UserEntity } from "../database/entities/user.entity";
import { Payload } from "../models/interfaces/global.interface";
import { Jwt } from "../libs/jwt.lib";

export class AccountService{

    private objJwt;
    
    constructor(){
        this.objJwt = new Jwt;
    }

    async generateToken(user:UserEntity){
        const payload:Payload = {

            id: user.id, 
            username: user.username, 
            role: user.role
        }
        const token = await this.objJwt.signUser(payload);
        return token;
    }   
}