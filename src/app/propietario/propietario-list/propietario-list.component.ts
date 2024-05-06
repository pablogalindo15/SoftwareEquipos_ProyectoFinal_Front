import { Component, OnInit } from '@angular/core';
import { Propietario } from '../propietario';
import { PropietarioService } from '../propietario.service';
import { PropietarioDetail } from '../propietario-detail';

@Component({
  selector: 'app-propietario-list',
  templateUrl: './propietario-list.component.html',
  styleUrl: './propietario-list.component.css'
})
export class PropietarioListComponent implements OnInit {

  selectedPropietario!: PropietarioDetail;
  selected: Boolean = false;
  propietarios: Array<PropietarioDetail> = [];

  onSelected(propietario: PropietarioDetail): void {
    this.selected = true;
    this.selectedPropietario = propietario;
  }

  constructor(private propietarioService: PropietarioService) { }
 
  getPropietarios(): void {
    this.propietarioService.getPropietarios().subscribe((propietarios) => {
      this.propietarios = propietarios;
    });
  }
 
  ngOnInit() {
    this.getPropietarios()
}
}
