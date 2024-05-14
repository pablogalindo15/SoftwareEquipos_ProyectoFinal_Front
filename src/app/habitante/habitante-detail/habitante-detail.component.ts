import { Component, Input, OnInit } from '@angular/core';
import { Habitante } from '../habitante';
import { HabitanteDetail } from '../habitante-detail';

@Component({
  selector: 'app-habitante-detail',
  templateUrl: './habitante-detail.component.html',
  styleUrl: './habitante-detail.component.css'
})
export class HabitanteDetailComponent implements OnInit{

  habitanteId!: string;
  @Input() habitanteDetail!: HabitanteDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
