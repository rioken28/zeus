import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { BadRequestException } from "../utils/exceptions/http.exceptions";
import { HttpStatus } from "../app/http/status.http";
import { HttpMessage } from "../app/http/message.http";
import {  z } from "zod";


 export function validateSchema<T>(validateSchema:z.ZodType<T>){
    return async function (req:Request, res:Response, next:NextFunction){
        try{    
                 const resZod = await validateSchema.safeParseAsync(req.body);
     
             if(resZod.error){
     
                 let errores = resZod.error.errors.map((err)=>{
                     return err.message
                 })
    
                 throw new BadRequestException(HttpMessage.BAD_REQUEST, HttpStatus.BAD_REQUEST, errores );
             }
     
             return next();
             
        }catch(err){
             return next(err);
         }
     }
 }