import { Lugar } from './lugar';

export enum TipoLugar {
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
        tipo: TipoLugar
    ) {
        super(id, nombre, fotos, tiempoLLegada, gratis, precioMin, precioMax, coordenadaX, coordenadaY, tipo);
    }
    

}
