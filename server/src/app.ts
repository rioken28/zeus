import express , {Application, NextFunction, Request, Response, request, response} from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import { SERVER_CONFIG } from "./config/server.config";
import dataSource from "./database/typeOrm.connect";
import { apiRouter } from "./routes";
import { BadRequestException, ForbiddenException, InternalServerError, NotFoundException, UnauthorizedException } from "./utils/exceptions/http.exceptions";
import { badRequestmidd, forbiddenMidd, internalSerMidd, notFoundMidd, unauthorizedException } from "./middlewares/midd_error/httpErrorsMiddlewares";




export class Server{

    private app!:Application;
    private port!:String;

    static SINGLETON:Server;

    private constructor(){

        //initializacion
        this.app = express();
        this.port = SERVER_CONFIG.port

        //metods
        this.dbd();
        this.upServer();
        this.middlewares();
        this.routes();
        this.middError();
      
    }

    static IMPLEMENT_SIMGLETON(){
        if(!Server.SINGLETON){
            Server.SINGLETON = new Server;
        }
        return Server.SINGLETON;
    }   

    middlewares(){
        this.app.use(helmet());
        this.app.use(cors({credentials: true, methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], origin: "*"}));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        
    }

    middError(){
        this.app.use((err:NotFoundException, req:Request, res:Response, next:NextFunction)=>{
            notFoundMidd(err, req, res, next);
        });
        this.app.use((err:ForbiddenException, req:Request, res:Response, next:NextFunction)=>{
            forbiddenMidd(err, req, res, next);
        });
        this.app.use((err:BadRequestException, req:Request, res:Response, next:NextFunction)=>{
            badRequestmidd(err, req, res, next);
        });
        this.app.use((err:UnauthorizedException, req:Request, res:Response, next:NextFunction)=>{
            unauthorizedException(err, req, res, next);
        });
        this.app.use((err:InternalServerError, req:Request, res:Response)=>{
            internalSerMidd(err, req, res);
        });
   
    }

    routes(){
        apiRouter(this.app);
    }

    async dbd(){
        try{

            await dataSource.initialize();
            console.log("Conexion realizada con exito");

        }catch(err){

            console.log("Error de conexion a la base de datos --> " + err);
        }
    }

    upServer(){
        this.app.listen(this.port, ()=>{
            console.log(`http://localhost:${this.port}`);
        });
    }
    
}

