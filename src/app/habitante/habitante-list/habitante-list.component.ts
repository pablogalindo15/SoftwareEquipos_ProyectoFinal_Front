import { Component, OnInit } from '@angular/core';
import { HabitanteService } from '../habitante.service';
import { Habitante } from '../habitante';

@Component({
  selector: 'app-habitante-list',
  templateUrl: './habitante-list.component.html',
  styleUrls: ['./habitante-list.component.css']
})
export class HabitanteListComponent implements OnInit {
  
  habitantes: Array<Habitante> = []; 

  constructor(private habitanteService: HabitanteService) { }
  
  getHabitantes(): void {
    this.habitanteService.getHabitantes().subscribe((habitantes) =>{ this.habitantes = habitantes;
  });
  }

  ngOnInit() {
    this.getHabitantes();
  }

}

