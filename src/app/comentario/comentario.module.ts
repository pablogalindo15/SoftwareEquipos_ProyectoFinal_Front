import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';


@NgModule({
  declarations: [
    ComentarioListComponent,
    ComentarioDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ComentarioListComponent, ComentarioDetailComponent]
})
export class ComentarioModule{ }
