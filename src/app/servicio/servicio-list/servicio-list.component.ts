import { Component, OnInit } from '@angular/core';
import { Servicio } from '../servicio';
import { ServicioService } from '../servicio.service';


@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrl: './servicio-list.component.css'
})
export class ServicioListComponent implements OnInit {
  
  servicios: Array<Servicio> = [];
  selectedServicio!: Servicio;
  selected: Boolean = false;
  
  constructor(private servicioService: ServicioService) { }

  onSelected(servicio: Servicio): void {
    this.selected = true;
    this.selectedServicio = servicio;
  }
  getServicios(): void {
    this.servicioService.getServicios().subscribe((servicios) => {
      this.servicios=servicios;
    });
  }

  ngOnInit(): void {
    this.getServicios();
  }

}
