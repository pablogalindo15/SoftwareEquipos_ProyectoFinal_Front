enum tipoLugar {Universidad, Restaurante, Supermercado, Parque, CentroComercial };

export class Review {
    id:number;
    nombre: string;
    fotos: string;
    tiempoLlegada: number;
    gratis: boolean;
    precioMin: number;
    precioMax: number;
    coordenadaX: number;
    coordenadaY: number;
    tipoLugar: tipoLugar;

    constructor(id: number,nombre: string, fotos: string, tiempoLlegada: number, gratis: boolean, precioMin: number, precioMax: number, coordenadaX: number, coordenadaY: number, tipoLugar: tipoLugar) {
        this.id=id;
        this.nombre = nombre;
        this.fotos = fotos;
        this.tiempoLlegada = tiempoLlegada;
        this.gratis = gratis;
        this.precioMin = precioMin;
        this.precioMax = precioMax;
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
        this.tipoLugar = tipoLugar;
    }
}
