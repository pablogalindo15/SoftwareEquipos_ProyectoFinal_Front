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
  constructor(
    private route: ActivatedRoute,
    private lugarService: LugarService
  ) {}

  getLugar(){
    this.lugarService.getLugar(this.lugarId).subscribe(apiData=>{
      this.lugarDetail = apiData;
    })
  }

  ngOnInit() {
    if(this.lugarDetail === undefined){
      this.lugarId = this.route.snapshot.paramMap.get('id')!
      if (this.lugarId) {
        this.getLugar();
      }
    }
  }
}