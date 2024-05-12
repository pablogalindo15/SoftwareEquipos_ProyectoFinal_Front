enum TipoLugar {Universidad, Restaurante, Supermercado, Parque, CentroComercial };

export class Lugar {
    id:number;
    nombre: string;
    fotos: string;
    tiempoLlegada: number;
    gratis: boolean;
    precioMin: number;
    precioMax: number;
    coordenadaX: number;
    coordenadaY: number;
    tipo: TipoLugar;

    constructor(id: number, nombre: string, fotos: string, tiempoLlegada: number, gratis: boolean, precioMin: number, precioMax: number, coordenadaX: number, coordenadaY: number, tipo: TipoLugar) {
        this.id=id;
        this.nombre = nombre;
        this.fotos = fotos;
        this.tiempoLlegada = tiempoLlegada;
        this.gratis = gratis;
        this.precioMin = precioMin;
        this.precioMax = precioMax;
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
        this.tipo =tipo;
    }
}
