import { Vivienda } from "./vivienda";
import { Propietario } from "../propietario/propietario";

enum posiblesEstratos{
    uno,  dos, tres, cuatro, cinco, seis
};

enum tipoVivienda{
    apartaestudio, apartamentoComp, habitaconEnApto, habitacionFamilia
};

export class ViviendaDetail extends Vivienda{
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
    )

    {
        super(id, nombre,precio,descripcion,fotos,tamano,estrato,restricciones,tipo,contacto,direccion,ocupada,coordX, coordY, propietario)
    }

}