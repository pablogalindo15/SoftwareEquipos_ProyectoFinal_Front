import { Component, Input, OnInit } from '@angular/core';
import { Habitante } from '../habitante';

@Component({
  selector: 'app-habitante-detail',
  templateUrl: './habitante-detail.component.html',
  styleUrl: './habitante-detail.component.css'
})
export class HabitanteDetailComponent implements OnInit{

  @Input() habitanteDetail!: Habitante;

  constructor() { }

  ngOnInit(): void {
  }

}
