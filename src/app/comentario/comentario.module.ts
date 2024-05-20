import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';
import { RouterModule } from '@angular/router';
import { ComentarioRoutingModule } from './comentario-routing.module';


@NgModule({
  declarations: [
    ComentarioListComponent,
    ComentarioDetailComponent
  ],
  imports: [
    CommonModule,RouterModule,ComentarioRoutingModule
  ],
  exports:[ComentarioListComponent, ComentarioDetailComponent]
})
export class ComentarioModule{ }
