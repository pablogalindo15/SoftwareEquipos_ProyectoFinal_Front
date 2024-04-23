import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarListComponent } from './lugar-list/lugar-list.component';



@NgModule({
  declarations: [
    LugarListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[LugarListComponent]
})
export class LugarModule { }
