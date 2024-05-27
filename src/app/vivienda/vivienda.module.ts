import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';
import { ViviendaDetailComponent } from './vivienda-detail/vivienda-detail.component';
import { ViviendaRoutingModule } from './vivienda-routing.module';
import { ViviendaCreateComponent } from './vivienda-create/vivienda-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapaComponent } from './mapa/mapa.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ViviendaListComponent,
    ViviendaDetailComponent,
    ViviendaCreateComponent,
    MapaComponent
    ],
  imports: [
    CommonModule,
    ViviendaRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    FormsModule
    
  ],
  exports:[
    ViviendaListComponent,
    ViviendaDetailComponent,
    ViviendaCreateComponent,
    MapaComponent
  ]
})
export class ViviendaModule { }
