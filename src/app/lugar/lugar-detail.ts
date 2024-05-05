import { Lugar } from './lugar';

enum tipoLugar {
    Universidad,
    Restaurante,
    Supermercado,
    Parque,
    CentroComercial
}

export class LugarDetail extends Lugar {

    constructor(
        id: number,
        nombre: string,
        fotos: string,
        tiempoLLegada: number,
        gratis: boolean,
        precioMin: number,
        precioMax: number,
        coordenadaX: number,
        coordenadaY: number,
        tipoLugar: tipoLugar
    ) {
        super(id, nombre, fotos, tiempoLLegada, gratis, precioMin, precioMax, coordenadaX, coordenadaY, tipoLugar);
    }
}

