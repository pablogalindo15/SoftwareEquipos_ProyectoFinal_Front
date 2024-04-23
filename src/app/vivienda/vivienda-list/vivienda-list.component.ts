import { Component, OnInit } from '@angular/core';
import { ViviendaService } from '../vivienda.service';
import { Vivienda } from '../vivienda';



@Component({
  selector: 'app-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrl: './vivienda-list.component.css'
})
export class ViviendaListComponent  implements OnInit{

  constructor(private viviendaService: ViviendaService) {}
  viviendas: Array<Vivienda> = [];

  getViviendas(): void {
    this.viviendaService.getViviendas().subscribe((viviendas) => {
      this.viviendas = viviendas;
    });
  }
  ngOnInit() {
    this.getViviendas();
  }

}
