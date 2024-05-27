import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';
import { PropietarioDetailComponent } from './propietario-detail/propietario-detail.component';
import { CreatePropietarioComponent } from './createPropietario/createPropietario.component';
import { RouterModule } from '@angular/router';
import { PropietarioRoutingModule } from './propietario-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule y FormsModule

@NgModule({
  declarations: [
    PropietarioListComponent,
    PropietarioDetailComponent,
    CreatePropietarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PropietarioRoutingModule,
    ReactiveFormsModule, // Asegúrate de importar ReactiveFormsModule
    FormsModule // Asegúrate de importar FormsModule
  ],
  exports: [PropietarioListComponent]
})
export class PropietarioModule { }
