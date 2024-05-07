import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViviendaDetailComponent } from './vivienda-detail/vivienda-detail.component';
import { ViviendaListComponent } from './vivienda-list/vivienda-list.component';


const routes: Routes=[{

  path: 'viviendas',
  children:[
    {
      path:'list',
      component: ViviendaListComponent
    },
    {
      path:':id',
      component:ViviendaDetailComponent
    },
  ]
}]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ViviendaRoutingModule { }
