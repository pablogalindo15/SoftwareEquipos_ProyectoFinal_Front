import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';



@NgModule({
  declarations: [
    PropietarioListComponent
  ],
  imports: [
    CommonModule, PropietarioListComponent
  ],
  exports: [
    PropietarioListComponent
  ]
})
export class PropietarioModule { }
