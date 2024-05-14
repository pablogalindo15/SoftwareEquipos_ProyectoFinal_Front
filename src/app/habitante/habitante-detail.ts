import { Habitante } from "./habitante";
import { Vivienda } from "../vivienda/vivienda";




export class HabitanteDetail extends Habitante {
    viviendas: Array<Vivienda> = [];

   

    constructor(
        id:number,
        nombre: string,
        cedula: string,
        viviendas: Array<Vivienda>
    ) 
        
        {
        super(id, nombre, cedula);
        this.viviendas = viviendas;
        

        }




}