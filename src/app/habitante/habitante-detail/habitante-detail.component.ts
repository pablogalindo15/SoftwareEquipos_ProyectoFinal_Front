import { Component, Input, OnInit } from '@angular/core';
import { Habitante } from '../habitante';
import { HabitanteDetail } from '../habitante-detail';
import { HabitanteService } from '../habitante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habitante-detail',
  templateUrl: './habitante-detail.component.html',
  styleUrl: './habitante-detail.component.css'
})
export class HabitanteDetailComponent implements OnInit{

  habitanteId!: string;
  @Input() habitanteDetail!: HabitanteDetail;

  constructor(
    private habitanteService: HabitanteService,
    private route: ActivatedRoute

  ) { }

  getHabitante(){
    this.habitanteService.getHabitante(this.habitanteId).subscribe(habitante => this.habitanteDetail = habitante);


  }

  ngOnInit(){
  
      }
  }

