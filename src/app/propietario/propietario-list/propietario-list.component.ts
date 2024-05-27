import { Component, OnInit } from '@angular/core';
import { PropietarioService } from '../propietario.service';
import { PropietarioDetail } from '../propietario-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-propietario-list',
  templateUrl: './propietario-list.component.html',
  styleUrls: ['./propietario-list.component.css']
})
export class PropietarioListComponent implements OnInit {

  selectedPropietario!: PropietarioDetail;
  selected: Boolean = false;
  propietarios: Array<PropietarioDetail> = [];
  mostrarFormulario: Boolean = false;

  onSelected(propietario: PropietarioDetail): void {
    this.selected = true;
    this.selectedPropietario = propietario;
  }

  constructor(private propietarioService: PropietarioService, private toastrService: ToastrService) { }
 
  getPropietarios(): void {
    this.propietarioService.getPropietarios().subscribe((propietarios) => {
      this.propietarios = propietarios;
    });
  }

  agregarPropietario(propietario: PropietarioDetail): void {
    this.propietarioService.createPropietario(propietario).subscribe({
      next: (nuevoPropietario) => {
        this.propietarios.push(nuevoPropietario);
        this.toastrService.success('Propietario agregado exitosamente');
        this.mostrarFormulario = false;
      },
      error: (error) => {
        this.toastrService.error(error, 'Error agregando propietario');
      }
    });
  }
 
  ngOnInit() {
    this.getPropietarios();
  }
}
