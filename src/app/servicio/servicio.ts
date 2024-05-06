enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante };

export class Servicio {
nombre: string;
costoAdicional: number;
tipoServicio: tipoServicio;

constructor(nombre: string, costoAdicional: number, tipoServicio: tipoServicio){
    this.nombre = nombre;
    this.costoAdicional = costoAdicional;
    this.tipoServicio = tipoServicio;
    }
}   

