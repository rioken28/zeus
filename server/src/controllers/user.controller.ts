import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { UserRepository } from "../repositories/user.repository";
import { success } from "../app/http/res.http";
import { HttpStatus } from "../app/http/status.http";
import { HttpMessage } from "../app/http/message.http";

export class UserController{

    static userService = new UserService(new UserRepository);

    static async create(req:Request,res:Response, next:NextFunction){
        try{
            const resService = await UserController.userService.create(req.body);
            success(res, HttpStatus.CREATED, HttpMessage.CREATED , resService);
        }catch(err){
            return next(err);
           
        }

    }

    static async findAll(req:Request,res:Response, next:NextFunction){
        try{
            const resService = await UserController.userService.findAll();
            success(res, HttpStatus.OK, HttpMessage.ok, resService);
        }catch(err){
            return next(err);
           
        }

    }
    static async findOne(req:Request,res:Response, next:NextFunction){
        try{
            const resService = await UserController.userService.findOne(parseInt(req.params.id));
            success(res, HttpStatus.OK, HttpMessage.ok,resService);
        }catch(err){
            return next(err);
           
        }

    }
    static async delete(req:Request,res:Response, next:NextFunction){
        try{
            
            const resService = await UserController.userService.delete(parseInt(req.params.id));
            success(res, HttpStatus.OK, HttpMessage.DELETE);

        }catch(err){

            return next(err);
           
        }

    }
    static async update(req:Request,res:Response, next:NextFunction){
        try{
            const resService = await UserController.userService.update(parseInt(req.params.id ), req.body);
            success(res, HttpStatus.OK, HttpMessage.UPDATE);
        }catch(err){
         
            return next(err);
           
        }

    }
}