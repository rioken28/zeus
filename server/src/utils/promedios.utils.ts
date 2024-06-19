import { ResAlimentacion } from "../models/interfaces/global.interface";

export function promedios(data:Array<ResAlimentacion>, servicio?:string, verificacion?:boolean){
    let suma = 0;
    let contador = 0;
    let promedio = 0;
    for(let datos of data){
        if((datos.nombre_servicio === servicio) || verificacion === true){
            suma+=datos.cantidad;
            contador+=1;
        }
    }
    if(contador === 0) contador+=1;
    promedio = suma / contador;    
    promedio = parseFloat(promedio.toFixed(2));
    return {suma, promedio};
}