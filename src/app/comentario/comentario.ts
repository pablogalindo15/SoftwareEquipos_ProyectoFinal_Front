
import { Habitante } from "../habitante/habitante";

export class Comentario {
    id:number;
    titulo: string;
    texto: string;
    calificacion: number;
    nombre: string;
    constructor(
        id:number,
        titulo:string,
        texto:string,
        calificacion:number,
        nombre:string
    ){
        this.id = id;
        this.titulo=titulo;
        this.texto=texto;
        this.calificacion = calificacion;
        this.nombre = nombre
    }
    
}
