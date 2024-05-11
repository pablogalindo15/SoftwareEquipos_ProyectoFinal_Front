import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';
import { PropietarioDetailComponent } from './propietario-detail/propietario-detail.component';
import { RouterModule } from '@angular/router';
import { PropietarioRoutingModule } from './propietario-routing.module';



@NgModule({
  declarations: [
    PropietarioListComponent,
    PropietarioDetailComponent
  ],
  imports: [
    CommonModule, RouterModule, PropietarioRoutingModule
  ],
  exports:[PropietarioListComponent]
})
export class PropietarioModule { }
