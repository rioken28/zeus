import { NextFunction, Request, Response } from "express";
import { ForbiddenException } from "../utils/exceptions/http.exceptions";
import { Role } from "../models/enums/role.enum";

export function verifyRole(Role:Role[]){

    return function middRole(req:any, res:Response, next:NextFunction){
       try{
        
            const result =  Role.some((rol:string)=> rol.includes(req.payload.role));

            if(!result){
                throw new ForbiddenException();
            }
            next();

       }catch(err){
            next(err);
       }
    }


}