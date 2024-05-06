import { Component, OnInit } from '@angular/core';
import { Propietario } from '../propietario';
import { PropietarioService } from '../propietario.service';

@Component({
  selector: 'app-propietario-list',
  templateUrl: './propietario-list.component.html',
  styleUrl: './propietario-list.component.css'
})
export class PropietarioListComponent implements OnInit {
  propietarios: Array<Propietario> = [];

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
