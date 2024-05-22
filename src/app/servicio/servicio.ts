enum tipoServicio {parqueadero, gimansio, lavanderia, deposito, restaurante };

export class Servicio {
id:number;
nombre: string;
costoAdicional: number;
tipoServicio: tipoServicio;

constructor(id:number, nombre: string, costoAdicional: number, tipoServicio: tipoServicio){ 
    this.id = id;
    this.nombre = nombre;
    this.costoAdicional = costoAdicional;
    this.tipoServicio = tipoServicio;
    }
}   

