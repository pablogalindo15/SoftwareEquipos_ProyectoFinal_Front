import { Component, OnInit } from '@angular/core';
import {Lugar} from '../lugar';
import { LugarService } from '../lugar.service';
import { LugarDetail } from '../lugar-detail';


@Component({
  selector: 'app-lugar-list',
  templateUrl: './lugar-list.component.html',
  styleUrl: './lugar-list.component.css'
})
export class LugarListComponent implements OnInit{

  lugares: Array<Lugar> = [];
  selected: Boolean = false;
  selectedLugar!: LugarDetail;
  
  constructor(private lugarService: LugarService) { }
  
  ngOnInit(){
      this.getLugares();
  }
  getLugares(): void{
    this.lugarService.getLugares().subscribe((lugares) => {
      this.lugares = lugares;
    });
  }
  onSelected(lugar: LugarDetail): void {
    this.selected = true;
    this.selectedLugar = lugar;
  }
  

}
