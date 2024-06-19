import { NextFunction, Request, Response } from "express";
import { error } from "../../app/http/res.http";
import { BadRequestException, ForbiddenException, InternalServerError, NotFoundException, UnauthorizedException } from "../../utils/exceptions/http.exceptions";

export function internalSerMidd(err:Error, req:Request, res:Response){
    return error(res, 500 , err.message);
}

export function badRequestmidd(err:BadRequestException, req:Request, res:Response, next:NextFunction){
    if(err instanceof BadRequestException){
        return error(res, err.status, err.message, err.errors);
    }
     next(err);
}   

export function forbiddenMidd(err:ForbiddenException, req:Request, res:Response, next:NextFunction){

    if(err instanceof ForbiddenException){
        return error(res, err.status, err.message, err.errors);
     }
     next(err);
}   
export function notFoundMidd(err:NotFoundException, req:Request, res:Response, next:NextFunction){
    if(err instanceof NotFoundException){
       return error(res, err.status, err.message);
    }
    next(err);
} 
export function unauthorizedException(err:UnauthorizedException, req:Request, res:Response, next:NextFunction){
    if(err instanceof UnauthorizedException){
       return error(res, err.status, err.message);
    }

    return next(err);
}