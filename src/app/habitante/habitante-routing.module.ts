import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitanteListComponent } from './habitante-list/habitante-list.component';
import { HabitanteDetailComponent } from './habitante-detail/habitante-detail.component';


const routes: Routes = [
  {
    path: 'habitantes',
    component: HabitanteListComponent
  },
  {
    path:  ':id',
    component: HabitanteDetailComponent
  }

];
  

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HabitanteRoutingModule { }
