import { Component, Input } from '@angular/core';
import { Propietario } from '../propietario';
import { PropietarioDetail } from '../propietario-detail';

@Component({
  selector: 'app-propietario-detail',
  templateUrl: './propietario-detail.component.html',
  styleUrl: './propietario-detail.component.css'
})
export class PropietarioDetailComponent {
  @Input() propietarioDetail!: PropietarioDetail;

  constructor() { }
 
  ngOnInit() {
  }
}
