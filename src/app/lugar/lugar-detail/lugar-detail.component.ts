import { Component, Input, OnInit } from '@angular/core';
import { LugarDetail } from '../lugar-detail';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar-detail',
  templateUrl: './lugar-detail.component.html',
  styleUrls: ['./lugar-detail.component.css']
})
export class LugarDetailComponent implements OnInit {
  lugarId!: string;
  @Input() lugarDetail!: LugarDetail; 
  constructor() {}
  ngOnInit() {
  }

}