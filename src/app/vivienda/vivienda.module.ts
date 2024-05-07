import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';
import { ViviendaDetailComponent } from './vivienda-detail/vivienda-detail.component';
import { ViviendaRoutingModule } from './vivienda-routing.module';


@NgModule({
  declarations: [
    ViviendaListComponent,
    ViviendaDetailComponent
  ],
  imports: [
    CommonModule,
    ViviendaRoutingModule
  ],
  exports:[
    ViviendaListComponent,
    ViviendaDetailComponent
  ]
})
export class ViviendaModule { }
