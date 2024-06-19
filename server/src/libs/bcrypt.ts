import bcrypt from "bcrypt";

export async function hashPassword(password:string){

    const salt  = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export async function comparePassword(reqPassword:string, dbdPassowrd:string){
    return await bcrypt.compare(reqPassword, dbdPassowrd);
}