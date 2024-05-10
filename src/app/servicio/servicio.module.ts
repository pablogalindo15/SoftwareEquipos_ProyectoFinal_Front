import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioDetailComponent } from './servicio-detail/servicio-detail.component';
import { RouterModule } from '@angular/router';
import { ServicioRoutingModule } from './servicio-rounting.module';



@NgModule({
  declarations: [
    ServicioListComponent, ServicioDetailComponent
  ],
  imports: [
    CommonModule, RouterModule, ServicioRoutingModule
  ],
  exports: [
    ServicioListComponent]
})
export class ServicioModule { }
