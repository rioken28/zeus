import { NextFunction, Request, Response } from "express";
import passport from "../libs/passport-jwt.lib";
import { UnauthorizedException } from "../utils/exceptions/http.exceptions";
import { Payload } from "../models/interfaces/global.interface";


export function verifyToken( req:any, res:Response, next:NextFunction){
    passport.authenticate('jwt', {session: false},(err:any, payload:Payload, info:any)=>{

        try{    
            if(!payload){
                throw new UnauthorizedException(info.message);
            }
            req['payload'] = payload;
            next();
        
        }catch(err){
            return next(err);
        }

    })(req, res, next);
}