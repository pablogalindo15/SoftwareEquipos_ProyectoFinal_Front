import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';
import { LugarDetailComponent } from './lugar-detail/lugar-detail.component';


@NgModule({
  declarations: [
    LugarListComponent,
    LugarDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LugarListComponent, LugarDetailComponent]
})
export class LugarModule { }
