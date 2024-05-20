import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import {Routes,RouterModule} from '@angular/router';

const rutas: Routes =[{
  path:'comentarios',
  children:[
      {
          path:'list',
          component: ComentarioListComponent
      },
      {
          path:':id',
          component: ComentarioDetailComponent
      },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class ComentarioRoutingModule { }
