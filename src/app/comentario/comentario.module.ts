import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ComentarioListComponent],
  declarations: [ComentarioListComponent,]
})
export class ComentarioModule { }
