import { Component, OnInit } from '@angular/core';
import {Vivienda} from '../vivienda';
import { ViviendaService } from '../vivienda.service';
import { ViviendaDetail } from '../vivienda-detail';


@Component({
  selector: 'app-vivienda-list',
  templateUrl: './vivienda-list.component.html',
  styleUrl: './vivienda-list.component.css'
})
export class ViviendaListComponent implements OnInit{

  selectedVivienda!: ViviendaDetail;
  selected: Boolean = false;

  viviendas: Array<ViviendaDetail> = [];
  
  constructor(private viviendaService: ViviendaService) { }

  getViviendas(): void{
    this.viviendaService.getViviendas().subscribe((viviendas) => {
      this.viviendas = viviendas;
    });
  }
  ngOnInit(){
      this.getViviendas();
  }

  onSelected(vivienda: ViviendaDetail): void{
    this.selected= true;
    this.selectedVivienda = vivienda;
  }

}
