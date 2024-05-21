import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import { RouterModule } from '@angular/router';
import {LugarRoutingModule} from './lugar-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MapaComponentLugar } from './mapa-lugar/mapa-lugar.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    LugarListComponent,
    LugarDetailComponent,MapaComponentLugar
  ],
  imports: [
    CommonModule, RouterModule, LugarRoutingModule, HttpClientModule,GoogleMapsModule
  ],
  exports:[LugarListComponent, LugarDetailComponent,MapaComponentLugar]
})
export class LugarModule { }