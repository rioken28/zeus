import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt"; 
import { Payload } from "../models/interfaces/global.interface";
import { UserRepository } from "../repositories/user.repository";
import { SERVER_CONFIG } from "../config/server.config";

passport.use(
    'jwt', 
    new Strategy({

        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
        secretOrKey: SERVER_CONFIG.secretJwt as string,
        ignoreExpiration: false
 
    }, async (payload:Payload, cb)=>{

            try{

                const user = await UserRepository.findOneUsername(payload.username);

            if(!user){
                return cb(null, false, {message: "Usuario no identificado"});
            }   

            return cb(null, payload);

        }catch(err){
            return cb(err, false);
        }   
    })
);

export default passport;