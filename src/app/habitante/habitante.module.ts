import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitanteListComponent } from './habitante-list/habitante-list.component';
import { HabitanteDetailComponent } from './habitante-detail/habitante-detail.component';
import { RouterModule } from '@angular/router';
import { HabitanteRoutingModule } from './habitante-routing.module';



@NgModule({
  imports: [CommonModule, RouterModule, HabitanteRoutingModule],
  declarations: [HabitanteListComponent, HabitanteDetailComponent],
  exports: [HabitanteListComponent]

})
export class HabitanteModule { }
