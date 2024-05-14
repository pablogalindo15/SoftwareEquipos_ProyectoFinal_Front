import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabitanteListComponent } from './habitante-list/habitante-list.component';
import { HabitanteDetailComponent } from './habitante-detail/habitante-detail.component';


const routes: Routes = [
  {
    path: 'habitantes',
    children: [
      {
        path: 'list',
        component: HabitanteListComponent
      },
      {
        path: ':id',
        component: HabitanteDetailComponent
      }
    ]
  }
];1
  

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HabitanteRoutingModule { }
