import { Vivienda } from "./vivienda";
import { Propietario } from "../propietario/propietario";
import { Habitante } from "../habitante/habitante";
import { lugar } from "../lugar/lugar";

enum posiblesEstratos{
    uno,  dos, tres, cuatro, cinco, seis
};

enum tipoVivienda{
    apartaestudio, apartamentoComp, habitaconEnApto, habitacionFamilia
};

export class ViviendaDetail extends Vivienda{
    lugarDeInteres_cercano: Array<lugar>= [];
    habitantes_actuales: Array<Habitante>=[];
    historial: Array<Habitante>=[];

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
        propietario: Propietario,
        lugarDeInteres_cercano: Array<lugar>,
        habitantes_actuales:Array<Habitante>,
        historial: Array<Habitante>
    )

    {
        super(id, nombre,precio,descripcion,fotos,tamano,estrato,restricciones,tipo,contacto,direccion,ocupada,coordX, coordY, propietario)
        this.lugarDeInteres_cercano= lugarDeInteres_cercano;
        this.habitantes_actuales= habitantes_actuales;
        this.historial=historial
    }

}