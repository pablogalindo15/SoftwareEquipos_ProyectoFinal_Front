import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitanteListComponent } from './habitante-list/habitante-list.component';
import { HabitanteDetailComponent } from './habitante-detail/habitante-detail.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HabitanteListComponent, HabitanteDetailComponent],
  exports: [HabitanteListComponent, HabitanteDetailComponent]

})
export class HabitanteModule { }
