import { Servicio } from './servicio';

enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante};

export class ServicioDetail extends Servicio {

    constructor(
        id: number,
        nombre: string,
        costoAdicional: number,
        tipoServicio: tipoServicio
    ) {
        super(id, nombre, costoAdicional, tipoServicio);
    }
       
}

