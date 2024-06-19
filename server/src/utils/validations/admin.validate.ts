import { body, oneOf } from "express-validator";
import { UserRepository } from "../../repositories/user.repository";
import { BadRequestException } from "../exceptions/http.exceptions";
import {z} from "zod";
import { validateUser } from "./user.validate";

const validateAdmin = z.object({
    nombre: z.string({required_error: "nombre es un campo obligatorio"}).trim(),
    rut:z.string({required_error: "rut es un campo obligatorio"}).trim(),
    apellidoPaterno:z.string().trim().optional(),
    apellidoMaterno:z.string().trim().optional(),
    contacto:z.string({required_error: "contacto es un campo obligatorio"}).trim(),
    
})


export const validateAdminSchema = validateAdmin.merge(validateUser);