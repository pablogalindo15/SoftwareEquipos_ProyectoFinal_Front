import { Component, OnInit, Input } from '@angular/core';
import { ServicioDetail } from '../servicio-detail';

@Component({
  selector: 'app-servicio-detail',
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.css']
})
export class ServicioDetailComponent implements OnInit {

  @Input() servicioDetail!: ServicioDetail

  constructor() { }

  ngOnInit() {
  }

}
