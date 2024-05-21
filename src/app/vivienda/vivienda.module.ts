import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';
import { ViviendaDetailComponent } from './vivienda-detail/vivienda-detail.component';
import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaCreateComponent } from './vivienda-create/vivienda-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ViviendaListComponent,
    ViviendaDetailComponent,
    ViviendaCreateComponent
    ],
  imports: [
    CommonModule,
    ViviendaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports:[
    ViviendaListComponent,
    ViviendaDetailComponent,
    ViviendaCreateComponent,
  ]
})
export class ViviendaModule { }
