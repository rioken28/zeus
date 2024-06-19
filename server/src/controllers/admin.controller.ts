import { NextFunction, Request, Response } from "express";
import { AdminService } from "../services/admin.service";
import { AdminRepository } from "../repositories/administrador.repository";
import { success } from "../app/http/res.http";
import { HttpStatus } from "../app/http/status.http";
import { HttpMessage } from "../app/http/message.http";

export class AdminController{

    static admiService:AdminService = new AdminService(new AdminRepository)

    static async create(req:Request, res:Response, next:NextFunction){
        try{    
            await AdminController.admiService.create(req.body);
            success(res, HttpStatus.CREATED, HttpMessage.CREATED);
        }catch(err){
            next(err);
        }
    }


    static async findAll(req:Request, res:Response, next:NextFunction){
        try{

            const resService =  await AdminController.admiService.findAll();
            success(res, HttpStatus.OK, HttpMessage.ok,  resService);

        }catch(err){
            next(err);
        }
    }
    static async findOne(req:Request, res:Response, next:NextFunction){
        try{
            
            const resService =  await AdminController.admiService.findOne(req.params.id);
            success(res, HttpStatus.OK, HttpMessage.ok, resService);

        }catch(err){
            next(err);
        }
    }
    static async delete(req:Request, res:Response, next:NextFunction){
        try{
            
            await AdminController.admiService.delete(req.params.id);
            success(res, HttpStatus.OK, HttpMessage.DELETE);

        }catch(err){
            next(err);
        }
    }

}