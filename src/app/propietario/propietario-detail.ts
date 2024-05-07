import { Vivienda } from "../vivienda/vivienda";
import { Propietario } from "./propietario";

export class PropietarioDetail extends Propietario {
 viviendas: Array<Vivienda> = [];

 constructor(
    id:number,
    foto:string,
    nombre:string,
    celular:number,
    correo:string,
    viviendas: Array<Vivienda>
 ) {
   super(id, foto, nombre, celular, correo);
   this.viviendas = viviendas;
   
 }
}
