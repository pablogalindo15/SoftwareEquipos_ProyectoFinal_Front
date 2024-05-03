import { Component, Input, OnInit } from '@angular/core';
import { Vivienda } from '../vivienda';
import {ViviendaDetail} from '../vivienda-detail'

@Component({
  selector: 'app-vivienda-detail',
  templateUrl: './vivienda-detail.component.html',
  styleUrl: './vivienda-detail.component.css'
})
export class ViviendaDetailComponent {
  @Input() viviendaDetail: ViviendaDetail | null=null;
}
 