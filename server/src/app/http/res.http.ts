import { Response } from "express";

export const success = <T>(res:Response, status:number, message:string, resource?:T)=>{
    return res.status(status).json({
        status, 
        message, 
        resource
    });
}
export const error = <T>(res:Response, status:number, message:string, error?:T)=>{
    return res.status(status).json({
        status, 
        message, 
        error
    });

}