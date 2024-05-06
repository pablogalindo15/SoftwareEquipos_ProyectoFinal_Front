import { Component, OnInit } from '@angular/core';
import { HabitanteService } from '../habitante.service';
import { Habitante } from '../habitante';
import { HabitanteDetail } from '../habitante-detail';

@Component({
  selector: 'app-habitante-list',
  templateUrl: './habitante-list.component.html',
  styleUrls: ['./habitante-list.component.css']
})
export class HabitanteListComponent implements OnInit {

  selectedHabitante!: HabitanteDetail;
  selected: Boolean = false;
  
  habitantes: Array<Habitante> = []; 


  constructor(private habitanteService: HabitanteService) { }

  getHabitantes(): void {
    this.habitanteService.getHabitantes().subscribe((habitantes) =>{ 
    this.habitantes = habitantes;
  });
  }

  ngOnInit() {
    this.getHabitantes();
  }

  onSelected(habitante: HabitanteDetail): void {
    this.selected = true;
    this.selectedHabitante = habitante;
  }

}

