import { NextFunction, Request, Response } from "express";
import { GlobalRepository } from "../repositories/global.repository";
import { GlobalService } from "../services/global.service";
import { success } from "../app/http/res.http";
import { HttpStatus } from "../app/http/status.http";
import { HttpMessage } from "../app/http/message.http";

export class GlobalController{
   
    static globalService = new GlobalService(new GlobalRepository);


    static async createProject(req:Request, res:Response, next:NextFunction){
        try{

            await GlobalController.globalService.createProyecto(req.body);
            success(res, HttpStatus.CREATED, HttpMessage.CREATED);

        }catch(err){
            next(err);
        }
    }
    static async createEmpresa(req:Request, res:Response, next:NextFunction){
        try{

            await GlobalController.globalService.createEmpresa(req.body);
            success(res, HttpStatus.CREATED, HttpMessage.CREATED);

        }catch(err){
            next(err);
        }
    }

    static async findGlobal(req:Request, res:Response, next:NextFunction){
        try{

            const empresas= await GlobalController.globalService.findGlobal();
            success(res, HttpStatus.OK, HttpMessage.ok, empresas);

        }catch(err){
            next(err);
        }
    }

}