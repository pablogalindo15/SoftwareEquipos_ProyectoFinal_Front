
import { Habitante } from "../habitante/habitante";

export class Comentario {
    id:number;
    titulo: string;
    calificacion: number;
    nombre: string;
    constructor(
        id:number,
        titulo:string,
        calificacion:number,
        nombre:string
    ){
        this.id = id;
        this.titulo=titulo;
        this.calificacion = calificacion;
        this.nombre = nombre
    }
    
}
