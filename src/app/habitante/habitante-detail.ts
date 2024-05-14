import { Habitante } from "./habitante";
import { Vivienda } from "../vivienda/vivienda";




export class HabitanteDetail extends Habitante {

   

    constructor(
        id:number,
        nombre: string,
        cedula: string) 
        
        {
        super(id, nombre, cedula);
        

        }




}