import passport from "passport";
import { Strategy } from "passport-local";
import { UserRepository } from "../repositories/user.repository";
import { comparePassword } from "./bcrypt";


passport.use(
    'login', 
    new Strategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, cb)=>{
        try{

            const user = await UserRepository.findOneUsername(username);
        
            if(!user){

                return cb(null, false, {message: 'usuario no valido'})
            }   
    
            const resCompare= await  comparePassword(password, user!.password);
          
            if(!resCompare){

                return cb(null, false, {message: 'contraseña no valida'});
            }

            return cb(null, user!);

        }catch(err:any){

            return cb(err, false);
        }

    })
);

export default passport;