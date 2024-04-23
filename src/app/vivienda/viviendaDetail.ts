import {Lugar} from "../lugar/lugar";

import { Vivienda } from "./vivienda";

export class ViviendaDetail extends Vivienda{
    lugarDeInteres_cercano: Array<Lugar> =[];

    constructor(
        id:number,
        nombre: string,
        precio: number,
        descripcion: string,
        fotos: string,
        tamano: number,
        posiblesEstratos: any,
        estrato:any,
        restricciones: string,
        tipo:any,
        contacto:string,
        direccion: string,
        ocupada: boolean,
        coordX:number,
        coordY: number,
        lugarDeInteres_cercano:Array<Lugar>
    ){
        super(id, nombre,precio, descripcion,fotos,tamano,posiblesEstratos, estrato,restricciones,tipo,contacto,direccion,ocupada,coordX,coordY);
        this.lugarDeInteres_cercano =lugarDeInteres_cercano;
   }
}