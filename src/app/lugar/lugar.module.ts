import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';
import { RouterModule } from '@angular/router';
import {LugarRoutingModule} from './lugar-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LugarListComponent,
    LugarDetailComponent
  ],
  imports: [
    CommonModule, RouterModule, LugarRoutingModule, HttpClientModule
  ],
  exports:[LugarListComponent, LugarDetailComponent]
})
export class LugarModule { }