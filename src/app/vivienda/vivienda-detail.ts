import { Vivienda, posiblesEstratos, tipoVivienda } from './vivienda'; // Import enums from vivienda.ts
import { Propietario } from "../propietario/propietario";
import { Habitante } from "../habitante/habitante";
import { Lugar } from "../lugar/lugar";

export class ViviendaDetail extends Vivienda {
    lugarDeInteres_cercano: Array<Lugar> = [];
    habitantes_actuales: Array<Habitante> = [];
    historial: Array<Habitante> = [];

    constructor(
        id: number,
        nombre: string,
        precio: number,
        descripcion: string,
        fotos: string,
        tamano: number,
        estrato: posiblesEstratos,
        restricciones: string,
        tipo: tipoVivienda,
        contacto: string,
        direccion: string,
        ocupada: boolean,
        coordX: number,
        coordY: number,
        propietario: Propietario,
        lugarDeInteres_cercano: Array<Lugar>,
        habitantes_actuales: Array<Habitante>,
        historial: Array<Habitante>
    ) {
        super(id, nombre, precio, descripcion, fotos, tamano, estrato, restricciones, tipo, contacto, direccion, ocupada, coordX, coordY, propietario);
        this.lugarDeInteres_cercano = lugarDeInteres_cercano;
        this.habitantes_actuales = habitantes_actuales;
        this.historial = historial;
    }
}

export { tipoVivienda, posiblesEstratos };
