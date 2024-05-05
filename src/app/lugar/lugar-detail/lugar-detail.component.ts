import { Component, Input, OnInit } from '@angular/core';
import { LugarDetail } from '../lugar-detail';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent implements OnInit {

  @Input() lugarDetail!: LugarDetail; 
  


  constructor() { }

  ngOnInit() {
  }
}
