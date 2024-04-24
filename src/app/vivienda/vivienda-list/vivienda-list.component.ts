import { Component, OnInit } from '@angular/core';
import {Vivienda} from '../vivienda';
import { ViviendaService } from '../vivienda.service';


@Component({
  selector: 'app-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrl: './vivienda-list.component.css'
})
export class ViviendaListComponent implements OnInit{

  x = "hola";
  viviendas: Array<Vivienda> = [];
  
  constructor(private viviendaService: ViviendaService) { }

  getViviendas(): void{
    this.viviendaService.getViviendas().subscribe((viviendas) => {
      this.viviendas = viviendas;
    });
  }
  ngOnInit(){
      this.getViviendas();
  }

}
