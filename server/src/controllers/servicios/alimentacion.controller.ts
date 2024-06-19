import { NextFunction, Request, Response } from "express";
import { AlimentacionRepo } from "../../repositories/servicios/alimentacion.repo";
import { AlimentacionService } from "../../services/servicios/alimentacion.service";
import { HttpStatus } from "../../app/http/status.http";
import { HttpMessage } from "../../app/http/message.http";
import { success } from "../../app/http/res.http";

export class AlimentacionController{

    static alimentacionService = new AlimentacionService(new AlimentacionRepo);

    static async create(req:Request, res:Response, next:NextFunction){
        try{

            await AlimentacionController.alimentacionService.create(req.body, req.query?.id as string);
            success(res, HttpStatus.CREATED, HttpMessage.CREATED);

        }catch(err){
            next(err);
        }
    }

    static async findCustom(req:Request, res:Response, next:NextFunction){
        try{

            const  dataAlimentacion= await AlimentacionController
            .alimentacionService
            .findCusttom(parseInt(
                req.query.cantidad as string),
                req.query.fechaIni as string,
                req.query.fechaFin as string,
                req.query.servicio as string,
                req.query.campamento as string,
                req.query.empresa as string);
            success(res, HttpStatus.OK, HttpMessage.ok, dataAlimentacion);

        }catch(err){
            next(err);
        }
    }
    static async delete(req:Request, res:Response, next:NextFunction){
        try{

            await AlimentacionController.alimentacionService.delete(parseInt(req.params.id));
            success(res, HttpStatus.CREATED, HttpMessage.CREATED);

        }catch(err){
            next(err);
        }
    }
}