import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';
import { ViviendaDetailComponent } from './vivienda-detail/vivienda-detail.component';


@NgModule({
  declarations: [
    ViviendaListComponent,
    ViviendaDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ViviendaListComponent,
    ViviendaDetailComponent
  ]
})
export class ViviendaModule { }
