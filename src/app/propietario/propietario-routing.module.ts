import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PropietarioDetailComponent } from './propietario-detail/propietario-detail.component';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';

const routes: Routes = [{

  path: 'propietarios',
  children: [
    {
      path: 'list',
      component: PropietarioListComponent
    },
    {
      path: ':id',
      component: PropietarioDetailComponent
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PropietarioRoutingModule { }
