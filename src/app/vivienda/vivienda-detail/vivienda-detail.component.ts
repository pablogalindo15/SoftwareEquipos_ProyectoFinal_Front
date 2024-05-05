import { Component, Input, OnInit } from '@angular/core';
import {ViviendaDetail} from '../vivienda-detail'

@Component({
  selector: 'app-vivienda-detail',
  templateUrl: './vivienda-detail.component.html',
  styleUrl: './vivienda-detail.component.css'
})
export class ViviendaDetailComponent implements OnInit{
  @Input() viviendaDetail !: ViviendaDetail;

  constructor(){}

  ngOnInit(){

  }
}
