import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';



@NgModule({
  declarations: [
    ViviendaListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ViviendaListComponent]
})
export class ViviendaModule { }
