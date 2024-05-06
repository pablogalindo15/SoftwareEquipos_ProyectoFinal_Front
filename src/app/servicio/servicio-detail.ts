import { Servicio } from './servicio';

enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante};

export class ServicioDetail extends Servicio {

    constructor(
      
        nombre: string,
        costoAdicional: number,
        tipoServicio: tipoServicio
    ) {
        super(nombre, costoAdicional, tipoServicio);
    }
       
}

