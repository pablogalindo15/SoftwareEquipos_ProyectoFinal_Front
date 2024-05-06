import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';
import { PropietarioDetailComponent } from './propietario-detail/propietario-detail.component';



@NgModule({
  declarations: [
    PropietarioListComponent,
    PropietarioDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PropietarioListComponent]
})
export class PropietarioModule { }
