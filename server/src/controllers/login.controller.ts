import { NextFunction, Request, Response } from "express";
import passport from "../libs/passport.lib";
import { BadRequestException, NotFoundException, UnauthorizedException } from "../utils/exceptions/http.exceptions";
import { UserEntity } from "../database/entities/user.entity";
import { AccountService } from "../services/account.service";
import { success } from "../app/http/res.http";

export class AccountController{

    static account = new AccountService();

    static login(req:Request, res:Response, next:NextFunction){

        passport.authenticate ('login', {session: false}, async (error:Error, user:UserEntity, info:any)=>{
            
         try{   

            if(!user){
                console.log(info);
                throw new UnauthorizedException(info.message);
            }
            
            const token =  await  AccountController.account.generateToken(user);
            res.header('authorization', `Bearer ${token}`);
            console.log(token);
            return success(res, 200, 'success');

         }catch(err){
            next(err);
         }
                
        })(req, res, next);

    }
}