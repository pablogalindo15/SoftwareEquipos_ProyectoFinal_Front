import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitanteListComponent } from './habitante-list/habitante-list.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HabitanteListComponent],
  exports: [HabitanteListComponent]

})
export class HabitanteModule { }
