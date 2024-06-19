import {z} from "zod";
import { UserRepository } from "../../repositories/user.repository";


export const validateUser = z.object({
    username: 
    z.string({
        required_error: "username es obligatorio"
    })
    .min(1, {message: "el minimmo de caracteres para username debe ser de 1"})
    .trim()
    .refine(async (value)=>{

        const user = await UserRepository.findOneUsername(value);
        return user === null;

    },{message: "El usuario ya existe"}), 
    password:
     z.string({
        required_error: "La password es obligatoria"
     })
     .min(6, {message: "el minimo de caracterese que debe tener password es de 6"})
     .trim()
});

export  const  validateUserPartial= validateUser.partial();

