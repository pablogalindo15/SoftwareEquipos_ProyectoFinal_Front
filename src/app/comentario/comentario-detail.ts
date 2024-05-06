import { Comentario } from './comentario';



export class ComentarioDetail extends Comentario {

    constructor(
        id: number,
        titulo: string,
        texto: string,
        calificacion: number,
        nombre: string
    ) {
        super(id, titulo,texto,calificacion,nombre);
    }
}

