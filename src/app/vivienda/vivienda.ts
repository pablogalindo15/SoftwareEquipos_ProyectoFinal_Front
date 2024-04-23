export class Vivienda {
    id:number;
    nombre: string;
    precio: number;
    descripcion: string;
    fotos: string;
    tamano: number;
    posiblesEstratos: any;
    estrato:any;
    restricciones: string;
    tipo:any;
    contacto:string;
    direccion: string;
    ocupada: boolean;
    coordX:number;
    coordY: number;
    //faltan enumeraciones y propietario
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
    ){
        this.id = id;
        this.nombre=nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.fotos = fotos;
        this.tamano = tamano;
        this.posiblesEstratos=posiblesEstratos;
        this.estrato = estrato;
        this.restricciones = restricciones;
        this.tipo = tipo;
        this.contacto = contacto;
        this.direccion = direccion;
        this.ocupada = ocupada;
        this.coordX = coordX;
        this.coordY = coordY;
    }
}