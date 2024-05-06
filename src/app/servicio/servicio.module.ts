import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';



@NgModule({
  declarations: [
    ServicioListComponent, ServicioDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicioListComponent
  ]
})
export class ServicioModule { }
