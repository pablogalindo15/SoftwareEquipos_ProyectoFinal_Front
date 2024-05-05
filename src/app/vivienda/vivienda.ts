import { Propietario } from "../propietario/propietario";

enum posiblesEstratos{
    uno,  dos, tres, cuatro, cinco, seis
};

enum tipoVivienda{
    apartaestudio, apartamentoComp, habitaconEnApto, habitacionFamilia
};


export class Vivienda {
    id:number;
    nombre: string;
    precio: number;
    descripcion: string;
    fotos: string;
    tamano: number;
    estrato:posiblesEstratos;
    restricciones: string;
    tipo:tipoVivienda;
    contacto:string;
    direccion: string;
    ocupada: boolean;
    coordX:number;
    coordY: number;
    propietario: Propietario;
    constructor(
        id:number,
        nombre: string,
        precio: number,
        descripcion: string,
        fotos: string,
        tamano: number,
        estrato:posiblesEstratos,
        restricciones: string,
        tipo:tipoVivienda,
        contacto:string,
        direccion: string,
        ocupada: boolean,
        coordX:number,
        coordY: number,
        propietario: Propietario
    ){
        this.id = id;
        this.nombre=nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.fotos = fotos;
        this.tamano = tamano;
        this.estrato = estrato;
        this.restricciones = restricciones;
        this.tipo = tipo;
        this.contacto = contacto;
        this.direccion = direccion;
        this.ocupada = ocupada;
        this.coordX = coordX;
        this.coordY = coordY;
        this.propietario = propietario
    }

}