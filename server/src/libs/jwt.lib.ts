import jsonwebtoken from "jsonwebtoken";
import { SERVER_CONFIG } from "../config/server.config";
import { Payload } from "../models/interfaces/global.interface";


export class Jwt{

    private secret:string;

    constructor(){
        this.secret = SERVER_CONFIG.secretJwt as string;
    }

    signUser(payload:Payload){

       return new Promise((resolve, reject)=>{
            jsonwebtoken.sign(payload, this.secret,  {expiresIn: '5h'}, (err, token)=>{
                if(err) reject(err);
                resolve(token);
            });
       });

    }

    decodeToken(token:string){
        return new Promise((resolve, reject)=>{
            jsonwebtoken.verify(token, this.secret, (err, payload)=>{
                if(err) reject(err);
                resolve(payload)
            })
        });
    }

    
}